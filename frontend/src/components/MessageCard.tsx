import { useSuspenseQuery } from '@tanstack/react-query';
import messageQuery from '../queries/messageQuery.ts';

type Props = {
    name: string;
    from: string;
}

export default function MessageCard({ name, from }: Props) {
    const { data } = useSuspenseQuery(messageQuery(name, from))

    return (
        <>
            <h1>{data.message}</h1>
            <p>{data.subtitle}</p>
        </>
    )
}