const User = require('./user')

const getUserById = (id) => {
  // .exec() da izvrsi query
  // metodi koji se pozivaju nad modelom ne vracaju Promise
  // pretpostavljamo da je Promise jer mozemo da pozovemo
  // .then() ali nije Promise vec query objekat !
  
  // u slucaju da ne pozovemo exec() nakon poziva findById()
  // mozemo da nastavimo da dodavanjem drugih upita,
  // npr, .limit(num), .sort(order), etc.
  /*return User.findById(id)
    .exec()*/
}

const getAllUsers = () => {
  /*return User.find({})
    .exec()*/
}

const createUser = (userDetails) => {
  /*return User.create(userDetails)*/
}
const removeUserById = (id) => {
  /*return User.findByIdAndDelete(id).exec()*/
}

const updateUserById = (id, update) => {
  /*return User.findByIdAndUpdate(id, update, {new: true}).exec()*/
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}
