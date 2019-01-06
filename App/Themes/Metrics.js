import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  halfMargin: 4,
  baseMargin: 8,      // Семантические названия для 1x и 2x
  doubleMargin: 16,
  margin1x: 8,
  margin2x: 16,
  margin3x: 24,
  margin4x: 32
};

export default metrics
