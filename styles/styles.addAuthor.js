import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: '10%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'lightgrey',
    flex:1
  },
  authorNameContainer:{
    alignSelf:'start',
    justifyContent:'start',
    
    
  },
  addAuthorButton:{
    backgroundColor:'purple',
    borderRadius:4,
    width:'40%',
    height:30,
    justifyContent:'center'
    
  },
  addAuthorButtonContainer:{
     flexDirection: 'row',
     justifyContent: 'flex-end',
     width:'100%',
     marginTop:20
  },
  addAuthorButtonText:{
    alignSelf:'center',
    color:'white'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius:4,
    padding: 10,
    width:'80%',
    alignSelf:'left',
    marginTop:10
  },
  activityIndecator:{
    alignSelf:'center'
  },
  activityContainer:{
    flex:1,
    justifyContent:'center'
  },
  errorText:{
    color:'red',
    marginTop:5
  },
  authoresContainer:{
    width:'100%',
   
    justifyContent:'center',
    alignItems:'center'
  },
  innerContainer:{
    width:'100%',
    marginTop:30,
    
  },
  seeallAuthorButton:{
  backgroundColor:'purple',
  width:'50%',
  justifyContent:'center',
  alignItems:'center',
  height:30,
  borderRadius:4
},
authorNameoutline:
{
  height:50,
  borderWidth:1,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  borderRadius:4
}

});