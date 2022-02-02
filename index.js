let SubhanAllah = "SubhanAllah"
let Alahamdulillah = "Alahamdulillah"
let AllahuAkbar = "AllahuAkbar"
let sa = document.getElementById("sa")

document.getElementById("btn").addEventListener("click", () => {
    let ekran = document.querySelector(".ekran")
    ekran.value = Number(ekran.value) +1;
    if(ekran.value < 33){
        sa.innerHTML = SubhanAllah
    }else if(32 < ekran.value && ekran.value < 66){
        sa.innerHTML = Alahamdulillah
    }else if(ekran.value > 65 && ekran.value < 99){
        sa.innerHTML = AllahuAkbar
    }else{
        sa.innerHTML = ""
    }
})













// >, >=, <=, ==, ===, !=, !==

// let value;
// value = 1 > 2;
// value = 2 <= 2;
// value = 1 == 1;  // не строга ровенcтво
// value = 1 === 1;  // строга ровенcтво
// value = 1 != 1;  // не ровенчтво
// value = 1 !== 1;  // строга не ровенcтво
// value = 'a' == 'a'

// console.log(value);


// УСЛОВИЯ

//If operatori ko'rsatilgan shart rost (to'g'ri) bo'lsa, 
//gapni bajaradi. Agar shart bajarilmasa (noto'g'ri), 
//u holda boshqa ko'rsatma bajarilishi mumkin.
// let value = 10;
// if (value != 10) {
//  console.log(value);
// } else {
//     console.log('notori');
// }


// value = 10;
// if( value !== 10){
//     console.log('value === 10');
// }else{
//     console.log('else');
// }

// if (value) {
//     console.log('some action', value);
// }else{
//     console.log('else', value);
// }

// лОГИЧЕСКИЙ ОПЕРАТОРЫ

//   ИЛИ
// && И 
//  ! НЕ

// value = null;
// // console.log(!value);
// if(value  null){
//     console.log(value);
// }else{
//     console.log('notori');
// }

// обйектни текшириш

// value = [];

// if(value.length){
//     console.log(value);
// }else{
//     console.log('array is empty');
// }