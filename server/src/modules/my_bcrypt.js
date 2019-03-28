const bcrypt = require('bcrypt-nodejs');

function promisifyVerifyHash(data, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, hash, (err, res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        }); 
    });
}

function promisifyHash(data) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(data, null, null, (err, res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = {
    hash: function(data) {
        return promisifyHash(data);
    },

    compareHash: function(data, hash) {
        return promisifyVerifyHash(data,hash);
    }
};