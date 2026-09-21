<script setup>
const skills = [
  [
    "Programming",
    [
      "Object-Oriented Programming",
      "Functional Programming",
      "Algorithm Development",
    ],
  ],
  [
    "Application Development",
    [
      "User Interface Development",
      "Server-Side Development",
      "Cross-Platform Development",
    ],
  ],
  [
    "Development Practices",
    ["Version Management", "Performance Optimization", "Testing & Validation"],
  ],
];
const indicators = [
  ["Software Development", 90],
  ["System Architecture", 78],
  ["Database Management", 88],
  ["Performance Optimization", 88],
  ["Team Collaboration", 80],
];
</script>
<template>
  <section
    class="grid gap-16 border-t border-white/8 py-28 lg:grid-cols-[.95fr_1.05fr] lg:items-start"
  >
    <div>
      <h2 class="text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">
        <span class="text-lime-300">Technical</span><br />Skills<span
          class="text-lime-300"
          >.</span
        >
      </h2>
      <div class="mt-10 space-y-6">
        <div v-for="group in skills" :key="group[0]">
          <p class="mb-3 text-sm font-bold text-white/80">{{ group[0] }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group[1]"
              :key="skill"
              class="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-xs text-white/50"
              >{{ skill }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="glass rounded-[2rem] p-7 sm:p-10">
      <div class="mb-8">
        <h3 class="text-lg font-bold">Skill indicators</h3>
      </div>
      <div class="space-y-7">
        <div v-for="indicator in indicators" :key="indicator[0]">
          <div class="mb-2 flex justify-between text-xs">
            <span class="text-white/60">{{ indicator[0] }}</span
            ><span class="mono text-lime-300">{{ indicator[1] }}%</span>
          </div>
          <div class="h-1.5 overflow-hidden rounded-full bg-white/8">
            <div
              class="h-full rounded-full bg-lime-300"
              :style="{ width: `${indicator[1]}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
