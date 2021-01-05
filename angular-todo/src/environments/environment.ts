// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,

  firebase :{
    apiKey: "AIzaSyB2RKYFwIBs5BJ5hH-9xjrCKoML1bU_yWs",
    authDomain: "todo-app-e17ba.firebaseapp.com",
    databaseURL: "https://todo-app-e17ba-default-rtdb.firebaseio.com",
    projectId: "todo-app-e17ba",
    storageBucket: "todo-app-e17ba.appspot.com",
    messagingSenderId: "259113951036",
    appId: "1:259113951036:web:7aed9ec26980bcf33dc839",
    measurementId: "G-WD6673W1BE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
