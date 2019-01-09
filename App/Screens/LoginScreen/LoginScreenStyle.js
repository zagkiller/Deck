import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.elements,

    container: {
        flex: 1,
        margin: Metrics.margin4x,
    },
    auth: {
        flex: 1,
        margin: Metrics.doubleMargin,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    error: {
        height: 32,
    },
    space32: {
        height: 32,
    },
    space16: {
        height: 16,
    },

})
