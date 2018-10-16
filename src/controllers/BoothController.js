// Booth Controller
import db from '../db'

const boothDB = db.ref('/booth')

var BoothController = {}

BoothController.create = function (id, name, address, city, incharge, location, amenities, candidates) {
  // create a booth
}

BoothController.read = function (id, cb) {
  // read a booth
  boothDB.once('value')
    .then((snapshot) => {
      cb(snapshot.val()[id])
    })
}

BoothController.list = function (cb) {
  // list all booths
  boothDB.on('value', (snapshot) => {
    cb(snapshot.val())
  })
}

export default BoothController
