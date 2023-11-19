# @healerlab/device-js

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Standard JS][standard-js-src]][standard-js-href]

### Available for Javascript, Typescript, Vue, React and Angular

## Setup
```bash
npm i @healerlab/device-js
```

with pnpm:

```bash
pnpm add @healerlab/device-js
```

with yarn:

```bash
yarn add @healerlab/device-js
```

Add it to your file or component:

```js
import { detectDevice } from '@healerlab/device-js'
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

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@healerlab/device-js.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@healerlab/device-js

[npm-downloads-src]: https://img.shields.io/npm/v/@healerlab/device-js/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@healerlab/device-js

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/device-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/device-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/device-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/device-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

[license-src]: https://img.shields.io/npm/l/@healerlab/device-js.svg?style=flat-square
[license-href]: https://npmjs.com/package/@healerlab/device-js

## Data Source

This module uses [crawler-user-agents](https://github.com/monperrus/crawler-user-agents) to generate the regular expression that detect a crawler.

## Note
This module inspired by [@nuxtjs/device](https://github.com/nuxt-modules/device) module