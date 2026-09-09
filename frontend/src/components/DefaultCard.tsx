export default function DefaultCard() {
  return (
    <div
      aria-label="No message yet. Fill in the form to send one."
      className="w-full max-w-md font-mono text-[#FCEE0A]/40"
    >
      <style>{`
        @keyframes cp-noise {
          0%   { background-position: 0 0; }
          25%  { background-position: 37px -19px; }
          50%  { background-position: -21px 43px; }
          75%  { background-position: 11px 29px; }
          100% { background-position: 0 0; }
        }
        @keyframes cp-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .cp-noise { animation: cp-noise 0.4s steps(1) infinite; }
          .cp-blink { animation: cp-blink 1.2s step-end infinite; }
        }
      `}</style>

      <div className="bg-[#FCEE0A]/20 p-0.5 [clip-path:var(--chamfer-lg)]">
        <div className="relative overflow-hidden bg-[#0D0D0D] px-6 pb-6 pt-5 [clip-path:var(--chamfer-lg)]">
          {/* Static noise — dot grid that jitters */}
          <div
            aria-hidden
            className="cp-noise pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(#FCEE0A 0.6px, transparent 0.6px)',
              backgroundSize: '5px 5px',
            }}
          />

          <header className="relative mb-4 flex items-center justify-between border-b border-[#FCEE0A]/15 pb-3 text-xs tracking-[0.2em]">
            <span>ch.00</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 border border-[#FCEE0A]/40" />
              idle
            </span>
          </header>

          <h1 className="relative text-3xl font-bold uppercase leading-none tracking-tight">
            No transmission
          </h1>
          <p className="relative mt-3 max-w-[38ch] border-l-2 border-[#FCEE0A]/20 pl-3 text-sm leading-relaxed">
            Link is open. Pick an insult, name a target, and hit send.
          </p>

          <footer className="relative mt-5 flex items-center justify-between text-[11px] tracking-widest">
            <span>
              awaiting input
              <span className="cp-blink">_</span>
            </span>
            <span className="h-0.5 w-16 bg-[#FCEE0A]/15" />
          </footer>
        </div>
      </div>
    </div>
  )
}