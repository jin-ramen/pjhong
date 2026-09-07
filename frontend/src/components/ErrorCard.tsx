type Props = {
  error: Error
  onRetry: () => void
}

export default function ErrorCard({ error, onRetry }: Props) {
  return (
    <div
      role="alert"
      className="w-full max-w-md font-mono text-[#FF003C]"
    >
      <style>{`
        @keyframes cp-flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.4; }
          94% { opacity: 1; }
          97% { opacity: 0.6; }
          98% { opacity: 1; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .cp-flicker { animation: cp-flicker 3s infinite; }
        }
      `}</style>

      <div className="bg-[#FF003C] p-[2px] [clip-path:var(--chamfer-lg)]">
        <div className="cp-flicker relative overflow-hidden bg-[#0D0D0D] px-6 pb-6 pt-5 [clip-path:var(--chamfer-lg)]">
          {/* Hazard stripe, top-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-0 h-2 w-40 rotate-0 opacity-70"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, #FF003C 0 8px, transparent 8px 16px)',
            }}
          />
          {/* Red glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#FF003C] opacity-[0.15] blur-3xl"
          />

          <header className="relative mb-4 flex items-center justify-between border-b border-[#FF003C]/30 pb-3 text-xs tracking-[0.2em]">
            <span className="text-[#FF003C]/70">sys.err</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 bg-[#FF003C] shadow-[0_0_8px_#FF003C]" />
              fault
            </span>
          </header>

          <h1 className="relative text-3xl font-bold uppercase leading-none tracking-tight drop-shadow-[0_0_10px_rgba(255,0,60,0.5)]">
            Transmission lost
          </h1>
          <p className="relative mt-3 max-w-[38ch] break-words border-l-2 border-[#FF003C] pl-3 text-sm leading-relaxed text-[#FCEE0A]/80">
            {error.message || 'Unknown fault in the link.'}
          </p>

          <footer className="relative mt-5 flex items-center justify-between">
            <span className="text-[11px] tracking-widest text-[#FF003C]/50">
              code {error.name}
            </span>
            <button
              type="button"
              onClick={onRetry}
              className="bg-[#FF003C] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0D0D0D] transition-colors hover:bg-[#FCEE0A] focus-visible:bg-[#FCEE0A] focus-visible:outline-none [clip-path:var(--chamfer-sm)]"
            >
              Retry
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}