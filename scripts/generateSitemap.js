import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

const baseUrl = 'https://theskyliving.co.in';

const staticPages = [
  { url: '', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/accommodations', changefreq: 'weekly', priority: 0.9 },
  { url: '/boys-accommodations', changefreq: 'weekly', priority: 0.9 },
  { url: '/girls-accommodations', changefreq: 'weekly', priority: 0.9 },
  { url: '/gallery', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

async function generateSitemap() {
  const urls = [...staticPages];
  
  try {
    // Fetch accommodations from Supabase
    const { data: accommodations, error } = await supabase
      .from('accommodations')
      .select('slug, updated_at')
      .order('updated_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching accommodations:', error);
    } else {
      accommodations?.forEach(accommodation => {
        urls.push({
          url: `/accommodations/${accommodation.slug}`,
          lastmod: accommodation.updated_at ? new Date(accommodation.updated_at).toISOString().split('T')[0] : undefined,
          changefreq: 'weekly',
          priority: 0.8
        });
      });
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  const urlEntries = urls.map(urlEntry => {
    const fullUrl = `${baseUrl}${urlEntry.url}`;
    
    let xml = `  <url>\n    <loc>${fullUrl}</loc>\n`;
    
    if (urlEntry.lastmod) {
      xml += `    <lastmod>${urlEntry.lastmod}</lastmod>\n`;
    }
    
    if (urlEntry.changefreq) {
      xml += `    <changefreq>${urlEntry.changefreq}</changefreq>\n`;
    }
    
    if (urlEntry.priority) {
      xml += `    <priority>${urlEntry.priority}</priority>\n`;
    }
    
    xml += `  </url>`;
    
    return xml;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapXml);
  console.log(`Sitemap generated successfully at: ${sitemapPath}`);
  console.log(`Total URLs: ${urls.length}`);
}

generateSitemap().catch(console.error);