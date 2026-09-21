<script setup>
import profilePic from "../public/profile-pic.png";
</script>

<template>
  <section
    id="home"
    class="grid min-h-[680px] items-center gap-16 py-24 lg:grid-cols-[1.05fr_.95fr] lg:py-28"
  >
    <div>
      <h1
        class="max-w-2xl text-6xl font-extrabold leading-[.98] tracking-[-.07em] sm:text-8xl"
      >
        <span class="text-lime-300">Programmer</span
        ><br />Professional<br /><span class="text-white/90">Portfolio.</span>
      </h1>
      <p class="mt-9 max-w-lg text-base leading-8 text-white/50">
        Greetings! I'm Caleb Reece Asia, a passionate web developer building
        thoughtful digital experiences and elegant systems.
      </p>
      <div class="mt-10 flex items-center gap-5">
        <RouterLink
          to="/portfolio#portfolio"
          class="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-[#10150b] transition hover:scale-105"
          >Explore work</RouterLink
        ><RouterLink
          to="/profile#about"
          class="text-sm text-white/60 hover:text-lime-300"
          >Meet the developer</RouterLink
        >
      </div>
    </div>
    <div class="relative">
      <div
        class="glass glow relative mx-auto aspect-square max-w-[500px] overflow-hidden rounded-[2.5rem] p-6 sm:p-10"
      >
        <div
          class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime-300/20 blur-3xl"
        />
        <div
          class="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl"
        />
        <div
          class="relative h-full overflow-hidden rounded-3xl border border-green-400/30 shadow-[0_0_35px_rgba(74,222,128,.16)]"
        >
          <img
            :src="profilePic"
            alt="Caleb Reece Asia"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
