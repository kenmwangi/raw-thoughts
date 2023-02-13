import { escape } from "@/lib/utils/htmlEscaper";

const generateRssItem = (post) => `
  <item>
    <guid>https://raw-thoughts.vercel.app/thoughts/${thought.slug}</guid>
    <title>${escape(thought.title)}</title>
    <link>https://raw-thoughts.vercel.app/blog/${thought.slug}</link>
    ${
      thought.summary && `<description>${escape(thought.summary)}</description>`
    }
    <pubDate>${new Date(thought.date).toUTCString()}</pubDate>
    <author>Ken Mwangi</author>
    
  </item>`;

const generateRss = (thoughts, page = "feed.xml") => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(title)}</title>
      <link>https://raw-thoughts.vercel.app/blog</link>
      <description>Ken Mwangi's raw thoughts</description>
      <language>en</language>
      <managingEditor>Ken Mwangi</managingEditor>
      <webMaster>Ken Mwangi</webMaster>
      <lastBuildDate>${new Date(thoughts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://raw-thoughts.vercel.app/${page}" rel="self" type="application/rss+xml"/>
      ${thoughts.map(generateRssItem).join("")}
    </channel>
  </rss>
  `;
export default generateRss;
