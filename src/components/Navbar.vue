<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuOpen = ref(false);
const desktopNav = ref(null);
const activeSection = ref(route.hash.slice(1) || "home");
const underline = ref({ x: 0, width: 0, visible: false });
const wiggle = ref(false);
let scrollFrame = 0;

const navItems = [
  { label: "Home", id: "home" },
  { label: "Profile", id: "about" },
  { label: "Projects", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Hobbies", id: "hobbies" },
  { label: "Contact", id: "contact" },
];

const activeHash = computed(() => `#${activeSection.value}`);

const placeUnderline = () => {
  const activeLink = desktopNav.value?.querySelector(
    `[data-section="${activeSection.value}"]`,
  );
  if (!activeLink || !desktopNav.value) {
    underline.value.visible = false;
    return;
  }

  const navBounds = desktopNav.value.getBoundingClientRect();
  const linkBounds = activeLink.getBoundingClientRect();
  const width = Math.max(24, linkBounds.width * 0.55);
  underline.value = {
    x: linkBounds.left - navBounds.left + (linkBounds.width - width) / 2,
    width,
    visible: true,
  };
};

const updateActiveSection = () => {
  scrollFrame = 0;
  const sections = [...document.querySelectorAll(".portfolio-page section[id]")];
  const current = sections.filter((section) => section.getBoundingClientRect().top <= 170).at(-1);
  if (current) activeSection.value = current.id;
};

const handleScroll = () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateActiveSection);
};

watch(activeSection, async () => {
  await nextTick();
  placeUnderline();
});

watch(() => route.hash, async (hash) => {
  activeSection.value = hash.slice(1) || "home";
  await nextTick();
  placeUnderline();
  wiggle.value = false;
  requestAnimationFrame(() => (wiggle.value = true));
  menuOpen.value = false;
});

onMounted(async () => {
  await nextTick();
  placeUnderline();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", placeUnderline);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", placeUnderline);
  if (scrollFrame) cancelAnimationFrame(scrollFrame);
});
</script>

<template>
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
      <RouterLink to="/#home" class="wordmark" aria-label="Caleb Reece Asia, home">
        <span class="wordmark-mark" aria-hidden="true"><i>&lt;</i><b>/</b><i>&gt;</i></span>
        <span class="wordmark-name">CRA<span class="wordmark-dot">.</span></span>
      </RouterLink>

      <div ref="desktopNav" class="desktop-nav">
        <span
          class="nav-underline"
          :class="{ 'nav-underline-visible': underline.visible, 'nav-underline-wiggle': wiggle }"
          :style="{ transform: `translateX(${underline.x}px)`, width: `${underline.width}px` }"
          aria-hidden="true"
        />
        <RouterLink
          v-for="item in navItems"
          :key="item.id"
          :to="{ path: '/', hash: `#${item.id}` }"
          :data-section="item.id"
          :class="{ 'nav-link-active': activeHash === `#${item.id}` }"
          class="nav-link"
        >{{ item.label }}</RouterLink>
      </div>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >{{ menuOpen ? "Close" : "Menu" }} <span aria-hidden="true">{{ menuOpen ? "−" : "+" }}</span></button>
    </nav>

    <div v-if="menuOpen" id="mobile-menu" class="mobile-nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.id"
        :to="{ path: '/', hash: `#${item.id}` }"
        :class="{ 'nav-link-active': activeHash === `#${item.id}` }"
        @click="menuOpen = false"
      >{{ item.label }}</RouterLink>
    </div>
  </header>
</template>
