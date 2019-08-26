const firebase = require('firebase');
const functions = require('firebase-functions');
const firebaseAdmin =  require("firebase-admin");
const express = require("express");
const engines = require("consolidate");

/*const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);*/

/*function getFacts(){
    const ref = firebaseApp.database().ref("facts");
    return ref.once("value").then(snap=> snap.val());
};
*/
const app = express();
app.engine("hbs", engines.handlebars);
app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/",(request, response)=>{
    response.send("Hello from root");
});



firebase.initializeApp({
    serviceAccount: "./Mayur Mogre-d191f458dbbc.json",
    databaseURL: "https://mayur-mogre.firebaseio.com/"
});

var ref = firebase.database().ref

var messageRef = messagesRef.push();
var messageKey = messageRef.key;
var payload = {};

var message = {
    text: "hey guys"
};

payload['userMessages/'+ messageKey] = message;
payload['logs/'+ messageKey] = message;

ref.update(payload);

ref.once('value').then(function(snap) {
    console.log(snap.key, "\n\n");
    console.log(snap.ref.toString(), "\n\n");   
    console.log(snap.val(), "\n\n");   
});

/*messagesRef.push({
    name: "Akhil",
    admin: true,
    count: 1,
    text: "Hey"
});*/


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
