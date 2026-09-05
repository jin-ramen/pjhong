export default function FormField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-[#00F0FF]">
        {label}
      </span>
      <div
        className="bg-[#FCEE0A]/40 p-px transition-colors focus-within:bg-[#00F0FF] [clip-path:var(--chamfer-sm)]"
      >
        <input
          className="w-full bg-[#0D0D0D] px-3 py-2 font-mono text-sm text-[#FCEE0A] placeholder-[#FCEE0A]/30 outline-none transition-colors focus:bg-[#141400] [clip-path:var(--chamfer-sm)]"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </label>
  )
}