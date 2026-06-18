import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </SmoothScroll>
      <div className="page-transition-overlay flex items-center justify-center">
        <div className="font-display text-background text-6xl md:text-9xl tracking-widest">
          E-SUMMIT '26
        </div>
      </div>
    </>
  );
}
