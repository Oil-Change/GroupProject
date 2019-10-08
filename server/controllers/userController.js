module.exports = {
    getUser: (req, res) => {
        const {id} = req.params

        req.app.get('db').user.get_user([id])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Unable to Get User!'})
                console.log(err)
            })
    },
    createUser: (req, res) => {
        const {phone_number} = req.body

        req.app.get('db').user.create_user([phone_number])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Unable to Create User!'})
                console.log(err)
            })
            
    },
    updateUser: (req, res) => {
        const {full_name, last_name, street, city, state, zip, email} = req.body
        const {phone_number} = req.session.users.phone_number
        
        req.app.get('db').user.update_user([phone_number, full_name, last_name, street, city, state, zip, email])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Unable to Update Users Information!'})
                console.log(err)
            })
    }
};