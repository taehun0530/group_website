import entries from './news.json';
import publicationData from './publications.json';

export type NewsCategory = 'Publications' | 'Awards' | 'People' | 'Grants' | 'Lab Life';

export interface NewsImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  credit: string;
  sourceUrl: string;
  license?: { label: string; url: string };
}

export interface NewsEntry {
  id: string;
  /** Only the verified date precision is represented. */
  date: string;
  title: string;
  category: NewsCategory;
  summary?: string;
  body?: string[];
  hasDetail: boolean;
  publicationDoi?: string;
  images?: NewsImage[];
  links?: { label: string; url: string }[];
}

export interface NewsPublication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  status?: string;
}

export interface ResolvedNewsEntry extends NewsEntry {
  publication?: NewsPublication;
}

export const normalizeDoi = (doi: string) => doi.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').toLowerCase();
const publicationsByDoi = new Map(publicationData.journalArticles.map((publication) => [normalizeDoi(publication.doi), publication]));

/** Short editorial headlines stay separate from the authoritative citation. */
export const newsData: ResolvedNewsEntry[] = (entries as NewsEntry[]).map((entry) => ({
  ...entry,
  publication: entry.publicationDoi ? publicationsByDoi.get(normalizeDoi(entry.publicationDoi)) : undefined,
})).sort((a, b) => b.date.replace(/\./g, '-').localeCompare(a.date.replace(/\./g, '-')));
