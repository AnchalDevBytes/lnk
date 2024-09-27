import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
              Choose Your Plan
            </h1>
            <div className="grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-center mb-4">Free</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">Perfect for personal use</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    20 links per day
                  </li>
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Basic click tracking
                  </li>
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2 text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    Bulk link creation
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">For power users and businesses</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited links
                  </li>
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Detailed analytics
                  </li>
                  <li className="flex items-center">
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
                      className="h-5 w-5 mr-2 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Bulk link creation
                  </li>
                </ul>
                <Button className="w-full">Subscribe for $20/month</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
