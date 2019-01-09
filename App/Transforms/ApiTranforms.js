import Constants from "../Config/Constants";

export default class ApiTranforms {
    static getError(error) {
        return Constants.errorApi[error];
    }
}