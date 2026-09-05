import { useQuery } from '@tanstack/react-query';
import './App.css'
import { useState } from 'react';
import createMessage from './queries/useMessage';

function App() {  
  const [name, setName] = useState("Yuna Yeo Pei Wei");
  const [from, setFrom] = useState("Pei Wei")

  const { data, error } = useQuery(createMessage(name, from))

  if (error) return (
    alert("Something wong") 
  )

  return (
    <>
      <h1>{data?.message}</h1>
      <p>{data?.subtitle}</p>
    </>
  )
}



export default App
