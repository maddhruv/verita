// Booth Complaint Controller
import randomstring from 'randomstring'
import db from '../db'

var BoothComplaintController = {}

BoothComplaintController.create = function (aadharId, boothId, complaint, cb) {
  // create a booth complaint

  // add a unique complaint ID
  // check https://www.npmjs.com/package/randomstring
  const complaintData = {
    aadharId,
    boothId,
    complaint
  }
  const boothComplaintDB = db.ref('/boothComplaint/' + randomstring.generate(5))
  console.log(complaintData)
  boothComplaintDB.update(complaintData)
  cb(complaintData)
}

BoothComplaintController.read = function (id) {
  // read a booth complaint
}

BoothComplaintController.list = function () {
  // list all booths complaints
}

export default BoothComplaintController
