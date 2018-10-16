import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyChLKmr3hQeA6c1BJuZiQEHlXn5MxNttfg',
  authDomain: 'bharat-b4a57.firebaseapp.com',
  databaseURL: 'https://bharat-b4a57.firebaseio.com',
  projectId: 'bharat-b4a57'
}

firebase.initializeApp(config)

const db = firebase.database()

export default db
