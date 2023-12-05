import crypto from 'node:crypto';

class CryptoProvider {
    createHmac(algorithm, key) {
        return crypto.createHmac(algorithm, key);
    }

    randomBytes(size) {
        return crypto.randomBytes(size);
    }
}

export default CryptoProvider;