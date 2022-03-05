<template>
  <ul class="btn-link-group">
    <li v-if="facebookIcon">
      <FacebookIcon
        :isRounded="isRounded"
        :title="title"
        :url="url"
      />
    </li>
    <li v-if="whatsappIcon">
      <WhatsappIcon
        :isRounded="isRounded"
        :message="message"
        :url="url"
      />
    </li>
    <li v-if="telegramIcon">
      <TelegramIcon
        :isRounded="isRounded"
        :message="message"
        :url="url"
      />
    </li>
    <li v-if="twitterIcon">
      <TwitterIcon
        :isRounded="isRounded"
        :title="title"
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
        :title="title"
        :url="url"
      />
    </li>
    <li v-if="pinterestIcon">
      <PinterestIcon
        :isRounded="isRounded"
        :description="description"
        :mediaUrl="mediaUrl"
        :url="url"
      />
    </li>
    <li v-if="tumblrIcon">
      <TumblrIcon
        :isRounded="isRounded"
        :title="title"
        :content="content"
        :url="url"
      />
    </li>
    <li v-if="pocketIcon">
      <PocketIcon
        :isRounded="isRounded"
        :title="title"
        :url="url"
      />
    </li>
    <li v-if="emailIcon">
      <EmailIcon
        :isRounded="isRounded"
        :to="to"
        :subject="subject"
        :content="content"
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
    CopyIcon,
    TelegramIcon
  } from '../icons';

  const props = defineProps({
    url: {
      type: String,
      required: true,
      default: '#'
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    mediaUrl: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    subject: {
      type: String,
      default: ''
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
    telegramIcon: {
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