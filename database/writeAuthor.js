import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
export const addAuthor=async (authorName)=>{
  const db = getFirestore();
      try {
          
          const docRef = await addDoc(collection(db, "authors"), {
          authorName: authorName,
          books:[],
        });
        console.log("Document written with ID: ", docRef.id);
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    
   }