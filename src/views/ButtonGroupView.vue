<template>
  <div>
    <div class="wrapper">
      <Navbar />
      <div class="md:container">
        <div id="installation" class="p-8">
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
        <hr class="mx-8 my-2" />
        <div class="p-8">
          <p>
            All buttons shared similar or same props as one. To check which button has an specific o share prop, please check information below for
            more knowledge.
          </p>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="p-5">
              <h5 class="mb-2 font-medium">Props:</h5>
              <p class="mb-5">All these props below are type String, and default value is empty.</p>
              <ul class="pl-8 mb-4 list-disc">
                <li>
                  <p>
                    <strong class="text-lg">url, and isRounded</strong>
                    : All buttons accept url prop to share o copy url.
                  </p>
                </li>
                <li>
                  <p>
                    <strong class="text-lg">title</strong>
                    : Only
                    <span class="text-blue-500">Facebook, Twitter, Reddit, Tumblr, and Pocket</span>
                    accept this prop.
                  </p>
                </li>
                <li>
                  <p>
                    <strong class="text-lg">message</strong>
                    : Only
                    <span class="text-blue-500">WhatsApp, and Telegram</span>
                    accept this prop.
                  </p>
                </li>
                <li>
                  <p>
                    <strong class="text-lg">content</strong>
                    : Only
                    <span class="text-blue-500">Tumblr, and Email</span>
                    accept this prop.
                  </p>
                </li>
                <li>
                  <p>
                    <strong class="text-lg">description and mediaUrl</strong>
                    : Only
                    <span class="text-blue-500">Pinterest</span>
                    accept this prop.
                  </p>
                </li>
                <li>
                  <p>
                    <strong class="text-lg">subject, and to</strong>
                    : Only
                    <span class="text-blue-500">Email button</span>
                    accept this prop.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div class="p-5">
                <h5 class="mb-2 font-medium">Buttons:</h5>
                <p class="mb-5">
                  To add or active the button just use the props
                  <span class="text-blue-500">
                    facebookIcon, whatsappIcon, telegramIcon, twitterIcon, linkedInIcon, redditIcon, pinterestIcon, tumblrIcon, pocketIcon, emailIcon,
                    and copyIcon
                  </span>
                  . All this props are type boolean.
                </p>
                <ButtonGroupIcons
                  facebookIcon
                  whatsappIcon
                  telegramIcon
                  twitterIcon
                  linkedInIcon
                  redditIcon
                  pinterestIcon
                  tumblrIcon
                  pocketIcon
                  emailIcon
                  copyIcon
                  isRounded
                  url="https://www.youtube.com/watch?v=3_mCcDIOWCw"
                />
              </div>

              <h5 class="mt-4 mb-2 font-medium">All icons are white.</h5>
              <div class="p-5 rounded bg-primary-700">
                <ButtonGroupIcons
                  facebookIcon
                  whatsappIcon
                  telegramIcon
                  twitterIcon
                  linkedInIcon
                  redditIcon
                  pinterestIcon
                  tumblrIcon
                  pocketIcon
                  emailIcon
                  copyIcon
                  isRounded
                  isAllWhite
                  url="https://www.youtube.com/watch?v=3_mCcDIOWCw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/layouts/Navbar.vue";
import Code from "@/examples/Code.vue";
import ButtonGroupIcons from "@/components/button-group";

const code = `
    import ButtonGroup from 'share-button-links/components/button-group';`;
</script>
