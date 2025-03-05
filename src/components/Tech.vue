<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const sections = ref([
  {
    id: 'section1',
    number: '01',
    title: 'Intro',
    body: 'Timeline-style navigation',
    color: '#fff',
  },
  {
    id: 'section2',
    number: '02',
    title: 'Section 2 Title',
    body: 'Lorem ipsum...',
    color: '#F64747',
  },
  {
    id: 'section3',
    number: '03',
    title: 'Section 3 Title',
    body: 'Lorem ipsum...',
    color: '#22A7F0',
  },
  {
    id: 'section4',
    number: '04',
    title: 'Section 4 Title',
    body: 'Lorem ipsum...',
    color: '#F9690E',
  },
  {
    id: 'section5',
    number: '05',
    title: 'Section 5 Title',
    body: 'Lorem ipsum...',
    color: '#9B59B6',
  },
  {
    id: 'section6',
    number: '06',
    title: 'Section 6 Title',
    body: 'Lorem ipsum...',
    color: '#03C9A9',
  },
])

const activeSection = ref('section1')

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const updateActiveSection = () => {
  let scrollPosition = window.scrollY
  sections.value.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element && element?.offsetTop <= scrollPosition + 200) {
      activeSection.value = section.id
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <nav class="nav__wrapper" id="navbar-example">
      <ul class="nav">
        <li
          v-for="(section, index) in sections"
          :key="section.id"
          :class="{ active: activeSection === section.id }"
        >
          <a :href="`#${section.id}`" @click.prevent="scrollToSection(section.id)">
            <span class="nav__counter">{{ section.number }}</span>
            <h3 class="nav__title">{{ section.title }}</h3>
            <p class="nav__body">{{ section.body }}</p>
          </a>
        </li>
      </ul>
    </nav>

    <section
      v-for="(section, index) in sections"
      :key="section.id"
      :id="section.id"
      class="section"
      :style="{ backgroundColor: section.color }"
    >
      {{ section.title }}
    </section>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  color: #fff;
  position: relative;
}

section {
  height: 100vh;
  font-size: 40px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__wrapper {
  position: fixed;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
}

.nav li {
  margin-bottom: 1em;
  transition: all 0.3s ease-out;
}

.nav li.active .nav__counter {
  font-size: 48px;
}

.nav li.active .nav__title,
.nav li.active .nav__body {
  height: auto;
  opacity: 1;
}

.nav__counter {
  font-size: 24px;
  transition: all 0.15s ease-out;
}

.nav__title,
.nav__body {
  font-size: 18px;
  width: 300px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    height 0.3s ease-out,
    opacity 0.2s ease-out;
}
</style>
