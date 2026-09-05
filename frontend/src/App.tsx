import React, { Suspense, useState } from 'react';
import MessageCard from './components/MessageCard';

type Params = {
  name: string;
  from: string;
}

function App() {  
  const [draft, setDraft] = useState<Params>({ name: 'Jin', from: 'Pei' })
  const [submitted, setSubmitted] = useState<Params | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(draft);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input 
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
        </label>

        <label>
          From: {" "}
          <input 
            value={draft.from}
            onChange={(e) => setDraft({ ...draft, from: e.target.value })}
          />
        </label>

        <button type="submit">Send</button>
      </form>

      {submitted && (
        <Suspense fallback={<p>loading</p>}>
          <MessageCard name={submitted.name} from={submitted.from} />
        </Suspense>
      )}
    </main>
  )
}

export default App
