//Declaration
const comImg = document.querySelector('.comChoose');
const userImg = document.querySelector('.userChoose');
const notif = document.querySelector('.notif');
const items = document.querySelectorAll('.item')

//Rand
const putar = () => {
    const images = ['batu', 'gunting', 'kertas']
    let i = 0;
    const start = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        comImg.src = `./assets/${images[i++]}Flip.svg`
        if (i == images.length) i = 0;
    }, 100);
}

//getCom
const getCom = () => {
    const com = Math.floor(Math.random() * 3) + 1;
    if (com == 1) return 'batu';
    if (com == 2) return 'gunting';
    return 'kertas';
}

//getHasil
const getHasil = (com, user) => {
    if (com == user) return 'draw';
    if (com == 'batu') return (user == 'gunting') ? 'lose' : 'won';
    if (com == 'gunting') return (user == 'kertas') ? 'lose' : 'won';
    if (com == 'kertas') return (user == 'batu') ? 'lose' : 'won';
}

//event && getUser
items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        notif.classList.add('opacity-0');
        const pilihanCom = getCom();
        const pilihanUser = item.getAttribute('data-value');
        const hasil = getHasil(pilihanCom, pilihanUser);
        putar();
        userImg.src = `./assets/${pilihanUser}.png`;
        setTimeout(() => {
            comImg.src = `./assets/${pilihanCom}Flip.svg`;
            notif.src = `./assets/${hasil}.svg`;
            notif.classList.remove('opacity-0');
        }, 1000);
    });
});