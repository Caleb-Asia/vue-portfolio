<script setup>
import profilePic from "../public/profile-pic.png";
const statuses = [["building", "Vue projects"], ["learning", "React + deeper JavaScript"], ["exploring", "APIs and backend development"]];
</script>
<template>
  <section id="home" class="hero-section">
    <div class="hero-copy"><p class="section-label">01 / hello, I'm Caleb</p><h1>From building<br /><span>with LEGO</span><br />to building<br /><em>with code.</em></h1><p class="hero-intro">I’m a junior developer who likes taking a bunch of separate pieces and turning them into something real for the web.</p><div class="flex flex-wrap items-center gap-5"><RouterLink to="/portfolio" class="button-primary">View my work <span>↗</span></RouterLink><RouterLink to="/contact" class="button-link">Let’s talk <span>→</span></RouterLink></div><div class="status-list" aria-label="Current focus"><div v-for="status in statuses" :key="status[0]" class="status-row"><span class="status-dot" /><span class="mono text-xs uppercase tracking-wider text-white/40">{{ status[0] }}</span><span class="text-sm text-white/80">→ {{ status[1] }}</span></div></div></div>
    <div class="hero-visual"><div class="blueprint-card"><div class="blueprint-top"><span>caleb.build()</span><span>● ● ●</span></div><div class="blueprint-grid"><div class="build-stack" aria-hidden="true"><i/><i/><i/><i/><i/></div><img :src="profilePic" alt="Caleb Reece Asia" /><div class="code-note"><span>// currently</span><br />turning ideas<br />into interfaces</div></div><div class="blueprint-bottom"><span>builder / developer</span><span>▦ 2026</span></div></div><p class="visual-caption">A little curious. A little stubborn.<br />Always trying to make the next thing better.</p></div>
  </section>
</template>
