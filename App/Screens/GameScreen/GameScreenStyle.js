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
        marginBottom: 16,
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
    avatar: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: Colors.black
    },
})
