// Booth Controller
import db from '../db'

const boothDB = db.ref('/booth')

var BoothController = {}

BoothController.create = function (id, name, address, city, incharge, location, amenities, candidates) {
  // create a booth
}

BoothController.read = function (id) {
  // read a booth
  boothDB.once('value')
    .then((snapshot) => {
      console.log(snapshot.val())
    })
}

BoothController.list = function () {
  // list all booths
  boothDB.once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

export default BoothController
