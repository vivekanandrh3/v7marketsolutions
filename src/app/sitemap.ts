import type { MetadataRoute } from 'next';
import { insights } from '@/lib/data';
import { pages,origin } from '@/lib/site-meta';
export default function sitemap():MetadataRoute.Sitemap {return [...Object.keys(pages),...insights.map(p=>'/insights/'+p.slug)].map(path=>({url:origin+path}));}
