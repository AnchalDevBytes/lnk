export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Your Dashboard
            </h1>
            <div className="grid gap-10">
              <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Recent Links</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
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
              </div>
              <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Usage</h2>
                <p>Links created today: 5 / 20</p>
                <p>Total links: 47</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
