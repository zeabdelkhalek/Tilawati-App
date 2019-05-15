# Tilawati-App

# Getting started 

1 - Install React Native as described at [React Native Website](https://facebook.github.io/react-native/docs/getting-started.html#content)
**React Native CLI Quickstart section**

2 - Clone this repository

3 - Run `npm install` , all required components will be installed automatically

4 - Run your project : use `react-native run-android` to run your project on Android.
<!-- 
# Development guide 

- Work on the **Dev Branch** 

- switch to **Dev Branch** by running this command :  `git checkout dev`

- push all modifications to dev branch : `git push origin dev` -->

# Folder Structure 

The Tilawati-App structure will look similar to this:


```
Tilawati-App
├── App
│   ├── Components
│   ├── Screens
│   ├── Images
│   ├── Navigation
│   ├── Services
│   ├── Themes
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
└── package.json
```

## App directory
The inside of the App directory looks similar to the following:

```
App
├── Components
│   └── Styles
├── Screens
│   └── Styles
├── Images
├── Navigation
│   └── Styles
├── Services
├── Themes
```

**Components** : These components are often used inside a "Screen Component". Screen components are described in more detail further on.

**Components ── Styles** : We separate component styles from component functionality. Use this folder to create and store style files that match the naming of your components. For example, a component `AlertMessage.js` would have a matching styles file called `AlertMessageStyles.js` .

**Screens**

**Images**
Static images used in your project are stored here.

**Navigation**

**Services**
API calls to external services.

**Themes**
A place to contain styles shared across your project (fonts, colors, etc.).
