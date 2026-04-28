import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MockCo',
  description: 'A mock Next.js site for pipeline testing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">MockCo</span>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t py-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 MockCo. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
