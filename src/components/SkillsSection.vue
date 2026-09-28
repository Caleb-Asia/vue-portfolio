<script setup>
const groups = [
  ["Languages", ["HTML", "CSS", "JavaScript", "PHP", "Python"]],
  ["Frameworks", ["Vue", "Node.js", "Express", "Bootstrap"]],
  ["Databases", ["MySQL", "SQL fundamentals"]],
  ["Tools", ["Git", "GitHub", "VS Code"]],
];
const stats = ["6 featured projects", "4 team projects", "Deepening JavaScript understanding", "Focused on full-stack growth"];
</script>
<template>
  <section id="skills" class="content-section">
    <div class="section-heading section-heading-with-image">
      <div class="section-header-row">
        <div>
          <p class="section-label">the toolkit</p>
          <h1>Skills I’m<br /><span>building with.</span></h1>
        </div>
        <img src="/skills.png" alt="Skills illustration" class="section-illustration" />
      </div>
      <p>The technologies I’ve used so far, plus the ones I’m actively learning next.</p>
    </div>
    <div class="skill-groups"><article v-for="group in groups" :key="group[0]" class="skill-group"><h2>{{ group[0] }}</h2><div class="flex flex-wrap gap-2 mt-5"><span v-for="skill in group[1]" :key="skill" class="quick-skill">{{ skill }}</span></div></article></div>
    <div class="stats-grid"><article v-for="stat in stats" :key="stat"><span class="status-dot"/><p>{{ stat }}</p></article></div>
  </section>
</template>
