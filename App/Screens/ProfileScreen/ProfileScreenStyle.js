import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.elements,

    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    body: {
        marginTop: 30,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        flex: 1,
        justifyContent: 'space-between'
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    galka: {
        height: 40,
        width: 40,
        lineHeight: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.black
    },
})
