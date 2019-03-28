const bcrypt = require('bcrypt-nodejs');

module.exports = {
    hash: function(data_to_hash) {

        return promise = new Promise((resolve, reject) => {
            bcrypt.hash(data_to_hash, null, null, (err, res) => {
                
                if(err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    },

    compareHash: function(value, match_hash) {
        return promise = new Promise((resolve, reject) => {
            bcrypt.compare(value, match_hash, (err, res) => {
                
                if(err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
};