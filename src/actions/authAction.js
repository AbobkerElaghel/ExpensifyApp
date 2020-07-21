import {firebase, googleAuthProvider, facebookAuthProvider} from "../firebase/firebase";

export const login = uid => ({
    type: "LOGIN",
    uid
});
export const startGoogleLogin = () => (() => firebase.auth().signInWithRedirect(googleAuthProvider));
export const startFacebookLogin = () => (() => firebase.auth().signInWithRedirect(facebookAuthProvider));

export const logout = () => ({
    type: "LOGOUT"
});
export const startLogout = () => (() => firebase.auth().signOut());