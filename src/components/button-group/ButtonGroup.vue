<template>
  <ul class="btn-link-group">
    <li v-if="facebookIcon">
      <FacebookIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :title="title" :url="url" />
    </li>
    <li v-if="whatsappIcon">
      <WhatsappIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :message="message" :url="url" />
    </li>
    <li v-if="telegramIcon">
      <TelegramIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :message="message" :url="url" />
    </li>
    <li v-if="twitterIcon">
      <TwitterIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :title="title" :url="url" />
    </li>
    <li v-if="linkedInIcon">
      <LinkedInIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :url="url" />
    </li>
    <li v-if="redditIcon">
      <RedditIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :title="title" :url="url" />
    </li>
    <li v-if="pinterestIcon">
      <PinterestIcon
        :isRounded="isRounded"
        :isCircled="isCircled"
        :isBordered="isBordered"
        :isAllWhite="isAllWhite"
        :description="description"
        :mediaUrl="mediaUrl"
        :url="url" />
    </li>
    <li v-if="tumblrIcon">
      <TumblrIcon
        :isRounded="isRounded"
        :isCircled="isCircled"
        :isBordered="isBordered"
        :isAllWhite="isAllWhite"
        :title="title"
        :content="content"
        :url="url" />
    </li>
    <li v-if="pocketIcon">
      <PocketIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :title="title" :url="url" />
    </li>
    <li v-if="emailIcon">
      <EmailIcon
        :isRounded="isRounded"
        :isCircled="isCircled"
        :isBordered="isBordered"
        :isAllWhite="isAllWhite"
        :to="to"
        :subject="subject"
        :content="content"
        :url="url" />
    </li>
    <li v-if="copyIcon">
      <CopyIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :url="url" />
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
} from "../icons";

const props = defineProps({
  url: {
    type: String,
    required: true,
    default: "#"
  },
  title: {
    type: String,
    default: ""
  },
  message: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  mediaUrl: {
    type: String,
    default: ""
  },
  to: {
    type: String,
    default: ""
  },
  subject: {
    type: String,
    default: ""
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
  },
  isRounded: {
    type: Boolean,
    default: false
  },
  isCircled: {
    type: Boolean,
    default: false
  },
  isBordered: {
    type: Boolean,
    default: false
  },
  isAllWhite: {
    type: Boolean,
    default: false
  }
});
</script>
