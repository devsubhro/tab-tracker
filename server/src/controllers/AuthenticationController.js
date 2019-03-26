module.exports = {
    status: (req, resp) => {
        resp.send({
            message: "hello and welcome"
        });
    },

    register: (req, resp) => {
        resp.send(`Hi ${req.body.email}, you are registered with ${req.body.password}! Have fun!`);
    }
}