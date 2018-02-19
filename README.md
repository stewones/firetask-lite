# Firetask Lite

> Firetask Lite is a pretty good start point for beginners. It's design and features are based on the open-source project [TodoMVC](https://github.com/tastejs/todomvc), but written on top of latest Ionic/Angular frameworks as well as Firebase.

# Requirement

- Node v7.1.0+
- NPM 3.10.9+
- Ionic CLI 3.19.1+

# Setup

- `git clone https://github.com/stewwan/firetask-lite.git`
- `cd firetask-lite`
- `npm install`
- `ionic serve`

# Before starting

1. Rename the file `src/configs/firebase.blank.ts` to `firebase.ts` with your own config
2. Add public read/write rules to database on the path `/todos`
3. Add your `google-services.json` and/or `GoogleService-Info.plist` files to the root
4. Link your ionic pro account by running `ionic link --pro-id 123_your_id_456`
5. Change the `APP_ID` of `cordova-plugin-ionic` from `package.json` and `config.xml`
6. Add the platform
7. Check for content existance of google services config file on the platform. eg: if `platforms/ios/Firetask Lite/Resources/Resources/GoogleService-Info.plist` file is blank or not fully filled, copy and paste the content from root to there.

# Features

- [x] Pages lazy loaded
- [x] Tabs
- [x] Components
- [x] Providers
- [x] Pipes
- [x] Ionic pro
- [x] Ionic live deploy
- [x] Firebase database
- [x] Firebase analytics    

<img src="https://i.imgur.com/4NeWt3r.png" alt="Ionic Firebase Todo App" />


# Contributting

PR's are always welcome. Please check out the [contributing](https://github.com/stewwan/firetask-lite/blob/master/CONTRIBUTING.md) guideline.

# Store

Firetask Lite is available on both Apple Store and Google Play

# Wants more?

Try out our [Firetask Classic](https://firetask.io) version


# License

MIT. Created by [Stewan Pacheco](https://stewan.io)