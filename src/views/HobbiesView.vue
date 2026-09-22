<script setup>
const hobbies = [
  {
    title: "Music",
    text: "Exploring new sounds, playlists, and the artists that keep ideas moving.",
  },
  {
    title: "Gaming",
    text: "Enjoying immersive worlds, strategic challenges, and thoughtful game design.",
  },
  {
    title: "Sports",
    text: "Following and enjoying sports while appreciating the discipline, teamwork, and competition behind them.",
  },
  {
    title: "Reading",
    text: "Discovering new ideas, perspectives, and stories through books and thoughtful writing.",
  },
];
</script>

<template>
  <section class="min-h-[720px] py-24 lg:py-28">
    <div class="max-w-2xl">
      <h1
        class="text-6xl font-extrabold leading-[.98] tracking-[-.07em] sm:text-8xl"
      >
        <span class="text-lime-300">Beyond</span><br />The Code<span
          class="text-lime-300"
          >.</span
        >
      </h1>
      <p class="mt-8 max-w-lg leading-8 text-white/50">
        The things I enjoy outside of coding help me stay curious, creative, and
        connected to the world around me.
      </p>
    </div>
    <div class="hobby-rope-wrap relative mt-24">
      <div class="hobby-list">
        <article
          v-for="hobby in hobbies"
          :key="hobby.title"
          class="hobby-item"
        >
          <button class="hobby-title" type="button">{{ hobby.title }}</button>
          <div class="hobby-bubble glass rounded-3xl p-6">
            <div class="mb-8 h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_15px_#b8ff44]" />
            <h2 class="text-xl font-bold">{{ hobby.title }}</h2>
            <p class="mt-4 text-sm leading-7 text-white/45">{{ hobby.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hobby-list {
  position: relative;
  min-height: 330px;
  padding-left: 1rem;
}
.hobby-item { position: static; }
.hobby-title {
  position: relative;
  z-index: 2;
  display: block;
  padding: 0.8rem 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  text-align: left;
  transition: color 300ms ease, transform 300ms ease;
}
.hobby-title:hover,
.hobby-item:has(.hobby-bubble:hover) .hobby-title {
  color: #b8ff44;
  transform: translateX(0.5rem);
}
.hobby-bubble {
  position: absolute;
  top: 0;
  right: 0;
  width: min(52%, 430px);
  min-height: 250px;
  opacity: 0;
  pointer-events: none;
  transform: translateX(1.5rem) scale(0.97);
  transition: opacity 350ms ease, transform 350ms cubic-bezier(.2,.8,.2,1);
}
.hobby-item:hover .hobby-bubble,
.hobby-item:focus-within .hobby-bubble {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0) scale(1);
}
@media (max-width: 639px) {
  .hobby-list {
    min-height: 0;
    padding-left: 0;
  }
  .hobby-title {
    padding: 0.65rem 0;
  }
  .hobby-bubble {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    min-height: 0;
    margin: 0.25rem 0 0.75rem;
    transform: translateY(-0.5rem) scale(0.98);
  }
}
</style>
