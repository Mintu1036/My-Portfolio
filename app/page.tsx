import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-emerald-950/80 to-cyan-950/80">
      
      {/* Soft glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none" />
      
      {/* Page content */}
      <HeroSection />
    </div>
  );
}
