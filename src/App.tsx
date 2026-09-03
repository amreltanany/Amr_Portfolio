import { Component, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', fontFamily: 'sans-serif' }}>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
          <details style={{ marginTop: '20px' }}>
            <summary>Error details</summary>
            <pre>{this.state.error?.stack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-bg text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
