document.querySelectorAll('.reveal').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=document.getElementById(btn.dataset.target);
    if(target) target.classList.toggle('hidden');
  });
});