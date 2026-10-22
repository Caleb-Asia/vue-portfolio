<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const buildStep = ref(0);
let buildStepTimer;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  buildStepTimer = window.setInterval(() => {
    buildStep.value = (buildStep.value + 1) % 4;
  }, 2600);
});

onUnmounted(() => window.clearInterval(buildStepTimer));
</script>

<template>
  <section id="about" class="content-section">
    <div class="profile-layout">
      <div class="profile-copy">
        <p class="section-label">the journey</p>
        <h1>From LEGO<br /><span>to code.</span></h1>
        <p> I have always loved building things. Growing up, that meant LEGO bricks and Prestik spread out in front of me, turning little ideas into something real. Sometimes things worked out, sometimes they didn’t, but there was always another chance to take things apart, try again, and build something better.</p>
      </div>
      <div class="computer-build profile-illustration" role="img" aria-label="LEGO blocks assembling into a computer">
        <div class="computer-monitor">
          <div class="computer-screen"><span>brick by brick</span><i class="screen-caret" /></div>
          <i v-for="block in 8" :key="block" class="computer-brick" :class="`computer-brick-${block}`" />
        </div>
        <div class="computer-stand" />
        <div class="computer-base"><i v-for="key in 9" :key="key" /></div>
      </div>
    </div>
    <div class="build-path">
      <span v-for="(step, index) in ['LEGO', 'computer', 'code', 'web app']" :key="step"><b>{{ String(index + 1).padStart(2, '0') }}</b>{{ step }}<i v-if="index < 3">→</i></span>
      <span class="path-traveler" aria-hidden="true" :style="{ '--step-col': buildStep % 2, '--step-row': Math.floor(buildStep / 2), '--desktop-step': buildStep }">
        <svg v-if="buildStep === 0" viewBox="0 0 32 32"><path d="M5 12h22v13H5zM8 8h5v4H8zm11 0h5v4h-5z" /></svg>
        <svg v-else-if="buildStep === 1" viewBox="0 0 32 32"><rect x="5" y="5" width="22" height="16" rx="1"/><path d="M16 21v5m-6 2h12M8 9h16v8H8z" /></svg>
        <svg v-else-if="buildStep === 2" viewBox="0 0 32 32"><path d="m11 9-7 7 7 7m10-14 7 7-7 7m-3-18-4 20" /></svg>
        <svg v-else viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4a19 19 0 0 1 0 24m0-24a19 19 0 0 0 0 24" /></svg>
      </span>
    </div>
    <div class="journey-grid">
      <article><span class="section-label">01</span><h2>Start with curiosity</h2><p>I like asking how things work and then trying to make my own version.</p></article>
      <article><span class="section-label">02</span><h2>Learn by building</h2><p>Projects help me turn new concepts into something I can see, test and improve.</p></article>
      <article><span class="section-label">03</span><h2>Keep growing</h2><p>I'm working towards becoming a stronger full-stack developer, one useful piece at a time.</p></article>
    </div>
  </section>
</template>
