// script.js
// Theme toggle + remember choice
const root = document.documentElement;
const btn  = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if(saved === 'dark'){ root.classList.add('dark'); btn.textContent = '☀️'; }
btn?.addEventListener('click', () => {
  root.classList.toggle('dark');
  const isDark = root.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  btn.textContent = isDark ? '☀️' : '🌙';
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Back-to-top button (optional)
const topBtn = document.createElement('button');
topBtn.id = 'toTop';
topBtn.textContent = '↑';
document.body.appendChild(topBtn);
topBtn.style.cssText = 'position:fixed;right:16px;bottom:16px;padding:.6rem .8rem;border:none;border-radius:10px;opacity:0;pointer-events:none;background:var(--accent);color:#fff;cursor:pointer';
window.addEventListener('scroll',()=>{
  const show = window.scrollY > 300;
  topBtn.style.opacity = show ? '1' : '0';
  topBtn.style.pointerEvents = show ? 'auto' : 'none';
});
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
