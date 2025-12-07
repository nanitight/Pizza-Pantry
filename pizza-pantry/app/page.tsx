
export default function Home() {
  return (<main className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Pizza Pantry Inventory Manager</h1>
            <p className="py-6 text-lg">
              Track ingredients, monitor stock levels, and keep your kitchen operating efficiently.
              Built for fast-paced pizza shops.
            </p>

            <div className="flex justify-center gap-4">
              <a href="/dashboard" className="btn btn-primary btn-lg">
                Login
              </a>
              <a href="#features" className="btn btn-outline btn-lg">
                View Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title">Live Ingredient Tracking</h3>
              <p>Stay updated on cheese, dough, sauce, and topping levels in real time.</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title">Stock Alerts</h3>
              <p>Automatic notifications when ingredients are running low.</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title">Kitchen-Friendly UI</h3>
              <p>Optimized for speed — large buttons, fast forms, mobile-first layout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot / Preview */}
      <section className="py-20 bg-base-200 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">See It In Action</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mockup-window border bg-base-300">
            <div className="p-8">
              <img
                src="/demo-preview.png"
                alt="App Preview"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <aside>
          <p className="font-bold text-lg">Pizza Inventory Manager</p>
          <p>© 2025 All rights reserved.</p>
        </aside>
      </footer>
    </main>) ;
}
