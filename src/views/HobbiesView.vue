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
      <div class="hobby-rope" aria-hidden="true" />
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="hobby in hobbies"
          :key="hobby.title"
          class="hobby-card glass relative rounded-3xl p-6 transition hover:-translate-y-1 hover:border-lime-300/40"
        >
          <span class="rope-hole" aria-hidden="true" />
          <div
            class="mb-10 h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_15px_#b8ff44]"
          />
          <h2 class="text-xl font-bold">{{ hobby.title }}</h2>
          <p class="mt-4 text-sm leading-7 text-white/45">{{ hobby.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hobby-rope {
  position: absolute;
  top: -18px;
  left: 2%;
  right: 2%;
  height: 5px;
  z-index: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #d6e3bb, #5d7436 48%, #1d2c14);
  box-shadow:
    0 3px 8px rgba(0, 0, 0, 0.7),
    0 0 14px rgba(184, 255, 68, 0.15);
}
.hobby-rope::after {
  content: "";
  position: absolute;
  inset: 1px 0 auto;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}
.hobby-card {
  z-index: 1;
  margin-top: 10px;
}
.rope-hole {
  position: absolute;
  top: -25px;
  left: 50%;
  z-index: 3;
  width: 16px;
  height: 16px;
  transform: translateX(-50%);
  border: 4px solid #090d08;
  border-radius: 999px;
  background: #344b22;
  box-shadow:
    0 0 0 1px rgba(184, 255, 68, 0.35),
    inset 0 2px 4px rgba(0, 0, 0, 0.8);
}
@media (max-width: 639px) {
  .hobby-rope {
    top: -15px;
    left: 7%;
    right: auto;
    height: calc(100% - 20px);
    width: 4px;
    background: linear-gradient(90deg, #5d7436, #d6e3bb, #5d7436);
  }
  .hobby-rope::after {
    inset: 0 auto 0 1px;
    width: 1px;
    height: 100%;
  }
  .hobby-card {
    margin-left: 22px;
  }
  .rope-hole {
    top: 50%;
    left: -30px;
  }
}
</style>
