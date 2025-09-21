// jednoduchá logika - toggle svetla a tému + notifikácie
const btn = document.getElementById('btnToggle');
const status = document.getElementById('status');
const themeToggle = document.getElementById('themeToggle');

const btnNotify = document.getElementById('btnNotify');
const notification = document.getElementById('notification');

let lightOn = false;

btn.addEventListener('click', () => {
  lightOn = !lightOn;
  status.textContent = `Stav: ${lightOn ? 'ZAPNUTÉ' : 'VYPNUTÉ'}`;
});

// téma (uloží sa do localStorage)
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const nxt = current === 'dark' ? '' : 'dark';
  document.documentElement.setAttribute('data-theme', nxt);
  localStorage.setItem('theme', nxt);
});

// načítanie témy pri štarte
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  status.textContent = `Stav: ${lightOn ? 'ZAPNUTÉ' : 'VYPNUTÉ'}`;
});

// NOVÉ: notifikácia + simulované poslanie na server
btnNotify.addEventListener('click', () => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  showNotification(`Žiadosť odoslaná: ${time}`);

  // simulované asynchrónne volanie na server (2s)
  showNotification('Odosielam na server...');
  setTimeout(() => {
    const success = true; // simulovaný výsledok
    if(success) {
      showNotification(`Server odpovedal: OK (${new Date().toLocaleTimeString()})`);
    } else {
      showNotification(`Server odpovedal: CHYBA (${new Date().toLocaleTimeString()})`);
    }
  }, 2000);
});

function showNotification(text) {
  // jednoduchá "toast" notifikácia - prepíše obsah divu a zmizne po 3s
  notification.textContent = text;
  notification.style.padding = '0.5rem';
  notification.style.border = '1px solid #ccc';
  notification.style.marginTop = '0.5rem';
  setTimeout(() => {
    notification.textContent = '';
    notification.style.padding = '';
    notification.style.border = '';
  }, 3000);
}
