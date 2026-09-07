export default function LoadingCard() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Receiving message"
      className="w-full max-w-md font-mono text-[#FCEE0A]"
    >
      <style>{`
        @keyframes cp-scan {
          from { transform: translateY(-100%); }
          to   { transform: translateY(1400%); }
        }
        @keyframes cp-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes cp-fill {
          0%   { transform: scaleX(0); }
          70%  { transform: scaleX(0.85); }
          100% { transform: scaleX(0.85); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .cp-scan  { animation: cp-scan 1.6s linear infinite; }
          .cp-blink { animation: cp-blink 0.9s step-end infinite; }
          .cp-fill  { animation: cp-fill 2.4s cubic-bezier(.2,.8,.2,1) infinite; }
        }
      `}</style>

      {/* Frame + panel, same chamfer as the real card (see --chamfer-lg in index.css) */}
      <div className="bg-[#FCEE0A]/40 p-0.5 [clip-path:var(--chamfer-lg)]">
        <div className="relative overflow-hidden bg-[#0D0D0D] px-6 pb-6 pt-5 [clip-path:var(--chamfer-lg)]">
          {/* Scan bar */}
          <div
            aria-hidden
            className="cp-scan pointer-events-none absolute inset-x-0 top-0 h-3 bg-linear-to-b from-transparent via-[#00F0FF]/40 to-[#00F0FF]/70"
          />

          {/* Header strip */}
          <div className="mb-4 flex items-center justify-between border-b border-[#FCEE0A]/20 pb-3 text-xs tracking-[0.2em]">
            <span className="h-3 w-16 bg-[#00F0FF]/30" />
            <span className="flex items-center gap-2 text-[#FF003C]">
              <span className="cp-blink inline-block h-2 w-2 bg-[#FF003C] shadow-[0_0_8px_#FF003C]" />
              receiving
            </span>
          </div>

          {/* Heading + subtitle placeholders */}
          <div className="h-8 w-3/4 bg-[#FCEE0A]/20" />
          <div className="mt-3 space-y-2 border-l-2 border-[#00F0FF]/40 pl-3">
            <div className="h-3 w-full bg-[#00F0FF]/20" />
            <div className="h-3 w-2/3 bg-[#00F0FF]/20" />
          </div>

          {/* Status line */}
          <div className="mt-5 flex items-center justify-between text-[11px] tracking-widest text-[#FCEE0A]/60">
            <span>
              decrypting
              <span className="cp-blink text-[#FF003C]">_</span>
            </span>
            <span className="relative h-0.5 w-24 bg-[#FCEE0A]/20">
              <span className="cp-fill absolute inset-0 origin-left bg-[#00F0FF]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}