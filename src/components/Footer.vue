<template>
  <footer class="relative border-t border-white/10 bg-[#070907]/90">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:flex-row sm:items-start sm:justify-between lg:px-8"
    >
      <div class="min-w-[220px]">
        <RouterLink
          to="/"
          class="flex items-center gap-3 font-bold tracking-tight text-white"
        >
          <span
            class="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-[#080b08] shadow-[0_0_25px_rgba(184,255,68,.2)]"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <rect x="5" y="5" width="14" height="14" rx="2" />
              <path
                d="M9 1v4M15 1v4M9 19v4M15 19v4M19 9h4M19 14h4M1 9h4M1 14h4M9 9h6v6H9z"
              />
            </svg>
          </span>
          <span>CRA<span class="text-lime-300">.</span></span>
        </RouterLink>
        <p class="mt-5 text-xs leading-6 text-gray-500">
          © 2026 Caleb Reece Asia.<br />All rights reserved.
        </p>
      </div>

      <div>
        <p
          class="mono mb-4 text-[10px] uppercase tracking-[.22em] text-lime-300"
        >
          Quick links
        </p>
        <nav class="flex flex-col gap-3 text-sm text-gray-400">
          <RouterLink class="transition hover:text-green-400" to="/"
            >Home</RouterLink
          >
          <RouterLink class="transition hover:text-green-400" to="/profile"
            >Profile</RouterLink
          >
          <RouterLink class="transition hover:text-green-400" to="/portfolio"
            >Projects</RouterLink
          >
          <RouterLink class="transition hover:text-green-400" to="/hobbies"
            >Hobbies</RouterLink
          >
        </nav>
      </div>

      <div>
        <p class="mb-4 text-sm font-semibold text-white">Connect</p>
        <div class="flex gap-3">
          <a
            href="https://github.com/Caleb-Asia"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-400 backdrop-blur-md transition hover:border-green-400/40 hover:text-green-400"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
              /></svg
          ></a>
          <a
            href="https://www.linkedin.com/in/caleb-asia-222447371/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-400 backdrop-blur-md transition hover:border-green-400/40 hover:text-green-400"
            ><svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1 8h4.3v13H1V8Zm6.8 0H12v1.8h.06c.6-1.13 2.07-2.32 4.25-2.32 4.54 0 5.38 2.99 5.38 6.88V21h-4.3v-5.87c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H7.8V8Z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>
