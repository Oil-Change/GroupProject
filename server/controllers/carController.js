const createCar = async (req, res) => {
    // console.log("createCar")
    const { id } = req.params
    const { make, model, trim, year, color, licensePlate, mileage } = req.body
    const db = req.app.get('db')
    const car = await db.car.add_car([id, make, model, trim, year, color, licensePlate, mileage])
    res.status(200).send(car[0])
}

const getCar = async (req, res) => {
    // console.log("Getting Car");
    const { id } = req.params;
    const db = req.app.get('db');
    const foundCar = await db.car.find_car([id]);
    // console.log('foundCar: ', foundCar);
    res.status(200).send(foundCar[0]);
}

//Update car does not seem needed

module.exports = {
    createCar,
    getCar
};