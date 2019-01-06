import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...ApplicationStyles.elements,

    container: {
        flex: 1,
        margin: Metrics.doubleMargin,
        backgroundColor: '#0f0'
    },
    auth: {
        flex: 1,
        margin: Metrics.doubleMargin,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#0f0'
    },

})
