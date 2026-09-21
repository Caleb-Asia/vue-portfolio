<template>
  <div class="relative min-h-screen overflow-hidden bg-[#070907]">
    <div
      class="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-lime-400/10 blur-[130px]"
    />
    <div
      class="pointer-events-none absolute right-0 top-[34rem] h-[32rem] w-[28rem] rounded-full bg-yellow-400/7 blur-[160px]"
    />
    <div class="grid-bg pointer-events-none absolute inset-0 opacity-60" />
    <Navbar />
    <main class="relative mx-auto max-w-6xl px-6 lg:px-8">
      <RouterView v-slot="{ Component }"
        ><Transition name="page" mode="out-in"
          ><component :is="Component" /></Transition
      ></RouterView>
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
