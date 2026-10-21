<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import profilePic from "../public/profile-pic.png";

const statuses = [["building", "Vue projects"], ["learning", "React + deeper JavaScript"], ["exploring", "APIs and backend development"]];
const heroName = ref(null);
const headline = ref("Caleb Reece Asia");
const headlineLines = computed(() => headline.value.split("\n"));
const activePhoto = ref(0);
const typedCommand = ref("");
let animationContext;
let headlineTimer;
let photoTimer;
let typingTimer;

const typeImageCommand = () => {
  window.clearInterval(typingTimer);
  const command = `git switch image to profile ${activePhoto.value + 1}`;
  let position = 0;
  typedCommand.value = "";
  typingTimer = window.setInterval(() => {
    typedCommand.value = command.slice(0, ++position);
    if (position >= command.length) window.clearInterval(typingTimer);
  }, 65);
};

onMounted(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !heroName.value) return;

  animationContext = gsap.context(() => {
    const revealHeadline = () => {
      const letters = heroName.value?.querySelectorAll(".hero-name-letter");
      if (!letters?.length) return;
      gsap.set(heroName.value, { autoAlpha: 1, y: 0 });
      gsap.fromTo(letters, { autoAlpha: 0, y: 28 }, {
        autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.045, ease: "power3.out",
      });
    };

    revealHeadline();
    headlineTimer = window.setInterval(() => {
      gsap.to(heroName.value, {
        autoAlpha: 0,
        y: -12,
        duration: 0.4,
        onComplete: async () => {
          headline.value = headline.value === "Caleb\nReece Asia" ? "Aspiring\nDeveloper" : "Caleb\nReece Asia";
          await nextTick();
          revealHeadline();
        },
      });
    }, 7000);
  }, heroName.value);

  photoTimer = window.setInterval(() => {
    activePhoto.value = activePhoto.value ? 0 : 1;
    typeImageCommand();
  }, 7500);
  typeImageCommand();
});

onUnmounted(() => {
  window.clearInterval(headlineTimer);
  window.clearInterval(photoTimer);
  window.clearInterval(typingTimer);
  animationContext?.revert();
});
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-copy">
      <p class="section-label"></p>
      <h1 ref="heroName" class="hero-name"><span class="hero-name-text"><span v-for="(line, lineIndex) in headlineLines" :key="`${headline}-${lineIndex}`" class="hero-name-line"><span v-for="(letter, index) in line" :key="`${lineIndex}-${index}`" class="hero-name-letter">{{ letter }}</span></span></span></h1>
      <p class="hero-intro">“Every line of code is a chance to learn something new.”</p>
      <div class="flex flex-wrap items-center gap-5">
        <RouterLink to="/portfolio" class="button-primary">View my work <span>↗</span></RouterLink>
        <RouterLink to="/contact" class="button-link">Let’s talk <span>→</span></RouterLink>
      </div>
      <div class="status-list" aria-label="Current focus">
      
      </div>
    </div>
    <div class="hero-visual">
      <div class="blueprint-card">
        <div class="blueprint-top"><span>caleb.build()</span><span>● ● ●</span></div>
        <div class="blueprint-grid">
          <div class="build-stack" aria-hidden="true"><i/><i/><i/><i/><i/></div>
          <img class="blueprint-photo" :class="{ 'blueprint-photo-active': activePhoto === 0 }" :src="profilePic" alt="Caleb Reece Asia" />
          <img class="blueprint-photo" :class="{ 'blueprint-photo-active': activePhoto === 1 }" src="/profile-pic2.png" alt="Caleb Reece Asia" />
          <div class="code-note"><span>{{ typedCommand }}</span><i class="code-caret" aria-hidden="true" /></div>
        </div>
        <div class="blueprint-bottom"><span>builder / developer</span><span>▦ 2026</span></div>
      </div>
      <p class="visual-caption">A little curious. A little stubborn.<br />Always trying to make the next thing better.</p>
    </div>
  </section>
</template>

