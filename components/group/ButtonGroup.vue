<template>
  <ul>
    <li v-if="facebookIcon">
      <FacebookIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="whatsappIcon">
      <WhatsappIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="twitterIcon">
      <TwitterIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="linkedInIcon">
      <LinkedInIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="redditIcon">
      <RedditIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="pinterestIcon">
      <PinterestIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="tumblrIcon">
      <TumblrIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="pocketIcon">
      <PocketIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="emailIcon">
      <EmailIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
    <li v-if="copyIcon">
      <CopyIcon
        :isRounded="isRounded"
        :url="url"
      />
    </li>
  </ul>
</template>

<script setup>
  import {
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    LinkedInIcon,
    RedditIcon,
    PinterestIcon,
    TumblrIcon,
    PocketIcon,
    EmailIcon,
    CopyIcon
  } from '../icons';

  const props = defineProps({
    url: {
      type: String,
      required: true,
      default: '#'
    },
    isRounded: {
      type: Boolean,
      default: false
    },
    facebookIcon: {
      type: Boolean,
      default: false
    },
    whatsappIcon: {
      type: Boolean,
      default: false
    },
    twitterIcon: {
      type: Boolean,
      default: false
    },
    linkedInIcon: {
      type: Boolean,
      default: false
    },
    redditIcon: {
      type: Boolean,
      default: false
    },
    pinterestIcon: {
      type: Boolean,
      default: false
    },
    tumblrIcon: {
      type: Boolean,
      default: false
    },
    pocketIcon: {
      type: Boolean,
      default: false
    },
    emailIcon: {
      type: Boolean,
      default: false
    },
    copyIcon: {
      type: Boolean,
      default: false
    }
  })
</script>