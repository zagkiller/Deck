import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({

    backLayer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 2,
        flex:1,
        width:'100%',
        height:'100%',
        margin: 0,
    },
    backgroundLayer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 3,
        flex:1,
        width:'100%',
        height:'100%',
        margin: 0,
        backgroundColor: Colors.white,
        opacity:0.5,
    },
    topLevel: {
        marginTop: 100,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.black,
        backgroundColor: Colors.white,
        zIndex: 4,
    },
    inputBlock: {
        marginTop: Metrics.margin3x,
        padding: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.black,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        alignItems: 'center',
    },
    errorBlock: {
        margin: Metrics.margin1x,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        alignItems: 'center',
    },
    buttonBlock: {
        margin: Metrics.margin1x,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleBlock: {
        margin: Metrics.margin1x,
        alignItems: 'center',
    },


})