# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Text Editor.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

To get started, you can install it with:

::: code-group

```sh [npm]
$ npm i @healerlab/device-js
```

```sh [pnpm]
$ pnpm add @healerlab/device-js
```

```sh [yarn]
$ yarn add @healerlab/device-js
```

:::


## Usage
Add it to your file or component:

```js
import { detectDevice } from '@healerlab/device-js'
```

or

```js
import pkg from '@healerlab/device-js';
const { detectDevice } = pkg;
```

That's it, you can now use `detectDevice` in your app ✨

## Flags

You can use these flags to detect the device type.

```js
detectDevice.isDesktop
detectDevice.isMobile
detectDevice.isTablet
detectDevice.isMobileOrTablet
detectDevice.isDesktopOrTablet
detectDevice.isIos
detectDevice.isWindows
detectDevice.isMacOS
detectDevice.isApple
detectDevice.isAndroid
detectDevice.isFirefox
detectDevice.isEdge
detectDevice.isChrome
detectDevice.isSafari
detectDevice.isSamsung
detectDevice.isCrawler
detectDevice.userAgent
```

The user agent is also injected an accessible with `detectDevice.userAgent`.

## Usage

### Vue, React, Angular

You can use detectDevice inside a `script` to access the flags.

```js
<script setup>
import { detectDevice } from '@healerlab/device-js'
</script>
```

### Switch a view

```html
<template>
  <section>
    <div v-if="detectDevice.isDesktop">
      Desktop
    </div>
    <div v-else-if="detectDevice.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
</template>
```

## CloudFront Support

If the `user-agent` is `Amazon CloudFront`, this module checks the following headers :  

- `CloudFront-Is-Mobile-Viewer`
- `CloudFront-Is-Tablet-Viewer`
- `CloudFront-Is-Desktop-Viewer`
- `CloudFront-Is-Ios-Viewer`
- `CloudFront-Is-Android-Viewer`

Here are the details about the headers:  
[Amazon CloudFront - Headers for determining the viewer's device type
](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html#cloudfront-headers-device-type)  

### Caution

`isWindows` and `isMacOS` flags are not available with CloudFront.

## Cloudflare Support

This module checks the header `CF-Device-Type`.

Here are the details about the header:
https://support.cloudflare.com/hc/en-us/articles/229373388-Cache-Content-by-Device-Type-Mobile-Tablet-Desktop-

## Data Source

This module uses [crawler-user-agents](https://github.com/monperrus/crawler-user-agents) to generate the regular expression that detect a crawler.

## Note
This module inspired by [@nuxtjs/device](https://github.com/nuxt-modules/device) module
