/* installation: npm install firebase --save */
import firebase from 'firebase'

/* replace config by your project config in firebase */
var config = {
    apiKey: "your firebase apikey",
    authDomain: "your firebase authDomain",
    databaseURL: "your firebase databaseURL",
    projectId: "your firebase projectId",
    storageBucket: "your firebase storageBucket",
    messagingSenderId: "your firebase messagingSenderId"
}

const fire = firebase.initializeApp(config)

export default fire