// //Declaration
// let hasil = '';
// let lagi = true;

// //Looping
// while (lagi == true) {
// //User Memilih
// let user = prompt('Game Batu Gunting Kertas\nSilahkan Pilih : \n Batu\n Gunting\n Kertas');

// //Lawan Memilih
// let enemy = Math.floor(Math.random() * 3);
// let enemy2 = 'Batu';
// if (enemy == 1 || enemy2 == 1) {
//    enemy = 'Batu'
//    enemy2 = 'batu'
// } else if (enemy == 2 || enemy2 == 2) {
//    enemy = 'Gunting'
//    enemy2 = 'gunting'
// } else {
//    enemy = 'Kertas'
//    enemy2 = 'kertas'
// }

// //Rules
// if (user == enemy || user == enemy2) {
//    hasil = 'SERI';
// } else if (user == 'Batu' || user == 'batu') {
//    hasil = (enemy == 'Gunting' && enemy2 == 'gunting') ? 'KAMU MENANG!' : 'KAMU KALAH!';
// } else if (user == 'Gunting' || user == 'gunting') {
//    hasil = (enemy == 'Kertas' && enemy2 == 'kertas') ? 'KAMU MENANG!' : 'KAMU KALAH!';
// } else if (user == 'Kertas' || user == 'kertas') {
//    hasil = (enemy == 'Batu' && enemy2 == 'batu') ? 'KAMU MENANG!' : 'KAMU KALAH!';
// } else {
//    hasil = 'Pilihan Salah!'
//}