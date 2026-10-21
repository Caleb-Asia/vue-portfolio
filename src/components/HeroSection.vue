<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import profilePic from "../public/profile-pic.png";
const statuses = [["building", "Vue projects"], ["learning", "React + deeper JavaScript"], ["exploring", "APIs and backend development"]];
const profilePic2 = "/profile-pic2.png";
const heroName = ref(null);
const typedCode = ref("// currently");
const activePhoto = ref(0);
const hasSecondPhoto = ref(false);
const codeSamples = [
  "const idea = 'make it real';",
  "build('ideas', 'into interfaces');",
  "git commit -m 'keep creating';",
];
const nameLines = ["CALEB", "REECE ASIA"].map((line) =>
  [...line].map((character) => (character === " " ? "\u00a0" : character)),
);
let animationContext;
let visualContext;
let pointerFrame = 0;
let pointerPosition;

const clearPointerGlow = () => {
  heroName.value?.querySelectorAll(".hero-name-letter").forEach((letter) => {
    letter.style.textShadow = "";
  });
};

const updatePointerGlow = () => {
  pointerFrame = 0;
  if (!heroName.value || !pointerPosition) return;

  heroName.value.querySelectorAll(".hero-name-letter").forEach((letter) => {
    const bounds = letter.getBoundingClientRect();
    const dx = pointerPosition.x - (bounds.left + bounds.width / 2);
    const dy = pointerPosition.y - (bounds.top + bounds.height / 2);
    const distance = Math.hypot(dx, dy);
    const strength = Math.max(0, 1 - distance / 110);
    const blur = Math.round(strength * 14);
    const opacity = (strength * 0.55).toFixed(2);
    letter.style.textShadow = strength
      ? `0 0 ${blur}px rgba(42, 229, 67, ${opacity})`
      : "";
  });
};

const handlePointerMove = (event) => {
  pointerPosition = { x: event.clientX, y: event.clientY };
  if (!pointerFrame) pointerFrame = requestAnimationFrame(updatePointerGlow);
};

const handlePointerLeave = () => {
  pointerPosition = null;
  if (pointerFrame) cancelAnimationFrame(pointerFrame);
  pointerFrame = 0;
  clearPointerGlow();
};

onMounted(() => {
  const nameElement = heroName.value;
  if (!nameElement) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) {
    typedCode.value = codeSamples[0];
    return;
  }

  const secondPhoto = new Image();
  secondPhoto.onload = () => {
    hasSecondPhoto.value = true;
  };
  secondPhoto.src = profilePic2;

  const characters = nameElement.querySelectorAll(".hero-name-letter");
  const caret = nameElement.querySelector(".hero-name-caret");
  if (!characters.length || !caret) return;

  animationContext = gsap.context(() => {
    gsap.timeline({
      onInterrupt: () => {
        gsap.set(characters, { autoAlpha: 1 });
        gsap.set(caret, {
          width: "0.72em",
          height: "0.15em",
          borderRadius: "999px",
          scaleX: 1,
        });
      },
      onComplete: () => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          nameElement.addEventListener("pointermove", handlePointerMove);
          nameElement.addEventListener("pointerleave", handlePointerLeave);
        }
      },
    })
      .fromTo(
        characters,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.06, stagger: { each: 0.095 }, ease: "none" },
      )
      .to({}, { duration: 0.18 })
      .to(caret, {
        width: "0.72em",
        height: "0.15em",
        borderRadius: "999px",
        scaleX: 1,
        duration: 0.38,
        ease: "power2.inOut",
      });
  }, nameElement);

  visualContext = gsap.context(() => {
    const typing = { progress: 0 };
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });

    codeSamples.forEach((sample) => {
      timeline
        .call(() => {
          typing.progress = 0;
          typedCode.value = "";
        })
        .to(typing, {
          progress: 1,
          duration: Math.max(1.15, sample.length * 0.045),
          ease: "none",
          onUpdate: () => {
            typedCode.value = sample.slice(
              0,
              Math.ceil(typing.progress * sample.length),
            );
          },
        })
        .call(() => {
          if (hasSecondPhoto.value) activePhoto.value = activePhoto.value === 0 ? 1 : 0;
        })
        .to({}, { duration: 0.8 });
    });
  });
});

onUnmounted(() => {
  heroName.value?.removeEventListener("pointermove", handlePointerMove);
  heroName.value?.removeEventListener("pointerleave", handlePointerLeave);
  handlePointerLeave();
  animationContext?.revert();
  visualContext?.revert();
});
</script>
<template>
  <section id="home" class="hero-section">
    <div class="hero-copy"><p class="section-label">01 / hello, I'm Caleb</p><h1 ref="heroName" class="hero-name"><span class="sr-only">Caleb Reece Asia</span><span class="hero-name-visual" aria-hidden="true"><span v-for="(line, lineIndex) in nameLines" :key="lineIndex" class="hero-name-line"><span v-for="(character, index) in line" :key="index" class="hero-name-letter">{{ character }}</span><span v-if="lineIndex === 1" class="hero-name-caret" /></span></span></h1><p class="hero-intro">I’m a junior developer who likes taking a bunch of separate pieces and turning them into something real for the web.</p><div class="flex flex-wrap items-center gap-5"><RouterLink to="/portfolio" class="button-primary">View my work <span>↗</span></RouterLink><RouterLink to="/contact" class="button-link">Let’s talk <span>→</span></RouterLink></div><div class="status-list" aria-label="Current focus"><div v-for="status in statuses" :key="status[0]" class="status-row"><span class="status-dot" /><span class="mono text-xs uppercase tracking-wider text-white/40">{{ status[0] }}</span><span class="text-sm text-white/80">→ {{ status[1] }}</span></div></div></div>
    <div class="hero-visual"><div class="blueprint-card"><div class="blueprint-top"><span>caleb.build()</span><span>● ● ●</span></div><div class="blueprint-grid"><div class="build-stack" aria-hidden="true"><i/><i/><i/><i/><i/></div><img :src="profilePic" alt="Caleb Reece Asia" class="blueprint-photo" :class="{ 'blueprint-photo-active': activePhoto === 0 }" /><img v-if="hasSecondPhoto" :src="profilePic2" alt="" aria-hidden="true" class="blueprint-photo" :class="{ 'blueprint-photo-active': activePhoto === 1 }" /><div class="code-note"><span>// typing...</span><br /><code>{{ typedCode }}<i class="code-caret" aria-hidden="true" /></code></div></div><div class="blueprint-bottom"><span>builder / developer</span><span>▦ 2026</span></div></div><p class="visual-caption">A little curious. A little stubborn.<br />Always trying to make the next thing better.</p></div>
  </section>
</template>
