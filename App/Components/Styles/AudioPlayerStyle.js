import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    playChip : {
        backgroundColor: Colors.primary , 
        color : '#fff' , 
        marginLeft : 8 ,
        width : 70 , 
        marginTop : 12 ,
        marginBottom : 12 ,
        alignSelf : 'flex-end'
    },
    audioPlayerContainer : {
        flexDirection : 'row' , 
        width : '100%' ,
        justifyContent: 'space-around',
    },
    progressBar :{
        width : '60%' , 
    },
})
