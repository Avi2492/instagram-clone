import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDoka9p9sHUSD8Wre0Dez-xCiwZ_NsFKvs",
        authDomain: "social-media-app-7ef42.firebaseapp.com",
        projectId: "social-media-app-7ef42",
        storageBucket: "social-media-app-7ef42.appspot.com",
        messagingSenderId: "829537584718",
        appId: "1:829537584718:web:de4e5995e563e04ab1e51f",
        measurementId: "G-8PVDHBKGWF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
