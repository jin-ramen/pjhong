import { queryOptions } from "@tanstack/react-query";


export default function createMessage(name: string, from: string) {
    return queryOptions({
        queryKey: ["off", name, from],
        queryFn: () => getMessage(name, from)
    })
}

type Message = {
  message: string;
  subtitle: string;
};

const getMessage = async (name: string, from: string): Promise<Message> => {
  const response = await fetch(`api/off/${name}/${from}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};