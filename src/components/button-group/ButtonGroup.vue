<template>
  <ul class="btn-link-group">
    <li v-if="facebookIcon">
      <FacebookIcon :isRounded="props.isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :title="title" :url="url" />
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
        :url="url"
      />
    </li>
    <li v-if="tumblrIcon">
      <TumblrIcon
        :isRounded="isRounded"
        :isCircled="isCircled"
        :isBordered="isBordered"
        :isAllWhite="isAllWhite"
        :title="title"
        :content="content"
        :url="url"
      />
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
        :url="url"
      />
    </li>
    <li v-if="copyIcon">
      <CopyIcon :isRounded="isRounded" :isCircled="isCircled" :isBordered="isBordered" :isAllWhite="isAllWhite" :url="url" />
    </li>
  </ul>
</template>

<script setup lang="ts">
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

interface DefaultProps {
  url: string;
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
  isAllWhite?: boolean;
  title?: string;
  message?: string;
  content?: string;
  description?: string;
  mediaUrl?: string;
  to?: string;
  subject?: string;
  facebookIcon?: boolean;
  whatsappIcon?: boolean;
  telegramIcon?: boolean;
  twitterIcon?: boolean;
  linkedInIcon?: boolean;
  redditIcon?: boolean;
  pinterestIcon?: boolean;
  tumblrIcon?: boolean;
  pocketIcon?: boolean;
  emailIcon?: boolean;
  copyIcon?: boolean;
}

const props = withDefaults(defineProps<DefaultProps>(), {
  url: "#",
  isRounded: false,
  isCircled: false,
  isBordered: false,
  isAllWhite: false,
  title: "",
  message: "",
  content: "",
  description: "",
  mediaUrl: "",
  to: "",
  subject: "",
  facebookIcon: false,
  whatsappIcon: false,
  telegramIcon: false,
  twitterIcon: false,
  linkedInIcon: false,
  redditIcon: false,
  pinterestIcon: false,
  tumblrIcon: false,
  pocketIcon: false,
  emailIcon: false,
  copyIcon: false
});
</script>
