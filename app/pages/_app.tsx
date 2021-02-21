import React from "react";

import "styles/tailwind.base.css";
import "styles/tailwind.components.css";

import "styles/globals.css";

import "styles/tailwind.utilities.css";

import { ProvideFirebase } from "../hooks/use-firebase";

export default function App({ Component, pageProps }) {
  return (
    <ProvideFirebase
      config={{
        apiKey: "AIzaSyDXu15_X_aXUNcVJCEyJCb_6hvFlypD-5M",
        authDomain: "remote-controller-318a2.firebaseapp.com",
        projectId: "remote-controller-318a2",
        storageBucket: "remote-controller-318a2.appspot.com",
        messagingSenderId: "621074482918",
        appId: "1:621074482918:web:9cd2d1eca143aa49bd9d27",
        measurementId: "G-415ZP9YM0F",
      }}
      firestore
    >
      <Component {...pageProps} />
    </ProvideFirebase>
  );
}
