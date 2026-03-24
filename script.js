(function(){
const stored=localStorage.getItem('vpp_lang')||'zh';
function setLang(lang){
 document.documentElement.classList.remove('lang-zh','lang-en');
 document.documentElement.classList.add('lang-'+lang);
 document.documentElement.setAttribute('lang',lang==='zh'?'zh-CN':'en');
 localStorage.setItem('vpp_lang',lang);
 document.querySelectorAll('.lang-toggle button').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
}
window.setLang=setLang;
window.addEventListener('DOMContentLoaded',()=>{
 setLang(stored);
 document.querySelectorAll('.lang-toggle button').forEach(btn=>btn.addEventListener('click',()=>setLang(btn.dataset.lang)));
});
})();