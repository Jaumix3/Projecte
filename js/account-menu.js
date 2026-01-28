// Inserts a small account menu in the header when the user is logged in
document.addEventListener('DOMContentLoaded', () => {
  const insertMenu = (user) => {
    // Find nav or icons container
    const nav = document.querySelector('header nav');
    const icons = document.querySelector('header .icons');

    const container = document.createElement('div');
    container.className = 'account-menu';

    // Detectar si estamos en views/ o en la raíz
    const isInViews = window.location.pathname.includes('/views/');
    const comptePath = isInViews ? './compte.html' : './views/compte.html';
    const formulariPath = isInViews ? './formulari.html' : './views/formulari.html';

    if (user) {
      const name = user.displayName || user.email || 'Usuari';
      container.innerHTML = `
        <span class="account-name">${name}</span>
        <a href="${comptePath}">Perfil</a>
        <a href="#" id="menuSignOut">Tancar sessió</a>
      `;
    } else {
      container.innerHTML = `<a href="${formulariPath}">Iniciar sessió</a>`;
    }

    if (nav) nav.appendChild(container);
    else if (icons) icons.appendChild(container);

    const signOut = document.getElementById('menuSignOut');
    if (signOut) {
      signOut.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
          await firebase.auth().signOut();
          window.location.reload();
        } catch (err) {
          console.error(err);
          alert('Error tancant sessió: ' + (err.message || err));
        }
      });
    }
  };

  // Wait for firebase to be available
  const whenFirebase = () => typeof firebase !== 'undefined' && firebase.auth;

  const setup = () => {
    firebase.auth().onAuthStateChanged(user => {
      insertMenu(user);
    });
  };

  if (whenFirebase()) setup();
  else {
    // Try again shortly if firebase not loaded yet
    const t = setInterval(() => {
      if (whenFirebase()) {
        clearInterval(t);
        setup();
      }
    }, 200);
  }
});
