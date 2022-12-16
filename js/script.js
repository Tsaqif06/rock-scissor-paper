//Declaration
const comImg = document.querySelector('.comChoose');
const userImg = document.querySelector('.userChoose');
const notif = document.querySelector('.notif');
const items = document.querySelectorAll('.item')

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
        item.style.transform = "scale(10px)";
        const pilihanCom = getCom();
        const pilihanUser = item.getAttribute('data-value');
        const hasil = getHasil(pilihanCom, pilihanUser);
        comImg.src = `./assets/${pilihanCom}Flip.svg`
        userImg.src = `./assets/${pilihanUser}.png`
        notif.src = `./assets/${hasil}.svg`
        notif.classList.remove('opacity-0')
        score(hasil);
    });
});