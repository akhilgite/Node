const firebase = require('firebase');
//const functions = require('firebase-functions');
//const firebase =  require("firebase-admin");
//const express = require("express");
//const engines = require("consolidate");

/*const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);*/

/*function getFacts(){
    const ref = firebaseApp.database().ref("facts");
    return ref.once("value").then(snap=> snap.val());
};

const app = express();
app.engine("hbs", engines.handlebars);
app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/",(request, response)=>{
    response.set("Cache-control","public, max-age=300, s-maxage=600" );
    getFacts().then(facts=>{
        response.render("index",{ facts });
    });
});*/



firebase.initializeApp({
    serviceAccount: "./Mayur Mogre-d191f458dbbc.json",
    databaseURL: "https://mayur-mogre.firebaseio.com/"
});

var ref = firebase.database().ref("facts");
var messagesRef = ref.child("messages");
messagesRef.push({
    name: "Akhil",
    admin: true,
    count: 1,
    text: "Hey"
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.app = functions.https.onRequest(app);
