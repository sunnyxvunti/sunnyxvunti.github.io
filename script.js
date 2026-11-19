(function(){
  const menu=document.querySelector('[data-menu]');
  const nav=document.querySelector('[data-nav]');
  if(menu&&nav){
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';}));
  }
  const buttons=document.querySelectorAll('[data-filter]');
  const projects=document.querySelectorAll('[data-categories]');
  const count=document.querySelector('[data-project-count]');
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const filter=button.dataset.filter;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    let visible=0;
    projects.forEach(card=>{
      const match=filter==='all'||(card.dataset.categories||'').split(' ').includes(filter);
      card.hidden=!match;
      if(match) visible++;
    });
    if(count){count.textContent=`Showing ${visible} project${visible===1?'':'s'}`;}
  }));
  const year=document.querySelector('[data-year]');
  if(year) year.textContent=new Date().getFullYear();
})();
