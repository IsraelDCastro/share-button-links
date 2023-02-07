<template>
  <div>
    <div class="flex items-center justify-between p-6 tablet:hidden">
      <h4 class="font-semibold">Documentation</h4>
      <button
        title="Sidebar"
        @click="openSidebar"
        class="flex flex-col items-end justify-center h-10 p-2 space-y-1 rounded open-sidebar bg-slate-200 w-fit"
      >
        <span class="inline-block w-6 h-1 rounded bg-slate-700"></span>
        <span class="inline-block w-8 h-1 rounded bg-slate-700"></span>
        <span class="inline-block h-1 rounded w-7 bg-slate-700"></span>
      </button>
    </div>
    <div class="flex flex-wrap wrapper">
      <Sidebar />
      <div class="flex-1 bg-white content">
        <Navbar />
        <div id="installation" class="p-8 mb-8">
          <h3 class="mb-5">Installation</h3>
          <p class="mb-2">
            You can install it using
            <span class="px-1 bg-gray-100">yarn add share-button-links</span>
            or
            <span class="px-1 bg-gray-100">npm install share-button-links</span>
            .
          </p>
          <p class="mb-2">To import it inside your components just add:</p>
          <Code :code="code" language="js" />
          <p class="mt-4">
            To import the CSS or SCSS just add:
            <span class="px-1 bg-gray-100">@import 'share-button-links/main.css';</span>
            or
            <span class="px-1 bg-gray-100">@import 'share-button-links/main.scss';</span>
            .
          </p>
          <p>
            <span class="font-semibold text-primary-600">Note:</span>
            Most of the svg icons in buttons belong to
            <a href="https://icons.getbootstrap.com/" target="_blank" class="link info">Bootstrap Icons.</a>
            and others to
            <a href="https://tablericons.com/" target="_blank" class="link info">Tabler Icons.</a>
          </p>
        </div>
        <Facebook />
        <Whatsapp />
        <Telegram />
        <Twitter />
        <LinkedIn />
        <Reddit />
        <Pinterest />
        <Tumblr />
        <Pocket />
        <Email />
        <Copy />

        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/layouts/Sidebar.vue";
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
import Code from "@/examples/Code.vue";

import { Facebook, Whatsapp, Twitter, LinkedIn, Reddit, Pinterest, Tumblr, Pocket, Email, Copy, Telegram } from "@/examples/icons";

const code = `
  import { FacebookIcon } from 'share-button-links/components/icons';`;

function openSidebar() {
  document.querySelector(".sidebar").classList.toggle("is-sidebar-open");
  document.querySelector(".open-sidebar").classList.toggle("is-active");
}
</script>
