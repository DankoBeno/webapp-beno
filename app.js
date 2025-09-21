// jednoduchá logika - toggle svetla a tému
const btn = document.getElementById('btnToggle');
const status = document.getElementById('status');
const themeToggle = document.getElementById('themeToggle');

// simulovaný stav
let lightOn = false;

btn.addEventListener('click', () => {
  // tu by za normálnych okolností išiel request na server
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
