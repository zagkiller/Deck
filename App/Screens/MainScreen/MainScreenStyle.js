import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.elements,

    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'space-between'
    },
    buttons: {
        marginTop: 20,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        flex: 1,
        justifyContent: 'space-between'
    },
    buttonBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 220,
    },
    inputBlock: {
        marginTop: 120,
        padding: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.black,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 200,
        backgroundColor: Colors.white,
        opacity:1,
        zIndex: 4,
    },
    layer: {
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
    }

})
