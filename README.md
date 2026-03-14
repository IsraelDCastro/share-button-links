# Share Button Links

Vue 3 share buttons for websites, blogs, docs and landing pages.

## Installation

```bash
npm install share-button-links
```

or

```bash
yarn add share-button-links
```

## Exports

The package root exports the library styles and all public components.

### Buttons

```ts
import {
  ButtonCopy,
  ButtonEmail,
  ButtonFacebook,
  ButtonLinkedIn,
  ButtonPinterest,
  ButtonPocket,
  ButtonReddit,
  ButtonTelegram,
  ButtonTumblr,
  ButtonTwitter,
  ButtonWhatsapp
} from "share-button-links";
```

### Icon Buttons

```ts
import {
  CopyIcon,
  EmailIcon,
  FacebookIcon,
  LinkedInIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon
} from "share-button-links";
```

### Button Group

```ts
import { ButtonGroupIcons } from "share-button-links";
```

You can also import submodules directly if you prefer:

```ts
import { ButtonFacebook } from "share-button-links/components/buttons";
import { FacebookIcon } from "share-button-links/components/icons";
import ButtonGroupIcons from "share-button-links/components/button-group";
```

## Styles

The package ships with compiled CSS and the original SCSS entry.

```css
@import "share-button-links/dist/share-button-links.css";
```

```scss
@use "share-button-links/dist/share-button-links.scss";
```

## Basic Usage

```vue
<script setup lang="ts">
import { ButtonFacebook, TwitterIcon, ButtonGroupIcons } from "share-button-links";
</script>

<template>
  <ButtonFacebook
    url="https://example.com/article"
    title="A shareable article"
    text="Facebook"
    has-icon
    is-rounded
  />

  <TwitterIcon
    url="https://example.com/article"
    title="A shareable article"
    is-circled
  />

  <ButtonGroupIcons
    url="https://example.com/article"
    title="A shareable article"
    message="Take a look at this"
    description="Reusable Vue share buttons"
    media-url="https://example.com/cover.png"
    content="Extra text for Tumblr or email"
    subject="Check this out"
    is-rounded
    facebook-icon
    twitter-icon
    telegram-icon
    whatsapp-icon
    copy-icon
  />
</template>
```

## Shared Props

Most button components support:

- `isRounded?: boolean`
- `isCircled?: boolean`
- `isBordered?: boolean`

Text buttons also support:

- `hasIcon?: boolean`

Icon buttons also support:

- `isAllWhite?: boolean`
- `isWhited?: boolean`

## Copy Button Props

`ButtonCopy` and `CopyIcon` support copying a URL and show live feedback after success.

Common props:

- `url: string`
- `text?: string` for `ButtonCopy`
- `hasIcon?: boolean` for `ButtonCopy`

## Network-Specific Props

Some components require extra data depending on the destination:

- `title` for Facebook, Twitter, Reddit, Pocket and Tumblr.
- `message` for WhatsApp and Telegram.
- `description` and `mediaUrl` for Pinterest.
- `to`, `subject` and `content` for Email.
- `content` for Tumblr.

## Accessibility Contract

- Icon-only components expose an `aria-label` and keep decorative SVGs hidden from screen readers.
- Copy components expose success feedback through `aria-live="polite"`.
- Interactive controls keep native semantics with `<a>` or `<button type="button">`.
- Focus styling is visible through `:focus-visible`.

## Local Development

```bash
npm run dev
```

Useful commands:

- `npm run build` builds the library bundles.
- `npm run preview` serves the local production build.
- `npm run test:unit` runs the unit tests.
- `npm run lint` runs ESLint with auto-fix.
- `npm run size:report` prints the bundle size report.

## Notes

- `ButtonLine.vue` is legacy and is not part of the public API exports.
- Most SVG icons come from [Bootstrap Icons](https://icons.getbootstrap.com/) and [Tabler Icons](https://tablericons.com/).

## Documentation

Docs site: [share-button-links.netlify.app](https://share-button-links.netlify.app/)
