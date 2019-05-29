import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

const styles = StyleSheet.create({
  container: {
    flex : 1,
    height : '100%',
    width : '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection : 'column', 
  },
  loginContainer : {
    // flex : 2 , 
    width : '80%' ,
    // justifyContent : 'space-between' , 
    alignItems : 'center' ,
    flexDirection : 'column', 
  },
  logoContainer : {
    marginTop : 30 ,
    // flex : 1 , 
  },
  footerContainer : {
    // flex : 1 , 
  },
  inputContainer : {
    marginTop : 10 ,
    flexDirection: 'row',
    justifyContent : 'space-around',
    alignItems: 'center',
    width : '100%' ,
    height : 50 , 
  },
  forget : {
    marginTop : 10 ,
    height: 50 , 
    textAlign : 'left' ,
    flexDirection : 'row' ,
    justifyContent : 'flex-start' ,
    width : '100%' ,
  },
  button : {
    width : '100%' ,
  },
  icon : {
    marginTop: 19, 
  },
  input : {
    fontSize : 16 ,
    backgroundColor : 'transparent' ,
    textAlign : 'right' ,
    width : '85%' ,
    height : 45 ,
  },
  smallInput : {
    fontSize : 16 ,
    backgroundColor : 'transparent' ,
    textAlign : 'right' ,
    width : '40%' ,
    height : 45 ,
  },
  errorMessage : {
    color : '#123456' ,
    fontSize : 50 
  }
})

export default styles ;
