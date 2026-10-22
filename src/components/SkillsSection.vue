<script setup>
const groups = [
  ["Languages", ["HTML", "CSS", "JavaScript", "PHP", "Python"]],
  ["Frameworks", ["Vue", "Node.js", "Express", "Bootstrap"]],
  ["Databases", ["MySQL", ]],
  ["Tools", ["Git", "GitHub", "VS Code", "Figma", "WordPress"]],
];
const iconFor = (skill) => {
  const icons = {
    HTML: "devicon-html5-plain colored", CSS: "devicon-css3-plain colored",
    JavaScript: "devicon-javascript-plain colored", PHP: "devicon-php-plain colored",
    Python: "devicon-python-plain colored", Vue: "devicon-vuejs-plain colored",
    "Node.js": "devicon-nodejs-plain colored", Express: "devicon-express-original",
    Bootstrap: "devicon-bootstrap-plain colored", MySQL: "devicon-mysql-plain colored",
    Git: "devicon-git-plain colored", GitHub: "devicon-github-original",
    "VS Code": "devicon-vscode-plain colored", Figma: "devicon-figma-plain colored",
    WordPress: "devicon-wordpress-plain",
    "SQL fundamentals": "devicon-mysql-plain colored",
  };
  return icons[skill] || "devicon-code-plain";
};
const stats = ["6 featured projects", "4 team projects", "Deepening JavaScript understanding", "Focused on full-stack growth"];
</script>
<template>
  <section id="skills" class="content-section">
    <div class="section-heading">
      <div class="section-header-row">
        <div>
          <p class="section-label">the toolkit</p>
          <h1>Skills I’m<br /><span>building with.</span></h1>
        </div>
      </div>
      <p>The technologies I’ve used so far, plus the ones I’m actively learning next.</p>
    </div>
    <div class="skill-groups">
      <article v-for="group in groups" :key="group[0]" class="skill-group">
        <h2>{{ group[0] }}</h2>
        <div class="skill-icons">
          <div v-for="skill in group[1]" :key="skill" class="skill-icon" tabindex="0" :aria-label="skill">
            <i :class="iconFor(skill)" aria-hidden="true"></i>
            <span>{{ skill }}</span>
          </div>
        </div>
      </article>
    </div>
    
  </section>
</template>
