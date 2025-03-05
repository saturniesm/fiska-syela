<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <article class="flex flex-col gap-6 text-justify text-sm/6 text-hint/60 px-16">
    <p class="text-justify">
      I am a Frontend Developer with 2 years of experience, specializing in
      <span class="font-semibold" :class="layoutStore.navigationClass('text')"
        >Vue, Nuxt, React, Next.js, and Angular.</span
      >
      I have built more than five full-scale projects from scratch. My expertise lies in creating
      scalable, high-performance, and maintainable web applications.
    </p>

    <p>
      Beyond coding, I am passionate about
      <span class="font-semibold" :class="layoutStore.navigationClass('text')">
        structuring scalable design systems,</span
      >
      ensuring that designs are both
      <span class="font-semibold" :class="layoutStore.navigationClass('text')"
        >developer-friendly</span
      >
      and
      <span class="font-semibold" :class="layoutStore.navigationClass('text')"
        >visually compelling.</span
      >
      I am currently expanding my skills in UI/UX design, bridging the gap between aesthetics and
      functionality.
    </p>
    <p>
      I am also active in the tech community, sharing knowledge through
      <span class="font-semibold" :class="layoutStore.navigationClass('text')"
        >Medium articles, Twitter, and Instagram,</span
      >
      where I discuss frontend development, web performance, and industry trends. My goal is to
      continuously refine my skills, stay ahead of industry standards, and build products that are
      both efficient and impactful.
    </p>
  </article>
</template>

<style lang="scss"></style>
