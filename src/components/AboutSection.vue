<script setup>
const icon = (name) =>
  ({
    html5: "<>",
    css3: "#",
    python: "Py",
    javascript: "JS",
    php: "P",
    mysql: "DB",
    vuejs: "V",
    nodejs: "N",
    bootstrap: "B",
  })[name];
const languages = [
  ["JavaScript", "28.23%", "bg-yellow-300"],
  ["Vue", "27.95%", "bg-green-400"],
  ["HTML", "24.42%", "bg-orange-400"],
  ["CSS", "14.44%", "bg-purple-400"],
  ["SCSS", "4.23%", "bg-pink-400"],
  ["PHP", "0.74%", "bg-blue-900"],
];
const stack = [
  ["HTML", icon("html5")],
  ["CSS", icon("css3")],
  ["Python", icon("python")],
  ["JavaScript", icon("javascript")],
  ["PHP", icon("php")],
  ["MySQL", icon("mysql")],
];
const frameworks = [
  ["Vue", icon("vuejs")],
  ["Node.js", icon("nodejs")],
  ["Bootstrap", icon("bootstrap")],
];
</script>
<template>
  <section
    id="about"
    class="grid gap-16 border-t border-white/8 py-28 lg:grid-cols-[.85fr_1.15fr] lg:items-center"
  >
    <div>
      <h2 class="text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">
        <span class="text-lime-300">About</span><br />The Developer<span
          class="text-lime-300"
          >.</span
        >
      </h2>
      <p class="mt-8 max-w-md leading-8 text-white/50">
        This portfolio showcases my work and skills in web development as well as
        showcasing my approach towards creating things. Feel free to explore
        here and get to know me better!
      </p>
      <div class="mt-10">
        <h3 class="mb-4 text-sm font-bold text-white">Core Stack</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="item in stack"
            :key="item[0]"
            class="flex items-center gap-3 rounded-full border border-white/10 bg-white/[.035] px-4 py-3 text-sm text-white/60"
            ><span
              class="grid h-6 w-6 place-items-center rounded-md bg-white/10 font-mono text-[10px] text-lime-300"
              >{{ item[1] }}</span
            >{{ item[0] }}</span
          >
        </div>
        <h3 class="mb-4 mt-7 text-sm font-bold text-white">Frameworks</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="item in frameworks"
            :key="item[0]"
            class="flex items-center gap-3 rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm text-lime-300"
            ><span
              class="grid h-6 w-6 place-items-center rounded-md bg-white/10 font-mono text-[10px] text-lime-300"
              >{{ item[1] }}</span
            >{{ item[0] }}</span
          >
        </div>
      </div>
    </div>
    <div class="glass rounded-[2rem] p-6 sm:p-8">
      <div class="flex items-center gap-5 border-b border-white/8 pb-8">
        <div
          class="grid h-20 w-20 place-items-center rounded-full border border-lime-300/30 bg-gradient-to-br from-lime-300/30 to-yellow-400/10 text-4xl"
        >
          ◉
        </div>
        <div>
          <p class="mono text-[10px] uppercase tracking-widest text-lime-300">
            Full name
          </p>
          <h3 class="mt-1 text-xl font-bold">Caleb Reece Asia</h3>
          <p class="mt-1 text-sm text-white/40">Software Developer</p>
        </div>
      </div>
      <div class="pt-8">
        <h3 class="mb-4 text-lg font-bold">Most Used Languages</h3>
        <div class="flex h-4 overflow-hidden rounded-full bg-white/10">
          <div
            v-for="language in languages"
            :key="language[0]"
            :class="language[2]"
            :style="{ width: language[1] }"
          />
        </div>
        <div class="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
          <div
            v-for="language in languages"
            :key="language[0]"
            class="flex items-center gap-2 text-xs text-white/55"
          >
            <span
              class="h-2.5 w-2.5 shrink-0 rounded-full"
              :class="language[2]"
            />{{ language[0] }}
            <span class="ml-auto mono text-white/35">{{ language[1] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
