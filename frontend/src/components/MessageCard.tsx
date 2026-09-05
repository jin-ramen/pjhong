import { useSuspenseQuery } from '@tanstack/react-query'
import messageQuery from '../queries/messageQuery'

type Props = { name: string; from: string }

export default function MessageCard({ name, from }: Props) {
  const { data } = useSuspenseQuery(messageQuery(name, from))

  return (
    <article
      className="group relative w-full max-w-md font-mono text-[#FCEE0A] focus-within:outline-none"
      tabIndex={0}
      aria-label={`Message from ${from}`}
    >
      <style>{`
        @keyframes cp-glitch {
          0%, 92%, 100% { transform: none; clip-path: inset(0); }
          93% { transform: translate(-3px, 1px); clip-path: inset(10% 0 60% 0); }
          95% { transform: translate(3px, -1px); clip-path: inset(55% 0 20% 0); }
          97% { transform: translate(-2px, 0); clip-path: inset(30% 0 40% 0); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .cp-glitch::before,
          .cp-glitch::after { animation: cp-glitch 4s infinite steps(1); }
          .cp-glitch::after { animation-delay: -1.7s; }
        }
        .cp-glitch::before,
        .cp-glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .cp-glitch::before { color: #00F0FF; left: -2px; }
        .cp-glitch::after  { color: #FF003C; left: 2px; }
      `}</style>

      {/* Outer yellow frame, inner dark panel — both chamfered */}
      <div className="bg-[#FCEE0A] p-0.5 [clip-path:var(--chamfer-sm)]">
        <div
          className="relative overflow-hidden bg-[#0D0D0D] px-6 pb-6 pt-5 transition-colors duration-150 group-hover:bg-[#121212] [clip-path:var(--chamfer-sm)]"
        >
          {/* Scanlines */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #FCEE0A 0px, #FCEE0A 1px, transparent 1px, transparent 3px)',
            }}
          />
          {/* Cyan corner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00F0FF] opacity-[0.12] blur-3xl"
          />

          {/* Header strip: sender + status */}
          <header className="relative mb-4 flex items-center justify-between border-b border-[#FCEE0A]/30 pb-3 text-xs tracking-[0.2em]">
            <span className="text-[#00F0FF]">{from}</span>
            <span className="flex items-center gap-2 text-[#FF003C]">
              <span className="inline-block h-2 w-2 bg-[#FF003C] shadow-[0_0_8px_#FF003C]" />
              incoming
            </span>
          </header>

          {/* Message */}
          <h1
            className="cp-glitch relative text-3xl font-bold uppercase leading-none tracking-tight text-[#FCEE0A] drop-shadow-[0_0_10px_rgba(252,238,10,0.45)]"
            data-text={data.message}
          >
            {data.message}
          </h1>
          <p className="relative mt-3 max-w-[38ch] border-l-2 border-[#00F0FF] pl-3 text-sm leading-relaxed text-[#00F0FF]/80">
            {data.subtitle}
          </p>

          {/* Recipient tag */}
          <footer className="relative mt-5 flex items-center justify-between text-[11px] tracking-widest text-[#FCEE0A]/60">
            <span>to {name}</span>
            <span className="h-0.5 w-16 bg-[#FCEE0A]/40 group-hover:w-24 group-hover:bg-[#00F0FF] transition-all duration-200" />
          </footer>
        </div>
      </div>

      {/* Focus ring — cyan, follows the chamfer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-2 ring-[#00F0FF] opacity-0 group-focus-within:opacity-100 [clip-path:var(--chamfer-sm)]"
      />
    </article>
  )
}