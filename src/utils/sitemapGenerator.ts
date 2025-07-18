import { accommodationService } from '@/services/accommodationService';

export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private baseUrl = 'https://theskyliving.co.in';
  
  private staticPages: SitemapUrl[] = [
    { url: '', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/accommodations', changefreq: 'weekly', priority: 0.9 },
    { url: '/boys-accommodations', changefreq: 'weekly', priority: 0.9 },
    { url: '/girls-accommodations', changefreq: 'weekly', priority: 0.9 },
    { url: '/gallery', changefreq: 'weekly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  ];

  async generateSitemap(): Promise<string> {
    const urls: SitemapUrl[] = [...this.staticPages];
    
    try {
      // Add dynamic accommodation pages
      const accommodations = await accommodationService.getAllAccommodations();
      
      accommodations.forEach(accommodation => {
        urls.push({
          url: `/accommodations/${accommodation.slug}`,
          lastmod: accommodation.updated_at ? new Date(accommodation.updated_at).toISOString().split('T')[0] : undefined,
          changefreq: 'weekly',
          priority: 0.8
        });
      });
    } catch (error) {
      console.error('Error fetching accommodations for sitemap:', error);
    }

    return this.generateXml(urls);
  }

  private generateXml(urls: SitemapUrl[]): string {
    const urlEntries = urls.map(urlEntry => {
      const fullUrl = `${this.baseUrl}${urlEntry.url}`;
      
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

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
  }

  async generateAndSaveSitemap(): Promise<void> {
    const sitemapXml = await this.generateSitemap();
    
    // In a real implementation, this would save to public/sitemap.xml
    // For now, we'll return the XML content
    console.log('Generated sitemap.xml content:');
    console.log(sitemapXml);
    
    return Promise.resolve();
  }
}

export const sitemapGenerator = new SitemapGenerator();