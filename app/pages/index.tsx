import { useFirebase } from "hooks/use-firebase";
import { useEffect, useState } from "react";

import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const firebase = useFirebase();

  const [data, setData] = useState(null);
  const [coordinate, setCoordinate] = useState<any>();

  useEffect(() => {
    Geolocation.getCurrentPosition().then(setCoordinate);

    Geolocation.watchPosition({}, (position, err) => {
      if (err) console.error(err);
      setCoordinate(position);
    });

    firebase
      .firestore()
      .collection("monitor")
      .doc("control")
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setData(snapshot.data());
        }
      });
  }, []);

  const update = () => {
    firebase
      .firestore()
      .collection("monitor")
      .doc("control")
      .update({
        title: document.getElementById("title").innerHTML,
        description: document.getElementById("description").innerHTML,
      });
  };

  if (!data) return null;

  return (
    <div className="max-w-xl px-16 py-16 mx-auto text-center">
      <h1 className="text-2xl font-medium tracking-wider">Remote Controller</h1>

      <p
        id="title"
        contentEditable
        onInput={update}
        className="mt-16 text-4xl font-medium tracking-wider"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />

      <p
        id="description"
        contentEditable
        onInput={update}
        className="mt-2 text-gray-800"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />

      <p>Coordinates on your phone:</p>
      <p>{coordinate?.coords?.longitude}, {coordinate?.coords?.latitude}</p>
    </div>
  );
}
