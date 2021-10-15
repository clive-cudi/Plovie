import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { getFirestore} from 'firebase/firestore';
// import { collection, addDoc } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCPdM912-x4ASffULPljmCJ4w2F_1mbIkk",

  authDomain: "netflix-clone-plug.firebaseapp.com",

  projectId: "netflix-clone-plug",

  storageBucket: "netflix-clone-plug.appspot.com",

  messagingSenderId: "679482258420",

  appId: "1:679482258420:web:1e5db3c7dcf331bd07bfa1",

  measurementId: "G-80T0GJEL79",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {db};