import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles} from '../../Themes'

export default StyleSheet.create({

    coreBotton: {
        height: 36,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: Metrics.margin1x,
        paddingRight: Metrics.margin1x,
        marginLeft: Metrics.margin1x,
        marginRight: Metrics.margin1x,
        borderColor: Colors.black,
        backgroundColor: Colors.white,
        borderWidth: 1,
    },
    double: {
        borderWidth: 2,
    },
    lightGrey: {
        backgroundColor: Colors.lightGrey,
    },
    cloudGrey: {
        backgroundColor: Colors.cloudGrey,
    },
    radius10: {
        borderRadius: 10,
    }

})