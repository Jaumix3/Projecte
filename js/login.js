document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email')?.value?.trim();
    const password = document.getElementById('password')?.value;

    if (!email || !password) {
      alert('Completa el correu i la contrasenya.');
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Sessió iniciada.');
      // Redirigir a index.html desde cualquier ubicación
      const isInViews = window.location.pathname.includes('/views/');
      window.location.href = isInViews ? '../index.html' : './index.html';
    } catch (err) {
      console.error(err);
      alert('Error iniciant sessió: ' + (err.message || err));
    }
  });

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('Usuari ja autenticat:', user.email);
    }
  });
});
