document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.getElementById('profileForm');
  const passwordForm = document.getElementById('passwordForm');
  const signOutBtn = document.getElementById('signOutBtn');

  firebase.auth().onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = './formulari.html';
      return;
    }

    document.getElementById('displayName').value = user.displayName || '';

    if (typeof db !== 'undefined' && db) {
      try {
        const doc = await db.collection('users').doc(user.uid).get();
        if (doc.exists) {
          const data = doc.data();
          if (data.age !== undefined) document.getElementById('age').value = data.age;
        }
      } catch (e) {
        console.warn('Error reading user profile from Firestore:', e);
      }
    }
  });

  if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const displayName = document.getElementById('displayName').value.trim();
      const ageVal = document.getElementById('age').value;
      const age = ageVal === '' ? null : Number(ageVal);

      const user = firebase.auth().currentUser;
      if (!user) return alert('No hi ha sessió iniciada.');

      try {
        if (displayName && displayName !== user.displayName) {
          await user.updateProfile({ displayName });
        }

        if (typeof db !== 'undefined' && db) {
          await db.collection('users').doc(user.uid).set({ age }, { merge: true });
        } else {
          localStorage.setItem('user_extra_' + user.uid, JSON.stringify({ age }));
        }

        alert('Dades del perfil actualitzades.');
      } catch (err) {
        console.error(err);
        alert('Error actualitzant el perfil: ' + (err.message || err));
      }
    });
  }

  if (passwordForm) {
    passwordForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const currentPassword = document.getElementById('currentPassword').value;
      const newPassword = document.getElementById('newPassword').value;

      const user = firebase.auth().currentUser;
      if (!user) return alert('No hi ha sessió iniciada.');

      try {
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        await user.reauthenticateWithCredential(credential);
        await user.updatePassword(newPassword);
        alert('Contrasenya actualitzada.');
        passwordForm.reset();
      } catch (err) {
        console.error(err);
        alert('Error canviant contrasenya: ' + (err.message || err));
      }
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener('click', async () => {
      try {
        await firebase.auth().signOut();
        window.location.href = './formulari.html';
      } catch (err) {
        console.error(err);
        alert('Error tancant sessió: ' + (err.message || err));
      }
    });
  }
});
