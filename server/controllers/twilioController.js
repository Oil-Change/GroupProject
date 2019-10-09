PhoneVerification.prototype.requestPhoneVerification = function (phone_number, country_code, via, callback) {

    this._request("post", "/protected/json/phones/verification/start", {
            "api_key": this.apiKey,
            "phone_number": phone_number,
            "via": via,
            "country_code": country_code,
            "code_length": 4
        },
        callback
    );
};

/**
 * Verify a phone number
 *
 * @param {!string} phone_number
 * @param {!string} country_code
 * @param {!string} token
 * @param {!function} callback
 */
PhoneVerification.prototype.verifyPhoneToken = function (phone_number, country_code, token, callback) {

    console.log('in verify phone');
    this._request("get", "/protected/json/phones/verification/check", {
            "api_key": this.apiKey,
            "verification_code": token,
            "phone_number": phone_number,
            "country_code": country_code
        },
        callback
    );
};