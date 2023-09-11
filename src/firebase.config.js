import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzYS47quVyoabbtnXYPAUQMJ5MsZomZpY",
  authDomain: "testing-9e01a.firebaseapp.com",
  databaseURL: "https://testing-9e01a-default-rtdb.firebaseio.com",
  projectId: "testing-9e01a",
  storageBucket: "testing-9e01a.appspot.com",
  messagingSenderId: "469732704783",
  appId: "1:469732704783:web:186c2ade038b1f9be6197a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
