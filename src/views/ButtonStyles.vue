<template>
  <div>
    <div class="wrapper">
      <Navbar />
      <div class="md:container">
        <div class="p-8">
          <h3>Styles for buttons</h3>
          <h6 class="mb-8">Styles for any kind of buttons.</h6>
          <hr class="my-8" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 class="mb-2 font-semibold">Default style</h5>
              <p class="mb-5">Default style for any buttons is square, as you can see below:</p>
              <div class="flex flex-wrap gap-4 mb-4">
                <ButtonFacebook text="Facebook" />
                <FacebookIcon />
              </div>
            </div>
            <div>
              <h5 class="mb-2 font-semibold">Rounded style</h5>
              <p class="mb-5">
                You can use the
                <span class="bg-gray-200 px-2 py-1">isRounded</span>
                or
                <span class="bg-gray-200 px-2 py-1">is-rounded</span>
                prop to add little rounded corners to the buttons as you can see below:
              </p>
              <div class="flex flex-wrap gap-4 mb-4">
                <ButtonFacebook text="Facebook" is-rounded />
                <FacebookIcon is-rounded />
              </div>
            </div>
            <div>
              <h5 class="mb-2 font-semibold">Circled style</h5>
              <p class="mb-5">
                You can use the
                <span class="bg-gray-200 px-2 py-1">isCircled</span>
                or
                <span class="bg-gray-200 px-2 py-1">is-circled</span>
                prop to add full-rounded corners to the buttons, also you can use it with the other styles as you can see below:
              </p>
              <div class="flex flex-wrap gap-4 mb-4">
                <ButtonFacebook text="Facebook" is-circled />
                <FacebookIcon is-circled />
              </div>
            </div>
            <div>
              <h5 class="mb-2 font-semibold">Bordered style</h5>
              <p class="mb-5">
                You can use the
                <span class="bg-gray-200 px-2 py-1">isBordered</span>
                or
                <span class="bg-gray-200 px-2 py-1">is-bordered</span>
                prop to add only borders to the buttons as you can see below:
              </p>
              <div class="flex flex-wrap gap-4 mb-4">
                <ButtonFacebook text="Facebook" is-bordered />
                <ButtonFacebook text="Facebook" is-bordered is-rounded />
                <ButtonFacebook text="Facebook" is-bordered is-circled />
                <FacebookIcon is-bordered />
                <FacebookIcon is-bordered is-rounded />
                <FacebookIcon is-bordered is-circled />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
import Code from "@/examples/Code.vue";
import { ButtonFacebook } from "@/components/buttons";
import { FacebookIcon } from "@/components/icons";

const codeDefault = `
  <ButtonFacebook
    url="..."
    text="..."
  />`;
const codeDefaultIcon = `
  <FacebookIcon
    url="..."
  />`;

const codeRounded = `
  <ButtonFacebook
    url="..."
    text="..."
    is-rounded
  />`;
const codeRoundedIcon = `
  <FacebookIcon
    url="..."
    is-rounded
  />`;
const codeCircled = `
  <ButtonFacebook
    url="..."
    text="..."
    is-rounded
  />`;
const codeCircledIcon = `
  <FacebookIcon
    url="..."
    is-rounded
  />`;
</script>
