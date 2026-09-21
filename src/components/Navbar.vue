<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-[#070907]/90 backdrop-blur-xl"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-3 text-lg font-extrabold tracking-tight text-white"
      >
        <span
          class="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-[#080b08] shadow-[0_0_25px_rgba(184,255,68,.25)]"
          ><svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <path
              d="M9 1v4M15 1v4M9 19v4M15 19v4M19 9h4M19 14h4M1 9h4M1 14h4M9 9h6v6H9z"
            /></svg
        ></span>
        CRA<span class="text-lime-300">.</span>
      </RouterLink>
      <div class="hidden items-center gap-4 text-base font-semibold md:flex">
        <RouterLink
          class="rounded-full px-5 py-2.5 text-white/55 transition hover:text-white"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="rounded-full px-5 py-2.5 text-white/55 transition hover:text-white"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/profile"
          >Profile</RouterLink
        >
        <RouterLink
          class="rounded-full px-5 py-2.5 text-white/55 transition hover:text-white"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/portfolio"
          >Projects</RouterLink
        >
        <RouterLink
          class="rounded-full px-5 py-2.5 text-white/55 transition hover:text-white"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/hobbies"
          >Hobbies</RouterLink
        >
        <RouterLink
          class="rounded-full px-5 py-2.5 text-white/55 transition hover:text-white"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/contact"
          >Contact</RouterLink
        >
      </div>
      <button class="text-lime-300 md:hidden" @click="menuOpen = !menuOpen">
        ☰
      </button>
    </nav>
    <div v-if="menuOpen" class="border-t border-white/5 px-6 py-4 md:hidden">
      <div class="flex flex-col gap-2 text-sm font-semibold text-white/70">
        <RouterLink
          class="rounded-full px-4 py-3"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/"
          @click="menuOpen = false"
          >Home</RouterLink
        ><RouterLink
          class="rounded-full px-4 py-3"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/profile"
          @click="menuOpen = false"
          >Profile</RouterLink
        ><RouterLink
          class="rounded-full px-4 py-3"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/portfolio"
          @click="menuOpen = false"
          >Projects</RouterLink
        ><RouterLink
          class="rounded-full px-4 py-3"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/hobbies"
          @click="menuOpen = false"
          >Hobbies</RouterLink
        ><RouterLink
          class="rounded-full px-4 py-3"
          active-class="nav-active !bg-lime-300 !text-[#10150b]"
          to="/contact"
          @click="menuOpen = false"
          >Contact</RouterLink
        >
      </div>
    </div>
  </header>
</template>

