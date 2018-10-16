// Candidate Controller
import db from '../db'

var CandidateController = {}

CandidateController.create = function (username, name, photo, party, booth_id) {
  // create a candidate
}

CandidateController.read = function (username, cb) {
  // read a candidate
  const candidateDB = db.ref('/candidates/' + username)
  candidateDB.once('value', (snapshot) => {
    cb(snapshot.val())
  })
}

CandidateController.list = function () {
  // list all candidates for a booth
}

export default CandidateController
