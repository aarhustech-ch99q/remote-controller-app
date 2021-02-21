import { useFirebase } from "hooks/use-firebase";
import { useEffect, useState } from "react";

export default function Monitor() {
  const firebase = useFirebase();

  const [data, setData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    firebase
      .firestore()
      .collection("monitor")
      .doc("control")
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          setData(snapshot.data());
          setLastUpdate(Date.now());
        }
      });
  }, []);

  if (!data) return null;

  return (
    <div className="max-w-xl mx-auto my-32 text-center">
      <h1
        className="text-4xl font-medium tracking-wider"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <p
        className="mt-2 text-gray-800"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      <p className="mt-8 text-sm text-gray-600">
        This page is automaticity updated from firestore.
        <br />
        Last updated: {new Date(lastUpdate).toUTCString()}
      </p>
    </div>
  );
}
