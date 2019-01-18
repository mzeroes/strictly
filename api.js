// eslint-disable-next-line import/order
import firebase from "firebase";
import { firebaseConfig } from "./key";

firebase.initializeApp(firebaseConfig);

export default firebase;
