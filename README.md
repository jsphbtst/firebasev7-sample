# Getting Started with Create React App

Make sure to install all dependencies first by running:

```
yarn install
```

After which, to start the application in development mode:

```
yarn start
```

To create a production build:

```
yarn build
```

This opens up the application at localhost:3000.

WE'RE USING FIREBASE v7.2.0 HERE, NOT THE LATEST v9. The library `react-firebase-hooks` has not refactored yet for the v9 launch. I opted to use `react-firebase-hooks` here to make it easier to implement sign in and sign up. Else, you can refer to [this repository](https://github.com/jsphbtst/apper-firebaseauth-sample) for a complete DIY in terms of using firebase. That sample uses firebase v8.6.1, which should still be close enough to v9 for it to work.

Don't forget to create a `.env` file and populate it with you firebase config variables:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=
```

- Go to [Firebase](https://console.firebase.google.com)
- Add Project (you decide if you want to enable Google Analytics or not)
- Click on `Authentication` and then `Get Started`
- Click on `Email/Password` and toggle `Enable`
- Click `Project Overview` and click the `</>` symbol
- Fill in web app nickname nad proceed
- ???
- Profit
