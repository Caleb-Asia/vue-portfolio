<script setup>
const projects = [
  {
    title: "WordPress Portfolio",
    category: "Portfolio Website",
    tag: "WordPress Portfolio",
    url: "https://wordpress-236bf.wasmer.app/",
    subtitle: "Personal portfolio built with WordPress",
    description: "A WordPress portfolio showcasing my work, skills, and experience.",
    image: "/wordpress-portfolio.webp",
    tech: ["WordPress"],
    accent: "linear-gradient(135deg, rgba(35,138,255,0.25), rgba(18,22,32,0.15))",
  },
  {
    title: "FoodBoxx",
    category: "Web App",
    tag: "FoodBoxx",
    url: "https://group-10-module-3-core-project-production-30a0.up.railway.app/",
    github: "https://github.com/Caleb-Asia/Group-10---Module-3-Core-Project",
    subtitle: "Student Meal Box Platform",
    description: "A meal-box platform designed to make ordering affordable meals easier for students.",
    note: "Email: demo@foodboxx.co.za · Password: Demo123!",
    image: "/foodboxx.webp",
    tech: ["Vue", "PHP", "MySQL", "Tailwind"],
    accent: "linear-gradient(135deg, rgba(184,255,68,0.32), rgba(27,39,31,0.2))",
  },
  {
    title: "Bootstrap Store",
    category: "Storefront",
    tag: "Bootstrap Store",
    url: "https://caleb-asia.github.io/bootstrap_store/",
    github: "https://github.com/Caleb-Asia/bootstrap_store",
    subtitle: "Responsive product showcase",
    description: "A store that sells a variety of products and utilizes the Bootstrap framework.",
    image: "/bootstrap-store.webp",
    tech: ["Bootstrap", "HTML", "CSS"],
    accent: "linear-gradient(135deg, rgba(35,138,255,0.25), rgba(18,22,32,0.15))",
  },
  {
    title: "Animation Store",
    category: "Landing Page",
    tag: "Animation Store",
    url: "https://caleb-asia.github.io/animation-website/",
    github: "https://github.com/Caleb-Asia/animation-website",
    subtitle: "Motion-focused storefront",
    description: "A store that utilises a variety of styling animations.",
    image: "/animation-store.webp",
    tech: ["CSS", "JavaScript", "UI Design"],
    accent: "linear-gradient(135deg, rgba(253,172,70,0.25), rgba(25,19,25,0.15))",
  },
  {
    title: "Gallery",
    category: "Gallery",
    tag: "Gallery",
    url: "https://caleb-asia.github.io/galleryexcercise/",
    github: "https://github.com/Caleb-Asia/galleryexcercise",
    subtitle: "Image filter experience",
    description: "A single-page webpage that shows images from three categories, with filtering and an overlay description for each image.",
    image: "/gallery.webp",
    tech: ["JavaScript", "HTML", "CSS"],
    accent: "linear-gradient(135deg, rgba(255,89,170,0.2), rgba(20,18,26,0.12))",
  },
  {
    title: "Market Pulse",
    category: "Data Tool",
    tag: "Web Scraping",
    url: "https://market-pulse-11gq.onrender.com/",
    github: "https://github.com/adamjattiem12-gif/-Flask-Web-Scraping-Dashboard",
    subtitle: "Live market insights",
    description: "A team project that uses web scraping to pull data from other websites, with data automatically refreshed every 15 minutes.",
    image: "/web-scraping.webp",
    tech: ["Python", "Flask", "Scraping"],
    accent: "linear-gradient(135deg, rgba(78,210,157,0.25), rgba(15,24,23,0.15))",
  },
  {
    title: "HR Hub",
    category: "Admin Portal",
    tag: "HR Website",
    url: "https://module1-project-hr.onrender.com/",
    github: "https://github.com/Caleb-Asia/module1-project-hr",
    subtitle: "Employee management system",
    description: "A team project aimed at helping supervisors manage their employees and track everything in one place.",
    note: "User: admin · Password: password123",
    image: "/hr-web.webp",
    tech: ["Vue", "PHP", "MySQL"],
    accent: "linear-gradient(135deg, rgba(144,122,255,0.25), rgba(26,22,38,0.12))",
  },
];
import { onMounted, onUnmounted, ref } from "vue";

const buildSteps = ["idea", "plan", "design", "code", "break something", "debug", "learn", "ship"];
const processStep = ref(0);
let processStepTimer;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  processStepTimer = window.setInterval(() => {
    processStep.value = (processStep.value + 1) % buildSteps.length;
  }, 2600);
});

onUnmounted(() => window.clearInterval(processStepTimer));
</script>

<template>
  <section id="portfolio" class="border-t border-white/8 py-28">
    <div class="mb-12 max-w-xl section-header-row">
      <div>
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
      <div class="coder-scene" role="img" :aria-label="`An animated developer coding: ${buildSteps[processStep]}`">
        <div class="coder-laptop">
          <div class="coder-monitor">
          <svg :key="processStep" class="coder-monitor-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path v-if="processStep === 0" d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5h2V4Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5h-2V4ZM9 8h2m2 4h2m-6 4h2" />
            <path v-else-if="processStep === 1" d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15" />
            <path v-else-if="processStep === 2" d="m14 5 5 5L8 21l-5 1 1-5L16 5m-4 2 5 5" />
            <path v-else-if="processStep === 3" d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" />
            <path v-else-if="processStep === 4" d="M12 3 22 21H2L12 3Zm0 6v5m0 3h.01" />
            <path v-else-if="processStep === 5" d="M8 8 6 5m10 3 2-3M7 11H4m16 0h-3M8 8h8l2 4-2 7H8l-2-7 2-4Zm1 4h.01M15 12h.01M10 19v2m4-2v2" />
            <path v-else-if="processStep === 6" d="M9 18h6m-5 3h4m-5-6a7 7 0 1 1 6 0c-.8.6-1 1.2-1 3h-4c0-1.8-.2-2.4-1-3Z" />
            <path v-else d="M12 22s-7-4-7-11a7 7 0 0 1 14 0c0 7-7 11-7 11Zm-2-11 2 2 4-5m-4-5v2" />
          </svg>
          <small :key="`label-${processStep}`" class="coder-monitor-label">{{ buildSteps[processStep] }}</small>
          </div>
          <div class="laptop-base"></div>
        </div>
        <div class="coffee-cup"><i class="cup-handle"></i><i class="coffee-steam steam-one"></i><i class="coffee-steam steam-two"></i><i class="coffee-steam steam-three"></i></div>
        <div class="coder-desk"></div>
        <span class="coder-caption">BUILD / SIP / REPEAT</span>
      </div>
    </div>
    <div class="process-line-wrap"><div class="section-heading"><p class="section-label">the build philosophy</p><h2>The ideal <span>build</span> plan</h2></div><div class="process-line"><span v-for="(step,index) in buildSteps" :key="step"><b>{{ String(index + 1).padStart(2,'0') }}</b>{{ step }}</span></div></div>
    <div class="project-showcase">
      <article v-for="project in projects" :key="project.tag" class="project-card">
        <div
          class="project-visual"
          :style="{
            background: project.accent,
            backgroundImage: project.image ? `url(${project.image})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>

        <div class="project-body">
          <div class="project-tag">{{ project.category }}</div>
          <h3>{{ project.title }}</h3>
          <p class="project-subtitle">{{ project.subtitle }}</p>
          <p class="project-description">{{ project.description }}</p>
          <p v-if="project.note" class="project-note">{{ project.note }}</p>

          <div class="tech-row">
            <span v-for="tech in project.tech" :key="tech" class="tech-pill">{{ tech }}</span>
          </div>

          <div class="project-actions">
            <a :href="project.url" target="_blank" rel="noreferrer" class="project-link primary">View Project</a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer" class="project-link secondary">GitHub ↗</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-showcase {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 62px 28px;
}
.project-card {
  overflow: hidden;
  min-width: 0;
  border: 0;
  border-top: 1px solid #d7d4ca;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  transition: border-color 0.25s ease;
}
.project-card:hover {
  border-color: #3657ff;
  box-shadow: none;
}
.project-card:first-child {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1.17fr 0.83fr;
  align-items: center;
  gap: 36px;
}
.project-visual {
  position: relative;
  min-height: 300px;
  border-bottom: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.35s cubic-bezier(.22,.7,.2,1);
}
.project-visual:hover {
  transform: translateY(-4px);
}
.project-window-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 0.5rem;
  padding: 0.9rem 1rem;
  background: rgba(12, 14, 13, 0.28);
  backdrop-filter: blur(4px);
}
.project-window-bar span {
  display: block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.7);
}
.project-window-bar span:nth-child(1) { background: #ff6b6b; }
.project-window-bar span:nth-child(2) { background: #ffd93d; }
.project-window-bar span:nth-child(3) { background: #6ee7a8; }
.project-window-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.96);
  text-shadow: 0 8px 18px rgba(0,0,0,0.35);
}
.project-body {
  padding: 22px 0 25px;
}
.project-tag {
  margin-bottom: 0.8rem;
  color: #3657ff;
  font: 700 9px "DM Sans", sans-serif;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.project-body h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2.7vw, 2.1rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  color: #171813;
}
.project-subtitle {
  margin: 0.7rem 0 0;
  color: #45463f;
  font-size: 0.9rem;
  line-height: 1.6;
}
.project-description {
  margin: 0.9rem 0 0;
  color: #606158;
  font-size: 0.82rem;
  line-height: 1.75;
}
.project-note {
  margin: 0.95rem 0 0;
  border: 1px solid rgba(54, 87, 255, 0.2);
  border-radius: 0;
  background: rgba(54, 87, 255, 0.045);
  padding: 0.7rem 0.8rem;
  color: #45463f;
  font-size: 0.8rem;
  line-height: 1.6;
}
.tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.2rem;
}
.tech-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d0cdc2;
  border-radius: 0;
  padding: 0.42rem 0.7rem;
  background: transparent;
  color: #54564d;
  font: 500 10px "DM Sans", sans-serif;
}
.project-actions {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.4rem;
}
.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.7rem;
  padding: 0.7rem 1rem;
  border-radius: 0;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: transform 0.2s ease, filter 0.2s ease;
}
.project-link:hover {
  transform: translateY(-2px);
  filter: brightness(1.04);
}
.project-link.primary {
  background: #3657ff;
  color: #fff;
}
.project-link.secondary {
  border: 1px solid #171813;
  background: transparent;
  color: #171813;
}
@media (max-width: 1024px) {
  .project-showcase {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .project-showcase {
    grid-template-columns: 1fr;
  }
  .project-body h3 {
    font-size: 1.6rem;
  }
  .project-card:first-child {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .project-card:first-child .project-visual {
    min-height: 260px;
  }
}
</style>
