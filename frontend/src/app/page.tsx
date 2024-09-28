"use client"
import { Button } from "@/components/ui/button"
import { ShortenUrlInterface } from "@/interfaces/shortenUrlInterface";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify';

export default function LandingPage() {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [longUrl, setLongUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e : FormEvent ) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } : AxiosResponse<ShortenUrlInterface> = await axios.post(`${BACKEND_URL}/api/v1/url`, { url: longUrl },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        });

      if(data.status !== 200) {
        toast.error(data.message);
      } else {
        router.push(`/dashboard?shortUrl=${data.id}`)
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
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex gap-2 flex-col">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Shorten Your Links, Expand Your Reach
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create short, powerful links in seconds. Track clicks, analyze data, and boost your online presence.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form 
                  onSubmit={handleSubmit}
                  className="flex space-x-2"
                >
                  <input 
                    className="flex-1 border-2 border-gray-300 px-5 py-[5px] rounded-md" 
                    placeholder="Enter your long URL" 
                    type="url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                  />
                  <Button type="submit">{loading ? "creating..." : "Shorten"}</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose LNK?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">Create short links in seconds, not minutes.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                <p className="text-gray-500 dark:text-gray-400">No complicated setup. Just paste and shorten.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4"
                >
                  <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                  <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Detailed Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400">Track clicks and analyze your link performance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
