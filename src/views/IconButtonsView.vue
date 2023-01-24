<template>
  <div>
    <div class="flex items-center justify-between p-6 tablet:hidden">
      <h4 class="font-semibold">Documentation</h4>
      <button
        title="Sidebar"
        @click="openSidebar"
        class="open-sidebar flex flex-col items-end justify-center space-y-1 bg-slate-200 w-fit h-10 p-2 rounded">
        <span class="h-1 w-6 inline-block bg-slate-700 rounded"></span>
        <span class="h-1 w-8 inline-block bg-slate-700 rounded"></span>
        <span class="h-1 w-7 inline-block bg-slate-700 rounded"></span>
      </button>
    </div>
    <div class="wrapper flex flex-wrap">
      <Sidebar />
      <div class="bg-white content flex-1">
        <Navbar />
        <div id="installation" class="mb-8 p-8">
          <h3 class="mb-5">Installation</h3>
          <p class="mb-2">
            You can install it using
            <span class="bg-gray-100 px-1">yarn add share-button-links</span>
            or
            <span class="bg-gray-100 px-1">npm install share-button-links</span>
            .
          </p>
          <p class="mb-2">To import it inside your components just add:</p>
          <Code :code="code" language="js" />
          <p class="mt-4">
            To import the CSS or SCSS just add:
            <span class="bg-gray-100 px-1">@import 'share-button-links/main.css';</span>
            or
            <span class="bg-gray-100 px-1">@import 'share-button-links/main.scss';</span>
            .
          </p>
          <p>
            <span class="text-primary-600 font-semibold">Note:</span>
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
