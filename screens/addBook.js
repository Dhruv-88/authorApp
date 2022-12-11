// Screen 1:
// • Text input to get the name of the author
// • A button to add the author
// • A list to show all the authors
// • Clicking on an author redirects to screen 2

//Written by Dhruv


import React, { useState, useEffect } from 'react';
import { Text, View ,TextInput,TouchableOpacity,FlatList,ScrollView,ActivityIndicator} from 'react-native';
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

//styles
import Styles from '../styles/styles.addBook.js'
import Icon from 'react-native-vector-icons/FontAwesome';

//database import 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc} from "firebase/firestore"; 



export default function AddBook ({ route, navigation }){



  //connecting database
  const db = getFirestore();

  //definign Props 
   var books=route.params
   const booksRef = doc(db, "authors", books.id);
  
  //States 
   const [bookName,onChangeBookName]=useState("");
   const [bookPrice,onChangeBookPrice]=useState(null);
   const [error,setError]=React.useState("")
   const [activity,setActivityIndicator]=useState(false)
   const [booksList,setBooks]=useState(books.data.books)
 
   //hook
   useEffect(()=>{
    updateBooks()
   })

  
 
   //functions

   //function to read books list
    const renderBooks=(data)=>{
                    
      return(
              <View
                key={books.id}
                style={Styles.indevidualBookContainer}>

                <View
                  style={Styles.indevidualbookNameContainer}>

                  <Text
                  >
                    BookName :
                  </Text>
                  <Text style={Styles.indevidualbookNameContainerName}>
                    {data.bookName}
                  </Text>
                </View>

                <View
                  style={Styles.indevidualbookPriceContainer}>

                  <Text>
                    {`${data.bookPrice} \u20B9`}
                  </Text>

                </View>

              </View>
            )
    }

    //funtion to update book in data base on clicking add book button
    const updateBooks=async ()=>{
      const booksRe= await getDoc(booksRef)
      books=booksRe
      setBooks(books.data().books)
      console.log(booksList)
     }

     //function to add book 
   const addBook=async ()=>{
      setActivityIndicator(true)
      await updateDoc(booksRef, {
         books: arrayUnion({bookName:bookName,bookPrice:bookPrice})
       });
        setActivityIndicator(false)
        onChangeBookName('')
        onChangeBookPrice(null)
        updateBooks() 
   }

   //function associated with addbook button
   const addBookButtonClick=()=>{
      if(bookName=='' ){
          setError('Plese Enter Book Name')
      }
      else if(bookPrice==null){
        setError('Plese Enter Book Price')
      }
      else{
              setActivityIndicator(true)
              addBook()
              
            }
          }
  
   //main function
    return (
      //activity incdecator
        activity?
        <View 
          style={Styles.activityContainer}>
          <ActivityIndicator
            size="large" 
            color="purple"
            style={Styles.activityIndecator}
          />
       </View>
       :
       //main screen

       //section 1 two inputs and button to add book

       <View 
         style={Styles.container}>

         <View 
           style={{alignSelf:'start'}}>

           <TouchableOpacity 
            style={{marginTop:10}}
            onPress={()=>{
            navigation.goBack();
          }}>

            <Icon
              name="angle-left"
              size={20}
              color="black" />

          </TouchableOpacity>

        </View>

         <View
          style={Styles.bookNameContainer}>
         
          <Text >
            Enter Book Name : 
          </Text>

        </View>

        <View style={Styles.bookNameInputContainer}>

          <TextInput
            value={bookName}
            placeholder={"Enter Book Name "}
            onChangeText={onChangeBookName}
          />

       </View>

       <View style={Styles.bookNameContainer}>

         <Text >
           Enter Book Price : 
         </Text>

       </View>

        <View style={Styles.bookNameInputContainer}>

          <TextInput
            value={bookPrice}
            onChangeText={onChangeBookPrice}
            placeholder={"Enter Book Price "}
            keyboardType='numeric'
          />

        </View>
        
       {
         <View>

           <Text
            style={Styles.errorText}>
              {error}
          </Text>

         </View>
       }  

       {/*section 2 list of all books of author*/}

       <View 
         style={Styles.addBookButtonContainer} >
     
         <TouchableOpacity
           style={Styles.addBookButton}
           onPress={()=>addBookButtonClick ()}
              >

           <Text 
             style={Styles.addBookButtonText}>
             Add Book
           </Text>
          
         </TouchableOpacity>

    </View>

    <View
     style={Styles.publishBookContainer}>

      <View
       style={Styles.publishBookContainerTitle}>
         <Text>Books Published By Author </Text>
      </View>
      
      <View>

         <ScrollView>

           <View>
               {
                 booksList.map(renderBooks)
               }
           </View>

         </ScrollView>

      </View>

    </View>

   </View>
    )
    }

  