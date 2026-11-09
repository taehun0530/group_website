import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { RecruitmentLanguage } from '../data/openPositionContent';

export default function useRecruitmentLanguage() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  const language: RecruitmentLanguage = new URLSearchParams(location.search).get('lang') === 'ko' ? 'ko' : 'en';
  const setLanguage = (nextLanguage: RecruitmentLanguage) => {
    const params = new URLSearchParams(location.search);
    if (nextLanguage === 'en') params.delete('lang');
    else params.set('lang', nextLanguage);
    navigate({ pathname: location.pathname, search: params.toString(), hash: location.hash }, { replace: true });
  };
  const withLanguage = (path: string) => language === 'ko' ? `${path}?lang=ko` : path;
  return { language, setLanguage, withLanguage };
}
