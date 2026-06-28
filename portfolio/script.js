// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const btn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav nav');
btn?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Download resume as PDF (uses browser print to PDF)
document.getElementById('downloadBtn')?.addEventListener('click', () => {
  const w = window.open('assests/priyanshudevcv.pdf', '_blank');
  if (!w) return;
  w.addEventListener('load', () => {
    setTimeout(() => w.print(), 400);
  });
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .project, .contact-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
