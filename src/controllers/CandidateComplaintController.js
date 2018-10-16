// Candidate Complaint Controller
import randomstring from 'randomstring'
import db from '../db'

var CandidateComplaintController = {}

CandidateComplaintController.create = function (aadharId, username, boothId, complaint, cb) {
  // create a complaint

  const complaintData = {
    aadharId,
    boothId,
    username,
    complaint
  }
  const candidateComplaintDB = db.ref('/candidateComplaint/' + randomstring.generate(5))
  candidateComplaintDB.update(complaintData)
  cb(complaintData)
}

CandidateComplaintController.read = function (id) {
  // read a complaint

  // add a unique complaint ID
  // check https://www.npmjs.com/package/randomstring
}

CandidateComplaintController.list = function (cb) {
  // list all complaints against a candidate
  db.ref('/candidateComplaint').once('value', snap => {
    cb(snap.val())
  })
}

export default CandidateComplaintController
