import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.elements,

    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    buttons: {
        marginTop: 20,
        marginLeft: Metrics.margin2x,
        marginRight: Metrics.margin2x,
        flex: 1,
        justifyContent: 'space-between'
    },

})
