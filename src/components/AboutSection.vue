<template>
  <section id="about" class="content-section">
    <div class="profile-layout">
      <div class="profile-copy">
        <p class="section-label">the journey</p>
        <h1>From LEGO<br /><span>to code.</span></h1>
        <p>I’ve always enjoyed building things. When I was younger, that meant LEGO and Prestik: a pile of separate pieces, one idea, and plenty of rebuilding when something didn’t work.</p>
      </div>
      <img src="/about.png" alt="About illustration" class="section-illustration profile-illustration" />
    </div>
    <div class="build-path"><span v-for="(step, index) in ['LEGO', 'computer', 'code', 'web app']" :key="step"><b>{{ String(index + 1).padStart(2, '0') }}</b>{{ step }}<i v-if="index < 3">→</i></span></div>
    <div class="journey-grid">
      <article><span class="section-label">01</span><h2>Start with curiosity</h2><p>I like asking how things work and then trying to make my own version.</p></article>
      <article><span class="section-label">02</span><h2>Learn by building</h2><p>Projects help me turn new concepts into something I can see, test and improve.</p></article>
      <article><span class="section-label">03</span><h2>Keep growing</h2><p>I’m working towards becoming a stronger full-stack developer, one useful piece at a time.</p></article>
    </div>
  </section>
</template>
