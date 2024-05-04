export default class ApiResponse {
    constructor(_isOk, _message, _data) {
        this.isOk = _isOk;
        this.message = _message;
        this.data = _data !== null && _data !== undefined ? _data : null;
    }
};
