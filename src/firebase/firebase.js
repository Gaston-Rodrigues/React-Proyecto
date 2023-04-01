import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCsLobluNOCGFQc5JnEO7yVECjQJ-Rza0I",
  authDomain: "vision-gamer.firebaseapp.com",
  projectId: "vision-gamer",
  storageBucket: "vision-gamer.appspot.com",
  messagingSenderId: "962300430190",
  appId: "1:962300430190:web:0b6c56de62d7a521cca37f"

}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const collectionProducts = collection(db, 'products');
export const orders = collection(db, 'orders');

export const getItemsFromDb = (db, func1, func2) => {
  getDocs(db)
    .then((res) => {
      const getProducts = res.docs.map((product) => {
        const aux = product.data();
        aux.id = product.id;
        return aux;
      });
      func1(getProducts);
      func2(false);
    })
    .catch((err) => console.log(err));
};
