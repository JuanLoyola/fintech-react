export default function Loader() {
  return (
    <div className="loader-shell fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_42%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),rgba(2,6,23,1))]" />
      <div className="relative w-[min(92vw,28rem)] rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70">
          <video
            className="h-[18rem] w-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/intro-poster.jpg"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-violet-200/70">Valiu interface</p>
            <p className="mt-1 text-sm text-white/65">Preparando tu experiencia financiera</p>
          </div>
          <div className="h-10 w-10 animate-pulse rounded-full border border-violet-300/30 bg-violet-400/15" />
        </div>
      </div>
    </div>
  );
}
