import {firebase, googleAuthProvider, facebookAuthProvider} from "../firebase/firebase";

export const login = uid => ({
    type: "LOGIN",
    uid
});
export const startGoogleLogin = () => (() => firebase.auth().signInWithPopup(googleAuthProvider));
export const startFacebookLogin = () => (() => firebase.auth().signInWithPopup(facebookAuthProvider));

export const logout = () => ({
    type: "LOGOUT"
});
export const startLogout = () => (() => firebase.auth().signOut());