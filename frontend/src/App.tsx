import React, { useState } from 'react'
import MessageCard from './components/MessageCard'
import FormField from './components/FormField'
import './index.css'
import SelectField from './components/SelectField';

type Params = {
  insult: string,
  name: string
  from: string
}

function App() {
  const [draft, setDraft] = useState<Params>({ insult: 'classic', name: 'HONG', from: 'David Martinez' })
  const [submitted, setSubmitted] = useState<Params | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(draft)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#0D0D0D] px-6 py-12">
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#FCEE0A 1px, transparent 1px), linear-gradient(90deg, #FCEE0A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Red edge glow, bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#FF003C] opacity-[0.08] blur-3xl"
      />

      <div className="relative flex min-h-55 w-full max-w-md items-center justify-center">
        {submitted ? (
          <MessageCard
            key={`${submitted.name}-${submitted.from}`}
            insult={submitted.insult}
            name={submitted.name}
            from={submitted.from}
          />
        ) : (
          <p className="font-mono text-xs tracking-[0.3em] text-[#FCEE0A]/40">
            no transmission
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative flex w-full max-w-md flex-col gap-4"
      >
        <SelectField 
          value={draft.insult}
          onChange={(insult) => setDraft({ ...draft, insult })}
        />
        <FormField
          label="name"
          value={draft.name}
          placeholder="recipient"
          onChange={(name) => setDraft({ ...draft, name })}
        />
        <FormField
          label="from"
          value={draft.from}
          placeholder="sender"
          onChange={(from) => setDraft({ ...draft, from })}
        />

        <button
          type="submit"
          className="
            mt-2 self-end bg-[#FCEE0A] px-8 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.25em] text-[#0D0D0D] 
            transition-colors hover:bg-[#00F0FF] focus-visible:bg-[#00F0FF] focus-visible:outline-none 
            active:bg-[#FF003C] active:text-[#FCEE0A] [clip-path:var(--chamfer-sm)]
          "
        >
          Send
        </button>
      </form>
    </main>
  )
}

export default App