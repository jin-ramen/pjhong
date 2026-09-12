import { useQuery } from "@tanstack/react-query";
import { randomInsultQuery } from "../queries/insultQuery";

type Props = {
  onResult: (insult: string) => void
}

export default function RngButton({ onResult }: Props) {
    const { refetch, isFetching } = useQuery(randomInsultQuery())

    const handleClick = async () => {
        const result = await refetch();
        if (result.data) onResult(result.data)
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isFetching}
            aria-busy={isFetching}
            className="group mt-2 self-end bg-[#00F0FF]/60 p-px transition-colors hover:bg-[#00F0FF] focus-visible:bg-[#FCEE0A] focus-visible:outline-none active:bg-[#FF003C] disabled:cursor-wait disabled:bg-[#00F0FF]/30 [clip-path:var(--chamfer-sm)]"
        >
            <span className="flex items-center gap-3 bg-[#0D0D0D] px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.25em] text-[#00F0FF] transition-colors group-hover:bg-[#001a1c] group-focus-visible:text-[#FCEE0A] group-active:text-[#FF003C] group-disabled:text-[#00F0FF]/50 [clip-path:var(--chamfer-sm)]">
                {/* Die glyph — spins while fetching */}
                <svg
                    aria-hidden
                    viewBox="0 0 16 16"
                    className={`h-4 w-4 fill-current ${isFetching ? 'motion-safe:animate-spin' : ''}`}
                >
                    <rect x="1" y="1" width="14" height="14" rx="1" className="fill-none stroke-current stroke-[1.5]" />
                    <circle cx="5" cy="5" r="1.4" />
                    <circle cx="11" cy="5" r="1.4" />
                    <circle cx="8" cy="8" r="1.4" />
                    <circle cx="5" cy="11" r="1.4" />
                    <circle cx="11" cy="11" r="1.4" />
                </svg>

                {isFetching ? 'rolling' : 'Random'}
                <span
                    aria-hidden
                    className={`text-[#FF003C] ${isFetching ? 'motion-safe:animate-pulse' : 'opacity-0'}`}
                >
                    _
                </span>
            </span>
        </button>
    )
}