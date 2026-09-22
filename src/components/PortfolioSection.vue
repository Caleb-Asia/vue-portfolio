<script setup>
const projects = [
  {
    title: "Bootstrap Store",
    tag: "01",
    url: "https://caleb-asia.github.io/bootstrap_store/",
    description: "A store that sells a variety of products and utilizes the Bootstrap framework.",
  },
  {
    title: "Animation Store",
    tag: "02",
    url: "https://caleb-asia.github.io/animation-website/",
    description: "A store that utilises a variety of styling animations.",
  },
  {
    title: "Gallery",
    tag: "03",
    url: "https://caleb-asia.github.io/galleryexcercise/",
    description: "A single-page webpage that shows images from three categories, with filtering and an overlay description for each image.",
  },
  {
    title: "E-commerce",
    tag: "04",
    url: "https://group-10-module-3-core-project-production-30a0.up.railway.app/",
    description: "An online store created in a group for university students, with food tailored to many preferences and tastes.",
    note: "Login: demo@foodboxx.co.za · Password: Demo123!",
  },
  {
    title: "Web Scraping",
    tag: "05",
    url: "https://market-pulse-11gq.onrender.com/",
    description: "A team project that uses web scraping to pull data from other websites, with data automatically refreshed every 15 minutes.",
  },
  {
    title: "HR Website",
    tag: "06",
    url: "https://module1-project-hr.onrender.com/",
    description: "A team project aimed at helping supervisors manage their employees and track everything in one place.",
    note: "User: admin · Password: password123",
  },
];
</script>

<template>
  <section id="portfolio" class="border-t border-white/8 py-28">
    <div class="mb-12 max-w-xl">
      <h2 class="text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">
        <span class="text-lime-300">Projects</span><br />Showcase<span
          class="text-lime-300"
          >.</span
        >
      </h2>
      <p class="mt-8 leading-8 text-white/50">
        A collection of digital products, interfaces, and systems built with
        curiosity, intention, and a little bit of code.
      </p>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.tag"
        class="project-card glass group relative flex min-h-[210px] flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:shadow-[0_0_30px_rgba(184,255,68,.1)]"
      >
        <span class="project-nail" aria-hidden="true" />
        <div>
          <div class="mono text-xs text-lime-300">{{ project.tag }}</div>
          <h3 class="mt-4 text-xl font-bold text-white">{{ project.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/55">{{ project.description }}</p>
          <p v-if="project.note" class="mt-3 text-xs leading-5 text-white/45">
            {{ project.note }}
          </p>
        </div>
        <a
          :href="project.url"
          target="_blank"
          rel="noreferrer"
          class="mt-6 inline-flex w-fit rounded-full bg-lime-300 px-4 py-2 text-xs font-bold text-[#10150b] transition hover:bg-lime-200"
          >View project ↗</a
        >
      </article>
    </div>
  </section>
</template>
