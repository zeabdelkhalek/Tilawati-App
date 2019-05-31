import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
      },
      container : {
          width : '100%' , 
          height : '100%' ,
          flex: 1,
      },
      loading : {
        position : 'absolute' , 
        left : '50%' , 
        top : '50%'
      }
})

export default styles ;
