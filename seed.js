const { User } = require('./models')

const seed = async () => {
  const createBob = await User.create({
    firstName: 'Bob',
    lastName: 'Bobby',
    phoneNumber: '03120312',
    Longitude: '-3134.13',
    Latitude:'-4214.423'
  })
}


seed()