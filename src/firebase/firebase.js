/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc,getDoc, getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdHnRdfNQ0mYlR4nZHLxxUFKX69DzCaMs",
  authDomain: "coderhouse-ecomers.firebaseapp.com",
  projectId: "coderhouse-ecomers",
  storageBucket: "coderhouse-ecomers.appspot.com",
  messagingSenderId: "182178014278",
  appId: "1:182178014278:web:8bfae4393a319d19ea1647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance and functions
export { db, collection, getDocs, query, where };

export async function getProducts() {
  const response = await getDocs(collection(db, 'products'));
  const listaProds = [];
  response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
  return listaProds;
}

export async function filterProdsByCategoria(categoria) {
  const q = query(collection(db, 'products'), where('category', '==', categoria));
  const response = await getDocs(q);
  const listaFiltro = [];
  response.forEach((docu) => listaFiltro.push({ id: docu.id, ...docu.data() }));
  return listaFiltro;
}

export async function getProductView(id) {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return [{ id: docSnap.id, ...docSnap.data() }];
    } else {
      console.log('No such document!');
      return [];
    }
  } catch (error) {
    console.error('Error fetching product view:', error);
    return [];
  }
}

 //Orden de pedido
 export const addOrder = async (order) => {
  const orderCollection = collection(db, 'orders');
  const docRef = await addDoc(orderCollection, order);
  return docRef.id;
};

