import type { RecruitmentLanguage } from '../data/openPositionContent';

interface RecruitmentLanguageToggleProps {
  language: RecruitmentLanguage;
  onChange: (language: RecruitmentLanguage) => void;
}

export default function RecruitmentLanguageToggle({ language, onChange }: RecruitmentLanguageToggleProps) {
  return (
    <div role="group" aria-label={language === 'ko' ? '페이지 언어' : 'Page language'} className="ml-auto inline-flex shrink-0 items-center gap-4">
      {(['en', 'ko'] as const).map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-pressed={language === option}
          onClick={() => onChange(option)}
          className={`text-meta min-h-10 border-b-2 px-0 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary ${language === option ? 'border-primary font-semibold text-ink' : 'border-transparent text-copy hover:text-ink'}`}
        >
          {option === 'en' ? 'English' : '한국어'}
        </button>
      ))}
    </div>
  );
}
