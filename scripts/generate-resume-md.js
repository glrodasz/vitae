/**
 * Writes resume.md: the same short CV as /resume and the PDF, in Markdown,
 * for copying into forms and profiles. README.md keeps the full archive.
 */
const fs = require("fs");
const path = require("path");
const { loadTsModule, formatLink, projectRoot } = require("./generate-readme");

function main() {
  const cv = loadTsModule(path.join(projectRoot, "data", "resume"));
  const { resumeProfile: profile } = cv;
  const lines = [];
  const add = (line = "") => lines.push(line);

  add(`# ${profile.name}`);
  add();
  add(`**${profile.role}** · ${profile.location}`);
  add();
  add(
    [
      `[${profile.email}](mailto:${profile.email})`,
      `[${profile.website.label}](${profile.website.url})`,
      ...profile.links.map((link) => `[${link.label}](${link.url})`),
    ].join(" · ")
  );
  add();

  add("## Summary");
  add();
  add(cv.resumeSummary);
  add();

  add("## Experience");
  add();
  cv.resumeExperience.forEach((job) => {
    add(`### ${job.company} — ${job.role}`);
    add(`_${job.tagline}_ · ${job.dates}`);
    add();
    job.bullets.forEach((bullet) => add(`- ${bullet}`));
    add();
  });

  add("## Selected projects");
  add();
  cv.resumeProjects.forEach((project) => {
    const links = project.links.map((link) => formatLink(link.url)).join(" · ");
    add(`- **${project.name}** (${project.stack.join(", ")}): ${project.description} ${links}`);
  });
  add();

  add("## Skills");
  add();
  cv.resumeSkills.forEach((skill) => add(`- **${skill.label}:** ${skill.text}`));
  add();

  add("## Education");
  add();
  cv.resumeEducation.forEach((item) => {
    const meta = item.meta ? ` (${item.meta})` : "";
    add(`- **${item.label}**, ${item.text}${meta}`);
  });
  add();

  add("## Recognition & speaking");
  add();
  cv.resumeRecognition.forEach((item) => add(`- **${item.label}:** ${item.text}`));

  const output = lines.join("\n").replace(/\n{3,}/g, "\n\n");
  fs.writeFileSync(path.join(projectRoot, "resume.md"), `${output}\n`, "utf8");
}

main();
