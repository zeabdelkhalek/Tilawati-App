import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

const styles = StyleSheet.create({
    inputStyle : {
        textAlign : 'right' 
    },
    searchStyle : {
        flexDirection : 'row-reverse'
    } , 
    searchBarContainer : {
        padding : 10 , 
        backgroundColor: Colors.primary,
    }
})

export default styles ;
