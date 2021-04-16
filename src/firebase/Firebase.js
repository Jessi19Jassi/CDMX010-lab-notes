import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCmOMyOoJRAGrsP-8z0M_GMvxAMjkkQqac",
    authDomain: "paper-notes-f94f3.firebaseapp.com",
    projectId: "paper-notes-f94f3",
    storageBucket: "paper-notes-f94f3.appspot.com",
    messagingSenderId: "142625086005",
    appId: "1:142625086005:web:ffb7b52e04f8f155f4af7c",
    measurementId: "G-52B2NK2R34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

//Crear colección en Firestore
export const setCollection = async (title,description) => {
  const newNote = {
    title:title,
    description:description
  }
  try{
    const data = await db.collection('notes').add(newNote)
    console.log('Nueva nota creada', data);
  }
  catch(error){
    console.log('Fallo la nueva nota', error);
  }
  }

//Recolecta todos los elementos de los documentos de la colección
export const getNotes = db.collection('notes').get();

export const deleteNotes = async (id) => {
  try{
    await db.collection('notes').doc(id).delete()
  }
  catch(error){
    console.log(error)
  }
}