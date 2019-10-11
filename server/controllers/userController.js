module.exports = {
    getUser: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        db.user.get_user([id])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Unable to Get User!' })
                console.log(err)
            })
    },
    createUser: (req, res) => {
        const { phone_number } = req.body

        console.log("verifyCode", phone_number)

        const db = req.app.get('db')
        const foundUser = await db.user.get_user([phone_number])
        if(foundUser[0]){
            res.status(409).send('exists')
        }
        const db = req.app.get('db')
        db.user.create_user([phone_number])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Unable to Create User!' })
                console.log(err)
            })
        req.session.user = { phone_number: phone_number }
    },

    updateUser: (req, res) => {
        const { firstName, lastName, street, city, state, zip, email } = req.body
        const phone_number = '4352325367'
        //req.session.user.phone_number
        console.log(phone_number, firstName, lastName, street, city, state, zip, email)
        const db = req.app.get('db')
        db.user.update_user([phone_number, firstName, lastName, street, city, state, zip, email])
            .then((response) => {
                console.log('here', response)
                res.status(200).send(response[0])
            }).catch(err => {
                res.status(500).send({ errorMessage: 'Unable to Update Users Information!' })
                console.log(err)
            })
    },
    updateCode: async (req, res) => {
        const { code, phone_number } = req.body
        console.log(code, phone_number)
        const db = req.app.get('db')
        await db.user.update_code([phone_number, code])
        return res.status(200).send("set")
    }
};