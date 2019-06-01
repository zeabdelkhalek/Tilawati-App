import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor : Colors.white ,
    flexDirection: 'row-reverse',
  },
  textContainer : {
    width : '60%' ,
    marginRight: 10,
  } , 
  author : {
		fontFamily : 'Janna LT Bold',
    fontSize : 16 
  },
  cardContainer :{
    marginTop : 2,
    marginBottom: 2, 
  }
})
