import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
    screen: {
        wholeSpace: {
            flex: 1,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            padding: Metrics.doubleBaseMargin
        }
    },
    elements: {
        flex: {
            flex: 1
        },
        fixedBottom: {
            width: '100%',
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 0
        }
    }
};

export default ApplicationStyles;
