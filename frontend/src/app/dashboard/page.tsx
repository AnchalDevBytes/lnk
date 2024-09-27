"use client"
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { AnalyticsDataType, AnalyticsInterface } from '@/interfaces/AnalyticsInterface';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [shortId, setShortId] = useState('');
  const [analyticsData, setAnalyticsData] = useState<AnalyticsDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAnalytics = async () => {
    
    try {
      setLoading(true);
      const { data } : AxiosResponse<AnalyticsInterface> = await axios.get(`${BACKEND_URL}/api/v1/url/analytics/${shortId}`);

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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Your Dashboard
            </h1>
            <div className="grid gap-10">
              {/* Recent Links Section */}
              {/* <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Recent Links</h2>
                <ul className="space-y-2"> */}
                  {/* Replace with dynamic data */}
                  {/* <li className="flex justify-between items-center">
                    <span>https://linksnip.com/abc123</span>
                    <span>Clicks: 42</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>https://linksnip.com/def456</span>
                    <span>Clicks: 18</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>https://linksnip.com/ghi789</span>
                    <span>Clicks: 7</span>
                  </li>
                </ul>
              </div> */}

              {/* Usage Section */}
              {/* <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Usage</h2>
                <p>Links created today: 5 / 20</p>
                <p>Total links: 47</p>
              </div> */}

              {/* URL Analytics Section */}
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
