const imgss = document.querySelectorAll('.imgs');
const myFunction = (imgs) =>{
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

  imgss.forEach((elem) =>{
    elem.addEventListener('click', (e)=>{
        myFunction(e.target);
        console.log(e.target);
    });
  });