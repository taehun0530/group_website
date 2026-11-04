interface YearFilterProps {
  years: string[];
  selectedYear: string;
  onSelect: (year: string) => void;
  label: string;
}

export default function YearFilter({ years, selectedYear, onSelect, label }: YearFilterProps) {
  return (
    <nav aria-label={label} className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
      {years.map((year) => (
        <button
          key={year}
          type="button"
          aria-pressed={year === selectedYear}
          onClick={() => onSelect(year)}
          className={`nav-link px-3 py-1.5 rounded-sm transition-colors ${year === selectedYear ? 'bg-slate-100 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
        >
          {year}
        </button>
      ))}
    </nav>
  );
}
