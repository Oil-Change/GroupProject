const verifyCode = async (req, res) => {
    const { phone_number, code } = req.params
    const db = req.app.get('db')

    const foundUser = db.user.get_user([phone_number])
    if(foundUser[0].code === code){
        req.session.user = foundUser[0]
        db.user.remove_code([phone_number])
        return res.status(200).send(foundUser[0])
    }
    return res.status(409).send("Invalid code")
}

module.exports = {
    verifyCode
}