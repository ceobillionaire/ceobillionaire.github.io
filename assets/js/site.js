
document.documentElement.classList.add('js');
(function(){
  const btn=document.querySelector('[data-menu]');
  const panel=document.querySelector('[data-mobile-panel]');
  if(btn&&panel){btn.addEventListener('click',()=>{const open=panel.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});}
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1});els.forEach(e=>obs.observe(e));}else{els.forEach(e=>e.classList.add('visible'))}
})();
