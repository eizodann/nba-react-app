import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwfDejT_PVmRJz0vtjKPUcTMeDD9qwCC8",
  authDomain: "nba-react-app-d8fb2.firebaseapp.com",
  databaseURL: "https://nba-react-app-d8fb2.firebaseio.com",
  projectId: "nba-react-app-d8fb2",
  storageBucket: "nba-react-app-d8fb2.appspot.com",
  messagingSenderId: "140756744376",
  appId: "1:140756744376:web:c61d0d94b9a6b3e56b1c4d",
  measurementId: "G-EK32YJ4KZB"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}
