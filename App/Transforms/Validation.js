import Constants from '../Config/Constants';

export default class Validation {
    static isComboProduct(product) {
        return product.type === Constants.productTypes.combo;
    }

    static isOriginGroup(group) {
        return group.groupType === Constants.modificatorTypes.original;
    }

    static isAdditionGroup(group) {
        return group.groupType === Constants.modificatorTypes.additional;
    }

    static isComboGroup(group) {
        return group.groupType === Constants.modificatorTypes.combo;
    }
}
