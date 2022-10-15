'use strict'
const header = document.querySelector('header');
const backtoptop = document.querySelector('#backtoptop');
const mobilebtn = document.querySelector('#mobilebtn');
let links = document.querySelectorAll('nav ul li a');
let list = document.querySelectorAll('nav ul li');
const nav = document.querySelector('nav');
// const modalbtnc = document.querySelector('#modalbtn');
const modal = document.querySelector('#modal');
const closemodal = document.querySelector('#close');
const projectDiv = document.querySelector('#projects');
const skillsDiv = document.querySelector('#skills');
const multimediaDiv = document.querySelector('#multimedia');
const ContactsDiv = document.querySelector('#contact');

window.onscroll = function () {
    scrollfunction();
}

const scrollfunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg');
        backtoptop.style.display = 'block';
    }
    else {
        header.classList.remove('bg');
        backtoptop.style.display = 'none';

    }
};

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobileMenu = () => {
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    }
    else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
}

const imgss = document.querySelectorAll('.imgs');
const myFunction = (imgs) =>{
    let expandImg = document.getElementById("expandedImg");
    let imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "flex";
  }

  imgss.forEach((elem) =>{
    elem.addEventListener('click', (e)=>{
        myFunction(e.target);
        console.log(e.target);
    });
  });
  links.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
        e.preventDefault;
        let y = header.offsetHeight-10;
        console.log(e.target.innerText)
            switch (e.target.innerText){
               case'Projects':
            let topA = projectDiv.offsetTop - y
            window.scrollTo({top:topA,left:0,behavior: 'smooth'});
                break;
                case'About ME':
                let topAM = skillsDiv.offsetTop - y
                window.scrollTo({top:topAM,left:0,behavior: 'smooth'});
                    break;
                    case'MultiMeadia':
                    let topM = multimediaDiv.offsetTop - y
                    window.scrollTo({top:topM,left:0,behavior: 'smooth'});
                        break;
                        case'Say Hello':
                        let top = ContactsDiv.offsetTop - y
                        window.scrollTo({top:top,left:0,behavior: 'smooth'});
                            break;
                default:
                    break;
            }
       
        mobileMenu();
    });
});
backtoptop.addEventListener('click', getToTop);
mobilebtn.addEventListener('click', mobileMenu);
// modalbtnc.addEventListener('click',modalbtn);
// closemodal.addEventListener('click', modalbtn);
