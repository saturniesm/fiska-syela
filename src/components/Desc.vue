<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
import { Icon } from '@iconify/vue'

const layoutStore = useLayoutStore()

const descriptions = [
  {
    title: 'IMAPS - Asset Management System',
    desc: 'Asset management solution for BPJS, built with Angular. It handles assets from acquisition to disposal, including mutations such as updates to asset details, ensuring efficient management throughout the asset lifecycle.',
    img: 'images/imaps.png',
    skill: ['AngularJS', 'Daisy UI', 'NG-ZORRO', 'Tailwind CSS'],
  },
  {
    title: 'E-Procurement - Procurement Management System',
    desc: 'The e-Procurement system for Telkomsigma is a comprehensive internal solution that tracks the entire procurement process—from initial requests and supplier selection to order approvals, inventory management, and invoice tracking. It streamlines complex procurement workflows, ensuring efficiency, transparency, and full control over purchasing activities.',
    img: 'images/e-proc.png',
    skill: ['Nuxt', 'Pinia', 'Vueform', 'Tailwind CSS', 'VeeValidate'],
  },
  {
    title: 'LSM - Asset Management System',
    desc: 'LSM Asset Management is a comprehensive system for Telkomsigma that handles the entire asset lifecycle. From the initial acquisition of assets, it tracks their movement, mutations, insurance details, repairs, and disposals. The system also includes asset checklists to ensure all necessary steps are followed for each asset’s maintenance and management, offering complete visibility and control over the assets throughout their lifecycle.',
    img: 'images/lsm.png',
    skill: ['Nuxt', 'Pinia', 'Vueform', 'Tailwind CSS', 'VeeValidate'],
  },
  {
    title: 'Sygap - Ticketing Management System',
    desc: 'Sygap is a ticketing management system that covers Change Management (PBI), Knowledge Management, and CMBD. It streamlines handling change requests, manages knowledge sharing, and tracks IT assets and configurations for better IT service management.',
    img: 'images/sygap.png',
    skill: ['Vue', 'Pinia', 'Vueform', 'Tailwind CSS', 'VeeValidate'],
  },
  {
    title: 'Digipactum - Contract Management System',
    desc: 'Digipactum is a contract management system that simplifies the creation, storage, and management of contracts. It helps streamline the entire contract lifecycle, from drafting and negotiation to execution and renewal. The system ensures better compliance, faster approvals, and easy tracking of contract terms and obligations, improving efficiency and reducing risks in contract handling.',
    img: 'images/digipactum.png',
    skill: ['Nuxt', 'Pinia', 'PrimeVue', 'Tailwind CSS', 'VeeValidate'],
  },
  {
    title: 'Grantha - Document Management System',
    desc: 'Grantha is a document management system that organizes, stores, and manages digital documents. It features secure access, advanced search, and collaboration tools to streamline document handling and improve productivity.',
    img: 'images/grantha.png',
    skill: ['Nuxt', 'Pinia', 'PrimeVue', 'Tailwind CSS', 'VeeValidate'],
  },
]
</script>

<template>
  <section class="flex flex-col gap-6 w-full transition-colors duration-600">
    <article
      v-for="desc in descriptions"
      :key="desc.title"
      class="flex lg:flex-row flex-col gap-2 w-full group"
    >
      <figure class="lg:w-1/4 lg:py-4">
        <img :src="desc.img" :alt="desc.title" class="w-full lg:rounded-md" />
      </figure>
      <div
        class="flex flex-col text-sm lg:w-3/4 gap-4 lg:p-4 p-2.5 rounded-md lg:rounded-xl transition-colors duration-300"
        :class="layoutStore.navigationClass('dark-transprant-background-hover')"
      >
        <h3
          class="font-semibold text-lg leading-none text-hint transition-colors duration-600"
          :class="[layoutStore.navigationClass('text-group-hover')]"
        >
          {{ desc.title }}
        </h3>
        <p
          class="text-justify text-sm text-hint/60 transition-colors duration-600"
          :class="[layoutStore.navigationClass('text-light-group-hover')]"
        >
          {{ desc.desc }}
        </p>
        <ul class="flex flex-wrap gap-2 text-sm">
          <li
            v-for="skill in desc.skill"
            :key="skill"
            class="flex items-center justify-start -gap-4"
          >
            <Icon
              icon="material-symbols-light:play-arrow-outline-rounded"
              class="w-6 h-6 text-hint/40 transition-colors duration-600"
              :class="layoutStore.navigationClass('text-group-hover')"
            />
            <span
              class="-ml-0.5 text-hint transition-colors duration-600"
              :class="layoutStore.navigationClass('text-light-group-hover')"
            >
              {{ skill }}
            </span>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<style lang="scss"></style>
