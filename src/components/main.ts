import type { App } from "vue";
import {
  ButtonFacebook,
  ButtonWhatsapp,
  ButtonTelegram,
  ButtonTwitter,
  ButtonLinkedIn,
  ButtonReddit,
  ButtonPinterest,
  ButtonTumblr,
  ButtonPocket,
  ButtonEmail,
  ButtonCopy,
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
  TelegramIcon,
  ButtonGroupIcons
} from "@/components";

export default {
  install: (app: App) => {
    app.component("ButtonFacebook", ButtonFacebook);
    app.component("ButtonWhatsapp", ButtonWhatsapp);
    app.component("ButtonTelegram", ButtonTelegram);
    app.component("ButtonTwitter", ButtonTwitter);
    app.component("ButtonLinkedIn", ButtonLinkedIn);
    app.component("ButtonReddit", ButtonReddit);
    app.component("ButtonPinterest", ButtonPinterest);
    app.component("ButtonTumblr", ButtonTumblr);
    app.component("ButtonPocket", ButtonPocket);
    app.component("ButtonEmail", ButtonEmail);
    app.component("ButtonCopy", ButtonCopy);
    app.component("FacebookIcon", FacebookIcon);
    app.component("WhatsappIcon", WhatsappIcon);
    app.component("TwitterIcon", TwitterIcon);
    app.component("LinkedInIcon", LinkedInIcon);
    app.component("RedditIcon", RedditIcon);
    app.component("PinterestIcon", PinterestIcon);
    app.component("TumblrIcon", TumblrIcon);
    app.component("PocketIcon", PocketIcon);
    app.component("EmailIcon", EmailIcon);
    app.component("CopyIcon", CopyIcon);
    app.component("TelegramIcon", TelegramIcon);
    app.component("ButtonGroupIcons", ButtonGroupIcons);
  }
};

export {
  ButtonFacebook,
  ButtonWhatsapp,
  ButtonTelegram,
  ButtonTwitter,
  ButtonLinkedIn,
  ButtonReddit,
  ButtonPinterest,
  ButtonTumblr,
  ButtonPocket,
  ButtonEmail,
  ButtonCopy,
  ButtonGroupIcons
};
