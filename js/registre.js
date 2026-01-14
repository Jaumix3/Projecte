document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('nom')?.value?.trim();
    const email = document.getElementById('correu')?.value?.trim();
    const pass = document.getElementById('pass')?.value;
    const pass2 = document.getElementById('pass2')?.value;

    if (!email || !pass) {
      alert('Completa el correu i la contrasenya.');
      return;
    }

    if (pass !== pass2) {
      alert('Les contrasenyes no coincideixen.');
      return;
    }

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
      const user = userCredential.user;
      if (user && name) {
        await user.updateProfile({ displayName: name });
      }
      alert("Registre completat. S'ha iniciat la sessió.");
      window.location.href = './index.html';
    } catch (err) {
      console.error(err);
      alert('Error en registrar: ' + (err.message || err));
    }
  });
});
