import fs from "fs";
import path from "path";
import yaml from "yaml";
import { FileCode2, Terminal, Code2, GitBranch } from "lucide-react";
import SpacesPageHeader from "./SpacesPageHeader";
import { getSpacePage } from "@/data/spacesData";

// Render a VS Code-like editor for a specific skill
function SkillFileEditor({ category, skillList }: { category: string; skillList: string }) {
  const filename = category.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".md";
  const tags = skillList.split(",").map(s => s.trim());
  
  const content = `---
type: agent_skill
category: "${category}"
priority: P1
---

# <SYSTEM_INSTRUCTION>
You are now equipped with the [${category}] skill module. 
When executing tasks requiring this expertise, apply the following capabilities:

<capabilities>
${tags.map(t => `  - ${t}`).join("\n")}
</capabilities>

<execution_rules>
1. Leverage optimal tools and frameworks within this stack.
2. Prioritize scalable, maintainable architectures.
3. If blocked, fall back to first-principles thinking.
</execution_rules>
</SYSTEM_INSTRUCTION>`;

  return (
    <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] font-mono text-sm shadow-xl">
      {/* Editor Header */}
      <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-white/10 gap-4">
        <div className="flex items-center gap-2 text-white/70">
          <FileCode2 className="w-4 h-4 text-[#58a6ff]" />
          <span>{filename}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Terminal className="w-3.5 h-3.5 text-white/40" />
          <Code2 className="w-3.5 h-3.5 text-white/40" />
          <GitBranch className="w-3.5 h-3.5 text-white/40" />
        </div>
      </div>
      
      {/* Editor Body */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-white/80 leading-relaxed">
          <code dangerouslySetInnerHTML={{
            __html: content
              .replace(/---([\s\S]*?)---/g, '<span class="text-[#8b949e]">---$1---</span>')
              .replace(/<([a-z_]+)>/g, '<span class="text-[#7ee787]">&lt;$1&gt;</span>')
              .replace(/<\/([a-z_]+)>/g, '<span class="text-[#7ee787]">&lt;/$1&gt;</span>')
              .replace(/(type|category|priority):/g, '<span class="text-[#ff7b72]">$1</span>:')
          }} />
        </pre>
      </div>
    </div>
  );
}

export default async function AgentSkillsSpace() {
  const page = getSpacePage("skills")!;
  
  let skills = [];
  try {
    const yamlPath = path.join(process.cwd(), "app/master_context.yaml");
    const fileContents = fs.readFileSync(yamlPath, "utf8");
    const data = yaml.parse(fileContents);
    // The skills are located in data[0] if the yaml is structured as a list, or maybe data.skills
    // Wait, the user's YAML had a list at the top level? No, it showed `basics:`, `education:`, `experience:`, `projects:`, and then a list at the end?
    // Let me find the key. If I don't know the key, I'll extract it dynamically.
    // The snippet was:
    //   - category: "Technical Skills"
    //     skill_list: "SDLC..."
    
    // I will iterate over the values of the top-level object to find the array of skills
    for (const key in data) {
      if (Array.isArray(data[key]) && data[key].length > 0 && data[key][0].category && data[key][0].skill_list) {
        skills = data[key];
        break;
      }
    }
  } catch (error) {
    console.error("Error reading master_context.yaml:", error);
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SpacesPageHeader page={page} />
      
      <div className="prose prose-invert max-w-none mb-8">
        <p className="text-white/70">
          Rather than a traditional list of skills, my technical capabilities are modeled as 
          agent instructions. If I were an AI, these would be the <code className="text-[#58a6ff] bg-[#58a6ff]/10 px-1.5 py-0.5 rounded">.md</code> modules loaded into my system prompt to execute tasks.
        </p>
      </div>

      <div className="space-y-6">
        {skills.map((skill: any, idx: number) => (
          <SkillFileEditor key={idx} category={skill.category} skillList={skill.skill_list} />
        ))}
      </div>
    </div>
  );
}
