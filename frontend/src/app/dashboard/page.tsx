"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { AnalyticsDataType, AnalyticsInterface } from '@/interfaces/AnalyticsInterface';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [shortId, setShortId] = useState('');
  const [analyticsData, setAnalyticsData] = useState<AnalyticsDataType[]>([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const shortUrl = searchParams.get('shortUrl');
    if(shortUrl) {
      setShortId(shortUrl);
    }
  }, []);

  console.log("shortId", shortId);
  

  const fetchAnalytics = async () => { 
    try {
      setLoading(true);
      const { data } : AxiosResponse<AnalyticsInterface> = await axios.get(`${BACKEND_URL}/analytics/${shortId}`);

      if (data.status !== 200) {
        toast.error(data.message);
      } else {
        setAnalyticsData(data.analytics);
      }
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unknow error while signing up...");
      }
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${BACKEND_URL}/${shortId}`);
    toast.success("URL copied to clipboard!");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Your Dashboard
            </h1>
            <div className="grid gap-10">
              <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Shortened URL</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    readOnly
                    value={`${BACKEND_URL}/${shortId}`}
                    className="border p-2 w-full"
                  />
                  <Button onClick={copyToClipboard}>Copy URL</Button>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">URL Analytics</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your short URL ID"
                    value={shortId}
                    onChange={(e) => setShortId(e.target.value)}
                    className="border p-2 w-full"
                  />
                  <Button onClick={fetchAnalytics}>{loading ? "loading..." : "Get Analytics"}</Button>
                  {analyticsData && (
                    <div>
                      <h2 className="text-xl">Total Clicks: {analyticsData.length}</h2>
                      <ul>
                        {analyticsData.map((visit, index) => (
                          <li key={index}>{new Date(visit?.timestamp).toLocaleString()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
