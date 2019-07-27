import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCmrxuRIJBJZ-yWTHs2cKStFcLFwywFt3M',
  authDomain: 'crown-db-39a27.firebaseapp.com',
  databaseURL: 'https://crown-db-39a27.firebaseio.com',
  projectId: 'crown-db-39a27',
  storageBucket: '',
  messagingSenderId: '891735219214',
  appId: '1:891735219214:web:f32419a3c0b540de'
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};
export default firebase;
