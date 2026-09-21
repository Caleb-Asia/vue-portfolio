<script setup>
import { ref } from "vue";

const form = ref({ name: "", email: "", message: "" });
const submitting = ref(false);
const sent = ref(false);
const error = ref("");

const submit = async () => {
  submitting.value = true;
  sent.value = false;
  error.value = "";

  try {
    const response = await fetch("https://formspree.io/f/xpqedpgj", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      }),
    });

    if (!response.ok) throw new Error("Unable to send your message.");
    sent.value = true;
    form.value = { name: "", email: "", message: "" };
  } catch (submissionError) {
    error.value =
      submissionError.message || "Something went wrong. Please try again.";
  } finally {
    submitting.value = false;
  }
};
</script>

<template>
  <section
    class="grid min-h-[720px] items-center gap-16 py-24 lg:grid-cols-[.8fr_1.2fr]"
  >
    <div>
      <h1
        class="text-6xl font-extrabold leading-[.98] tracking-[-.07em] sm:text-8xl"
      >
        <span class="text-lime-300">Let's</span><br />Build<br /><span
          class="text-white/90"
          >Together.</span
        >
      </h1>
      <p class="mt-8 max-w-md leading-8 text-white/50">
        Have a project, idea, or problem worth solving? Send a message and I
        will get back to you soon.
      </p>
    </div>

    <form class="glass rounded-[2rem] p-7 sm:p-10" @submit.prevent="submit">
      <div class="grid gap-6">
        <label class="text-sm text-white/60"
          >Full name<input
            v-model="form.name"
            name="name"
            required
            class="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-lime-300/60"
            placeholder="Your name"
        /></label>
        <label class="text-sm text-white/60"
          >Email<input
            v-model="form.email"
            name="email"
            required
            type="email"
            class="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-lime-300/60"
            placeholder="you@example.com"
        /></label>
        <label class="text-sm text-white/60"
          >Message<textarea
            v-model="form.message"
            name="message"
            required
            rows="6"
            class="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/20 focus:border-lime-300/60"
            placeholder="Tell me about your project..."
          />
        </label>
        <button
          :disabled="submitting"
          class="rounded-full bg-lime-300 px-6 py-3 font-bold text-[#10150b] transition hover:scale-[1.02] hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {{ submitting ? "Sending..." : "Send message" }}
        </button>
        <p v-if="sent" class="text-center text-sm text-lime-300">
          Thanks — your message was sent successfully.
        </p>
        <p v-if="error" class="text-center text-sm text-red-300">{{ error }}</p>
      </div>
    </form>
  </section>
</template>
