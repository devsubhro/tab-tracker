module.exports = {
    welcome: (req, resp) => {
        resp.send({
            message: "hello and welcome"
        });
    }
}