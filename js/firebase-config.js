// Firebase initialization - replace values with your Firebase project's config
  const firebaseConfig = {
    apiKey: "AIzaSyC-y11etXfJm23r33vK6v41eVG9dW5E_kc",
    authDomain: "jj-s-sound-system.firebaseapp.com",
    projectId: "jj-s-sound-system",
    storageBucket: "jj-s-sound-system.firebasestorage.app",
    messagingSenderId: "383298197969",
    appId: "1:383298197969:web:8adca2658890fa13de28f0",
    measurementId: "G-3222NX820Q"
  };


firebase.initializeApp(firebaseConfig);

// Shortcut to auth
const auth = firebase.auth();

// Initialize Firestore if available (pages that need it should load the SDK)
let db = null;
if (firebase.firestore) {
  try {
    db = firebase.firestore();
  } catch (e) {
    console.warn('Firestore not initialized:', e);
  }
}

// Optional: observe auth state
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('Usuari autenticat:', user.email);
  } else {
    console.log('Cap usuari autenticat');
  }
});
