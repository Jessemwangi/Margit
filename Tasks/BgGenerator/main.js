const startcolor=document.querySelector('#color1');
const endcolor=document.querySelector('#color2');
const allradios=document.querySelectorAll('input[type="radio"]');
const displaygrad=document.getElementById('outputdiv')
let fillzone=displaygrad.getContext('2d');
let colorgrade ;
allradios.forEach(function (elem){
elem.addEventListener('change' ,function(e){
let selectedradio=e.target.value;
switch (selectedradio){

    case 'SE'://direction south east 
    loadgradient(0,0,400,400);
        break;
        case 'DS'://direction south
        loadgradient(400,0,400,400);

            break;
            case 'Sw'://direction south west
            loadgradient(400,0,0,400);

                break;
    case 'Dright'://direction right
    loadgradient(0,400,400,400);
break;
case 'Dleft'://direction left
    loadgradient(400,400,0,400);
    break;
    case 'NE'://direction north east
    loadgradient(0,400,400,0);
    break;
    case 'DW'://direction left
    loadgradient(400,400,400,0);
    break;
    case 'NW'://direction north west
    console.log(selectedradio);
    loadgradient(400,400,0,0);
    break;
            default:
}
});
});
let loadgradient=(x0,yo,x1,y1)=>{
    colorgrade = fillzone.createLinearGradient(x0,yo,x1,y1);
    colorgrade.addColorStop(0,startcolor.value);
    colorgrade.addColorStop(1,endcolor.value);
    fillzone.fillStyle = colorgrade;
    fillzone.fillRect(0,0,400,400);
}