// Screen 2:
// • Two Inputs
// • Book Name
// • Book Price
// • A button to add the book to the selected author
// • A list to show all the books of the selected author (Name and Price)

//written by Dhruv



import React, { useState, useEffect } from 'react';
import { Text, View,TextInput,TouchableOpacity,ActivityIndicator,ScrollView} from 'react-native';
import { collection, getDocs} from "firebase/firestore"; 
import Icon from 'react-native-vector-icons/FontAwesome';

//styles
import Styles from '../styles/styles.addAuthor.js'

//database functions
import {addAuthor} from '../database/writeAuthor.js'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

//database config 
const firebaseConfig = {
    apiKey: "AIzaSyDCpMoyI89aTykstUV4s5CjXy-mqjhjqRc",
    authDomain: "testapp-e8290.firebaseapp.com",
    projectId: "testapp-e8290",
    storageBucket: "testapp-e8290.appspot.com",
    messagingSenderId: "689025438449",
    appId: "1:689025438449:web:6572e5d910a5e48affcf50"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  

export default function AddAuthor({navigation}) {
  
  //states 
  const [authorName, onAuthorNameChange] = React.useState("");
  const [error,setError]=React.useState("")
  let [authorList,updateAuthorList]=useState([])
  const [activity,setActivityIndicator]=useState(false)
 
  React.useEffect(() => {
    
   
    const unsubscribe = navigation.addListener('focus', () => {
      readAllAuthors()
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  
  //functions

  //function to read list of authors from data set
  const readAllAuthors=async()=>{
    setActivityIndicator(true)
    var arr=[]
    const querySnapshot = await getDocs(collection(db, "authors"))
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      arr=arr.concat([doc])

    });
    setActivityIndicator(false)
    updateAuthorList(arr)    
  }

 //function to render authors from mapping it 
  const renderAuthors=(doc)=>{
    // console.log("-->",doc.id)
    return(
      <View 
       key={doc.id}
       style={Styles.authorNameoutline} >
        <TouchableOpacity onPress={
          ()=>{
                navigation.navigate('addBook',{id:doc.id,data:doc.data()})
              }
        }>
          <Text >{doc.data().authorName}</Text>
        </TouchableOpacity>
      
     </View>
      )
    }


  

  return (
      //activity indecator
      activity
      ?
       <View style={Styles.activityContainer}>
        <ActivityIndicator
          size="large" 
          color="purple"
          style={Styles.activityIndecator}
        />
       </View>
      :

      //Screen 1 Code
      <View style={{flex:1,padding:'10%',backgroundColor:'lightgrey'}}>
       
        {/*section 1 include input and button to add author name*/}

        <View 
          style={{height:'30%'}}>

           <View
            style={Styles.container}>

            <View
              style={Styles.authorNameContainer}>

              <Text>
                Plese Enter Author Name : 
              </Text>
 
            </View>

            <TextInput
              style={Styles.input}
              onChangeText={onAuthorNameChange}
              value={authorName}
              placeholder="Ener Author Name "
            />

          {
          <View>

            <Text style={Styles.errorText}>{error}</Text>
            
          </View>
          }    

            <View 
              style={Styles.addAuthorButtonContainer}
            >
  
             <TouchableOpacity
                style={Styles.addAuthorButton}
                onPress={()=>{
                  if(authorName==''){
                      setError('Plese Enter Valid Name ')
                  }
                  else{
                      setActivityIndicator(true)
                      addAuthor(authorName).then(()=>{
                      onAuthorNameChange('')
                      setError('')
                      setActivityIndicator(false)
                      readAllAuthors()
                    })
                  }
                }}
              >
                <Text 
                  style={Styles.addAuthorButtonText} >
                  Add Author
                </Text>

            </TouchableOpacity>

           </View>
          </View>
         </View>

         {
          //end of Section 1

          //section 2 starts that include button to see all the authors available in data set
         }
         <View
          style={{height:'70%'}}>

           <View 
            style={Styles.innerContainer}>
             <View style={Styles.authorListTitle}>
              <Text style={Styles.authorListTitleText}>
                List Of All Authors 
              </Text>
             </View>
            {
              
            }
            <View 
             style={{height:'90%'}}>

              <ScrollView>

                <View 
                 style={{marginTop:10}}>

                    {
                      authorList.length==0
                      ?
                      <View style={{height:100,justifyContent:'center',alignItems:'center'}}>
                        <Icon
                          name="user-times"
                          size={40}
                          color="purple" />
                        <Text> No Authors Available </Text>
                      </View>
                      :
                      authorList.map(renderAuthors)
                    }

                </View>

              </ScrollView>

            </View>

          </View>

        </View>

      </View>
   );
  }
  