import Firebase from 'firebase';
    let config = {
        apiKey: "AIzaSyC9za_hIWqe7LBkUU6qPYsWMPyVTIjkZes",
        authDomain: "project-awesome-777.firebaseapp.com",
        databaseURL: "https://project-awesome-777.firebaseio.com",
        projectId: "project-awesome-777",
        storageBucket: "project-awesome-777.appspot.com",
        messagingSenderId: "125202261271",
    };
let app = Firebase.initializeApp(config);
export const db = app.database();
