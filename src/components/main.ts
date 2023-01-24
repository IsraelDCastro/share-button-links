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
  ButtonCopy
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
  }
};

export { ButtonFacebook, ButtonWhatsapp };
