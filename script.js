const header=document.querySelector('.site-header');
const nav=document.querySelector('.main-nav');
const toggle=document.querySelector('.menu-toggle');
function updateHeader(){header.classList.toggle('scrolled',window.scrollY>35)}
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const dialog=document.querySelector('.lightbox'),dialogImg=dialog.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{dialogImg.src=btn.dataset.full;dialogImg.alt=btn.querySelector('img').alt;dialog.showModal()}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
