import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        padding: '10%',
        alignItems:'center',
        paddingTop:'10%',
        backgroundColor: 'lightgrey',
        flex:1
    },
    bookNameContainer:{
        alignSelf:'start',
        justifyContent:'start',
        marginTop:20
    },
    bookNameInputContainer:{
        alignSelf:'start',
        justifyContent:'start',
        borderWidth:1,
        width:'80%',
        height:40,
        justifyContent:'center',
        padding:10,
        marginTop:10,
        borderRadius:4
    },
    bookNameInnnerContainer:{
        width:'100%',
        borderWidth:1
    },
    addBookButton:{
        backgroundColor:'purple',
        borderRadius:4,
        width:'40%',
        height:30,
        justifyContent:'center',
        marginTop:20
        
      },
      addBookButtonContainer:{
         flexDirection: 'row',
         justifyContent: 'flex-end',
         width:'100%',
         
      },
      addBookButtonText:{
        alignSelf:'center',
        color:'white'
      },
      errorText:{
        color:'red',
        marginTop:5
      },

      //publih book section

      publishBookContainer:{
        width:'100%',
        marginTop:'10%',
        justifyContent:'center'
      },
      publishBookContainerTitle:{
        alignItems:'center',
        borderWidth:1,
        height:40,
        width:'100%',
        justifyContent:'center'
      },
      indevidualBookContainer:{
        borderWidth:1,
        marginTop:10,
        borderRadius:4,
        display:'flex',
        flexDirection:'row',
        height:80
      },
      indevidualbookNameContainer:{
        width:'80%',
        justifyContent:'center',
        padding:10,
        
      },
      indevidualbookNameContainerName:{
        fontWeight:'bold',
        fontSize:15
      },
      indevidualbookPriceContainer:{
        width:'20%',
        justifyContent:'cetnter',
        alignSelf:'center'
      },
      activityIndecator:{
        alignSelf:'center'
      },
      activityContainer:{
        flex:1,
        justifyContent:'center'
      },

})