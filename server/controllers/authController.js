const verifyCode = async (req, res) => {
    const { code, phone_number } = req.body
    console.log("verifyCode", phone_number, code)

    const db = req.app.get('db')
    const foundUser = await db.user.get_user([phone_number])
    console.log("foundUser", foundUser)
    if(foundUser[0].code === code){
        req.session.user = foundUser[0]
        db.user.remove_code([phone_number])
        return res.status(200).send(foundUser[0])
    }
    return res.status(409).send(foundUser[0].code)
}

module.exports = {
    verifyCode
}