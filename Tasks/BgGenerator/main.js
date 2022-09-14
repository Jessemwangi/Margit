const startcolor = document.querySelector('#color1');
const endcolor = document.querySelector('#color2');
const allradios = document.querySelectorAll('input[type="radio"]');
const displaygrad = document.getElementById('outputdiv')

let fillzone = displaygrad.getContext('2d');

let colorgrade; let direction;

allradios.forEach(function (elem) {
    elem.addEventListener('change', function (e) {
        selectedcolor(e.target.value);
    });
});

const selectedcolor = (selectedradio) => {

    switch (selectedradio) {
        case 'SE'://direction south east 
            loadgradient(0, 0, 300, 150);
            direction = 'to bottom right';
            break;

        case 'DS'://direction south
            loadgradient(150, 0, 150, 150);
            direction = 'to bottom';
            break;

        case 'Sw'://direction south west
            loadgradient(300, 0, 150, 150);
            direction = 'to bottom left';
            break;
        case 'Dright'://direction right
            loadgradient(0, 75, 300, 75);
            direction = 'to right';
            break;
        case 'Dleft'://direction left
            loadgradient(300, 75, 0, 75);
            direction = 'to left';
            break;
        case 'NE'://direction north east
            loadgradient(0, 150, 300, 0);
            direction = 'to top right';
            break;
        case 'DW'://direction north
            loadgradient(150, 75, 150, 0);
            direction = 'to top';
            break;
        case 'NW'://direction north west
            loadgradient(300, 150, 0, 0);
            direction = 'to top left';
            break;
        default:
    }

    let gradOutput = 'linear-gradient(' + direction + ', ' + startcolor.value + ', ' + endcolor.value + ')';
    document.body.style.backgroundImage = gradOutput;

    document.querySelector('p').textContent = gradOutput;

}

const loadgradient = (x0, yo, x1, y1) => {
    colorgrade = fillzone.createLinearGradient(x0, yo, x1, y1);
    colorgrade.addColorStop(0, startcolor.value);
    colorgrade.addColorStop(1, endcolor.value);
    fillzone.fillStyle = colorgrade;
    fillzone.fillRect(0, 0, 300, 150);
}

const backgroundcolor = (Colordirection) => {
    let gradOutput = 'linear-gradient(' + Colordirection + ', ' + startcolor.value + ', ' + endcolor.value + ');';
    document.body.style.backgroundImage = gradOutput;

    document.querySelector('p').textContent = gradOutput;


}
