const header=document.querySelector('header');
const backtoptop=document.querySelector('#backtoptop');
const mobilebtn=document.querySelector('#mobilebtn');

window.onscroll=function (){
    scrollfunction();
}

const scrollfunction = ()=>{
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        header.classList.add('bg');
        backtoptop.style.display='block';
    }
    else
    {
        header.classList.remove('bg');
        backtoptop.style.display='none';

    }
};

const getToTop = () =>
{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}


const mobileMenu = () =>{
if (nav.classList.contains('reponsive'))
{
    nav.classList.remove('responsive');
    document.body.style.overflow='';
}
else{
    nav.classList.add('responsive');
    document.body.style.overflow='hidden';
}
}
backtoptop.addEventListener('click',getToTop);
mobilebtn.addEventListener('click',mobileMenu);