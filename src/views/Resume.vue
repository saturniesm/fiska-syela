<script setup lang="ts">
import Me from '@/components/Me.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Project from '@/components/Project.vue'
</script>

<template>
  <main class="lg:grid lg:grid-cols-12 p-[6%] font-sans">
    <section class="col-span-4 flex flex-col h-[70vh] items-start justify-center gap-20">
      <Me />
    </section>
    <section class="col-span-8 flex flex-col gap-20">
      <About />
      <Resume />
      <Project />
    </section>
  </main>
</template>

<style lang="scss"></style>
