import { personalInfo, education, githubRepositories, portfolioWebsites, impactMetrics, skills, startups, productTeardowns, blogPosts } from "@/data/portfolioData";
import { NextResponse } from "next/server";

export async function GET() {
  const markdown = `# ${personalInfo.name} - ${personalInfo.tagline}

## Contact & Links
- Email: ${personalInfo.email}
- LinkedIn: ${personalInfo.socialLinks.linkedin}
- GitHub: ${personalInfo.socialLinks.github}

## About
${personalInfo.description}

## Impact Metrics
${impactMetrics.map(m => `- ${m.label}: ${m.value}`).join('\n')}

## Skills
${skills.map(s => `- ${s.name} (${s.category}): ${s.tags.join(', ')}`).join('\n')}

## Featured Projects & Startups
${githubRepositories.filter(r => r.featured).map(r => `### ${r.name}\n${r.description}\nStack: ${r.stack.join(', ')}\nLink: ${r.github}`).join('\n\n')}

${startups.map(s => `### ${s.name}\n${s.description}`).join('\n\n')}

## Portfolio Websites
${portfolioWebsites.map(w => `- [${w.name}](${w.url}): ${w.description}`).join('\n')}

## Blog & Research
${blogPosts.map(b => `- ${b.title} (${b.date}): ${b.excerpt}`).join('\n')}
${productTeardowns.map(p => `- Product Teardown: ${p.title} (${p.category}, ${p.date})`).join('\n')}
`;

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
