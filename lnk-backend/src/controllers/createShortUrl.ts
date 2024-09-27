import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { nanoid } from "nanoid";

export const createShortUrl = async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { url } = body.data || body;
    console.log(url);
    
    if(!url) {
        return c.json({
            status: 400,
            message: "Url is required"
        })
    }

    const shortId = nanoid(8);
    try {
        const shortGeneratedUrl = await prisma.url.create({
            data : {
                shortId : shortId,
                redirectUrl : url,
                visitHistory : {
                    create : []
                },
                createdAt : new Date(),
            },
            select : {
                id : true,
                shortId : true,
                visitHistory : true,
                createdAt : true,
                updatedAt : true,
                _count : true,
                redirectUrl : true
            }
        })
    
        if(!shortGeneratedUrl) {
            return c.json({
                status : 500,
                message: "Error while generating url..."
            })
        }
    
        return c.json({
            status: 200,
            message: "Url generated successfully!",
            id : shortId
        })
    } catch (error) {
        if(error instanceof Error ) {
            return c.json({
                status : 500,
                message : error.message
            })
        } else {
            return c.json({
                status: 500,
                message: "Unknown error while generating url..."
            })
        }
    }
}

export const redirectToOriginalUrl = async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const shortId = c.req.param("shortId");
    if(!shortId) {
        return c.json({
            status: 400,
            message: "shortId is Required"
        })
    }

    try {
        const entry = await prisma.url.update({
            where : {shortId : shortId},
            data : {
                visitHistory : {
                    create: [{ timestamp : new Date() }]
                }
            },
            select: {
                redirectUrl : true
            }         
        })

        if(!entry || !entry.redirectUrl) {
            return c.json({
                status: 404,
                message: "URL not found"
            })
        }

        return c.redirect(entry.redirectUrl);

    } catch (error) {
        if(error instanceof Error) {
            return c.json({
                status: 500,
                message: error.message
            })
        } else {
            return c.json({
                status: 500,
                message: "Unknown error occured while redirecting to the URL..."
            })
        }
    }
}

export const analytics = async (c: Context) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const shortId = c.req.param("shortId");

    if(!shortId) {
        return c.json({
            status: 400,
            message: "shortId is Required"
        })
    }
    
    try {
        const analytics = await prisma.url.findUnique({
            where : {shortId: shortId},
            select : {
                visitHistory: true
            }
        })

        if(!analytics || !analytics.visitHistory) {
            return c.json({
                status: 404,
                message: "Anaylitics not found"
            })
        }

        return c.json({
            status: 200,
            message: "Successfully fetched analytics!!",
            totalClicks : analytics?.visitHistory.length,
            analytics: analytics?.visitHistory
        })

    } catch (error) {
        if(error instanceof Error) {
            return c.json({
                status: 500,
                message: error.message
            })
        } else {
            return c.json({
                status: 500,
                message: "Unknown error occured while fetching anaytics..."
            })
        }
    }
}
