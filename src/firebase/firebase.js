import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-INxdsnvTQFq3cLC4Ajz0LAAcNtNnwxM",
    authDomain: "expensify-f7dff.firebaseapp.com",
    databaseURL: "https://expensify-f7dff.firebaseio.com",
    projectId: "expensify-f7dff",
    storageBucket: "expensify-f7dff.appspot.com",
    messagingSenderId: "154679710323",
    appId: "1:154679710323:web:0a8d8460e15d77f47d5006"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();


export {firebase, database as default}


//
// // database.ref("expenses").push({
// //         description: "hI thEre",
// //         amount : 123.5,
// //         createdAt: 0b1111111111,
// //         note: "Testing"
// // });
//
// const onValueChange = snapshot => {
//     console.log(snapshot.val())
//     };
//
//     // for (let i = 0; i < snapshot.length; i++) {
//     //     expense.
//     // }
//
// database.ref('expenses').on("child_changed", onValueChange);
//
//
//
// // database.ref().set({
// //     name: "Abpbker elaghel",
// //     age: 22,
// //     isSingle: true,
// //     location: {
// //         city: "tunis",
// //         country: "tunisia"
// //     }
// // });
//
// //
// // database.ref('age').set(27);
// // database.ref('location/city').set('Tripoli');
// //
// // database.ref('attribute').set({
// //     height: 1.956,
// //     weight: 1484,
// // }).then(value => {
// //     console.log(value)
// // }).catch(error => {
// //     console.log('error', error);
// // });
// //
// // database.ref().update({
// //     age: 22,
// //     job: "Software Engineer"
// // }).then(e => {
// //    console.log("Remove Completed... ");
// // }).catch(error => {
// //     console.error("Error in Deleting form firebase  ", error)
// // });
//
// // database.ref('isSingle').set([{a:4,b:3,c:10}, {a:4,b:3,x:10}]);
// // //
// // database.ref().on('value', snapshot => {
// //     const value = snapshot.val();
// //     console.log((value.isSingle))
// // });
