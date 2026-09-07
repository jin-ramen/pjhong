import { queryOptions } from "@tanstack/react-query";

type Message = {
  message: string;
  subtitle: string;
};

const getMessage = async (name: string, from: string): Promise<Message> => {
  const response = await fetch(`api/off/${name}/${from}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

export default function messageQuery(name: string, from: string) {
    return queryOptions({
        queryKey: ["off", name, from],
        queryFn: () => getMessage(name, from),
        retry: false
    })
}