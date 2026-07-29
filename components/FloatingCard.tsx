interface FloatingCardProps {
  className?: string;
}

export default function FloatingCard({
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`
        absolute
        h-72
        w-52
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,.45)]
        overflow-hidden
        ${className}
      `}
    >
      {/* Marco */}
      <div className="absolute inset-3 rounded-2xl border border-white/10" />

      {/* Brillos */}
      <div className="absolute left-5 top-5 h-16 w-16 rounded-full bg-amber-400/20 blur-2xl" />
      <div className="absolute bottom-5 right-5 h-20 w-20 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-6 text-3xl text-amber-300">✦</div>

        <h3 className="text-xl font-bold tracking-[0.35em] text-white">
          LUDARIS
        </h3>

        <div className="mt-6 flex gap-3 text-slate-400">
          <span>✦</span>
          <span>◆</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  );
}
