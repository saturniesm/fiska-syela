<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()

const resumes = [
  {
    time: 'July 2023 - Present',
    title: 'Frontend Developer | Telkomsigma',
    desc: [
      'Frontend Development: Building and optimizing fast, scalable, and maintainable web applications. I ensure the best coding practices, maintain clean architecture, and improve performance.',
      'Design System Development: Creating and maintaining a structured, scalable design system to ensure consistency across projects. I collaborate with designers and developers to make sure components are reusable, accessible, and developer-friendly.',
      'Technical Leadership & Collaboration: Leading discussions with my team, sharing best practices, and guiding developers on improving code quality, UI/UX, and system architecture. I also assist in onboarding and mentoring team members.',
      'System Migration & Modernization: Helping the team transition from older systems to modern frameworks and workflows, ensuring a smooth migration process while maintaining performance and stability.',
      'Cross-Team Communication: Working closely with backend engineers, designers, and product managers to align development goals and ensure seamless integration between frontend and backend systems.',
    ],
    skill: ['Nuxt', 'Vue.js', 'AngularJS', 'React', 'Javascript', 'Typescript', 'Tailwind'],
  },
  {
    time: 'February 2023 - April 2023',
    title: 'Quality Assurance (Internship) | PT Merkle Inovasi Teknologi',
    desc: [
      'Manual Testing: Conducting hands-on testing to identify bugs, UI inconsistencies, and performance issues before deployment.',
      'Bug Reporting & Documentation: Logging detailed bug reports, including steps to reproduce, expected vs. actual behavior, and potential fixes, to help developers resolve issues efficiently.',
      'Cross-Browser & Responsive Testing: Ensuring the application works seamlessly across different devices, screen sizes, and browsers to provide a consistent user experience.',
      'Collaboration with Developers & QA: Working closely with the QA team and developers to troubleshoot, prioritize, and resolve issues, improving overall product quality.',
      'Regression Testing: Performing tests after bug fixes and new feature implementations to prevent unintended issues from affecting production.',
      'By actively engaging in testing and bug reporting, I help maintain high application quality, smooth user experiences, and efficient debugging processes.',
    ],
    skill: ['Manual Testing', 'Bug Reporting', 'Regression Testing', 'Cross-Browser Testing'],
  },
  {
    time: 'September 2022 - January 2023',
    title: 'Backend Developer (Internship) | PT Ina Gata Persada',
    desc: [
      'Build RESTful API for a library website with Laravel and Laravel Passport',
      'Build canteen website and its RESTful API with Laravel, Yajra Datatable, Passport, and Core UI',
      'Create documentation for canteen’s web API and documentation in Postman',
      'Work as a team to build full stack payroll website with Laravel, Yajra, Passport, Core UI (Handling data and view for user’s BPJS)',
    ],
    skill: ['Laravel', 'Passport', 'Core UI', 'Yajra Datatable'],
  },
  {
    time: 'June 2022 - September 2022',
    title: 'Quality Assurance (Internship) | PT Telekomunikasi Selular',
    desc: [
      'Testing and checking user data with automated testing using REST Assured',
      'Create testing documentation in Katalon',
      'Ensuring that user data is in accordance with the REST API requests and vice versa',
    ],
    skill: ['Automation Testing', 'Bug Reporting', 'Regression Testing', 'Cross-Browser Testing'],
  },
]
</script>

<template>
  <div class="px-6">
    <ol class="relative border-s px-6 border-hint/10">
      <li class="mb-10 ms-4" v-for="resume in resumes">
        <div
          class="absolute w-2 h-2 mt-1.5 -start-1 rotate-45"
          :class="layoutStore.navigationClass('background')"
        ></div>
        <time class="mb-1 text-sm font-medium leading-none text-hint !cursor-text">{{
          resume.time
        }}</time>
        <h3
          class="font-semibold text-gray-900 text-lg mb-3 !cursor-text"
          :class="layoutStore.navigationClass('text')"
        >
          {{ resume.title }}
        </h3>
        <ul class="flex flex-col gap-2 text-sm text-hint/60 text-justify cursor-text">
          <li v-for="item in resume.desc" :key="item" class="!cursor-text">
            <span class="cursor-text">{{ item }}</span>
          </li>
        </ul>
        <div class="flex flex-row gap-2.5 mt-6 !cursor-default">
          <div
            class="border border-hint/20 px-4 py-1.5 rounded-md text-sm text-hint"
            v-for="item in resume.skill"
            :class="[layoutStore.navigationClass('bg-transparant'), 'bg-opacity-50']"
          >
            <span class="" :class="layoutStore.navigationClass('text')">
              {{ item }}
            </span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
x

<style lang="scss"></style>
