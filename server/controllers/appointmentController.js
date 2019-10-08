module.exports = {
    getAppointments: (req, res) => {
        req.app.get('db')
    }
};