import { queryOptions } from "@tanstack/react-query";

type Message = {
  message: string;
  subtitle: string;
};

const getMessage = async (insult: string, name: string, from: string): Promise<Message> => {
  const response = await fetch(`api/insult/${insult}?name=${name}&from=${from}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

export function messageQuery(insult: string, name: string, from: string) {
    return queryOptions({
        queryKey: ["insult", insult, name, from],
        queryFn: () => getMessage(insult, name, from),
        retry: false
    })
}

const getInsults = async (): Promise<string[]> => {
  const response = await fetch(`api/insults`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export function insultsQuery() {
  return queryOptions({
    queryKey: ["insults"],
    queryFn: getInsults,
  })
}