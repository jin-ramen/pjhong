import { useQuery } from "@tanstack/react-query";
import { insultsQuery } from "../queries/insultQuery";

export default function SelectField({ 
    value ,
    onChange,
}: { 
    value: string 
    onChange: (v: string) => void
}) {
    const { data } = useQuery(insultsQuery())

    return (
        <label className="block">
            <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-[#00F0FF]">
                insult type
            </span>

            {/* Frame — turns cyan on focus, like the text inputs */}
            <div className="relative bg-[#FCEE0A]/40 p-px transition-colors focus-within:bg-[#00F0FF] [clip-path:var(--chamfer-sm)]">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="cp-select w-full cursor-pointer appearance-none bg-[#0D0D0D] py-2 pl-3 pr-10 font-mono text-sm text-[#FCEE0A] outline-none transition-colors focus:bg-[#141400] disabled:cursor-wait disabled:text-[#FCEE0A]/40 [clip-path:var(--chamfer-sm)]"
                >
                    {(data ?? []).map((insult) => (
                        <option
                            key={insult}
                            value={insult}
                            className="bg-[#0D0D0D] text-[#FCEE0A]"
                        >
                            {insult}
                        </option>
                    ))}
                </select>

                {/* Custom chevron */}
                <svg
                    aria-hidden
                    viewBox="0 0 12 8"
                    className="pointer-events-none absolute right-3 top-1/2 h-2 w-3 -translate-y-1/2 fill-none stroke-[#00F0FF] stroke-2"
                >
                    <path d="M1 1l5 5 5-5" />
                </svg>
            </div>
        </label>
    );
}