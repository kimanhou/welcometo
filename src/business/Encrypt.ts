import CryptoJS from "crypto-js";

class Encrypt {
    encrypt = (s : string, hashKey : string) => {
        return CryptoJS.AES.encrypt(s, hashKey).toString()
    }

    decrypt = (s : string, hashKey : string) => {
        var bytes  = CryptoJS.AES.decrypt(s, hashKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

export default new Encrypt();