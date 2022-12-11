import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
//importing screens
import Styles from './styles/styles.app.js';
import AddBook from './screens/addBook.js';
import AddAuthor from './screens/addAuthor.js';

//database
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';





//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
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

  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="author"
       screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="author" component={AddAuthor} />
        <Stack.Screen name="addBook" component={AddBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



