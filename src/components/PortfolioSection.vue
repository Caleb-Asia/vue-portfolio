<script setup>
const projects = [
  {
    title: "FoodBoxx",
    category: "Web App",
    tag: "FoodBoxx",
    url: "https://group-10-module-3-core-project-production-30a0.up.railway.app/",
    github: "https://github.com/Caleb-Asia/Group-10---Module-3-Core-Project",
    subtitle: "Student Meal Box Platform",
    description: "A meal-box platform designed to make ordering affordable meals easier for students.",
    note: "Email: demo@foodboxx.co.za · Password: Demo123!",
    image: "/foodboxx.png",
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
    image: "/bootstrap-store.png",
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
    image: "/animation-store.png",
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
    image: "/gallery.png",
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
    image: "/web-scraping.png",
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
    image: "/hr-web.png",
    tech: ["Vue", "PHP", "MySQL"],
    accent: "linear-gradient(135deg, rgba(144,122,255,0.25), rgba(26,22,38,0.12))",
  },
];
const buildSteps = ["idea", "plan", "design", "code", "break something", "debug", "learn", "ship"];
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
      <img src="/projects.png" alt="Projects illustration" class="section-illustration" />
    </div>
    <div class="process-line-wrap"><div class="section-heading"><p class="section-label">my very scientific process</p><h2>How I <span>build.</span></h2></div><div class="process-line"><span v-for="(step,index) in buildSteps" :key="step"><b>{{ String(index + 1).padStart(2,'0') }}</b>{{ step }}</span></div></div>
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
            <a :href="project.github" target="_blank" rel="noreferrer" class="project-link secondary">GitHub ↗</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-showcase {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}
.project-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.75rem;
  background: rgba(16, 19, 18, 0.9);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(184, 255, 68, 0.35);
  box-shadow: 0 24px 44px rgba(184, 255, 68, 0.08);
}
.project-visual {
  position: relative;
  min-height: 220px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background-size: cover;
  background-position: center;
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
  padding: 1.3rem 1.2rem 1.4rem;
}
.project-tag {
  margin-bottom: 0.8rem;
  color: #b8ff44;
  font: 500 11px "DM Mono", monospace;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.project-body h3 {
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.06em;
  color: #f4f7f2;
}
.project-subtitle {
  margin: 0.7rem 0 0;
  color: rgba(255,255,255,0.75);
  font-size: 0.98rem;
  line-height: 1.6;
}
.project-description {
  margin: 0.9rem 0 0;
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  line-height: 1.75;
}
.project-note {
  margin: 0.95rem 0 0;
  border: 1px solid rgba(184, 255, 68, 0.18);
  border-radius: 0.9rem;
  background: rgba(184, 255, 68, 0.05);
  padding: 0.7rem 0.8rem;
  color: #e7fbc1;
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
  border: 1px solid rgba(184, 255, 68, 0.25);
  border-radius: 999px;
  padding: 0.42rem 0.7rem;
  background: rgba(184, 255, 68, 0.05);
  color: #dfffb2;
  font: 500 11px "DM Mono", monospace;
  text-transform: uppercase;
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
  border-radius: 999px;
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
  background: #e8ff6a;
  color: #101312;
}
.project-link.secondary {
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.02);
  color: rgba(255,255,255,0.9);
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
}
</style>
