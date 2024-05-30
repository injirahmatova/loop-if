// 1)İstifadəçi bir müsbət ədəd (N) daxil edir. Fibonaççi seriyasının N-ci nömrəsini çap edən funksiya yazın.
function Fibonaççi(n) {
    if (n <= 1) {
        result = n
    } else {
        result = Fibonaççi(n - 1) + Fibonaççi(n - 2)
    }
    return result;
}
console.log(Fibonaççi(8));


//  2)Date obyektindən istifadə etməklə elə bir funksiya yazın ki, istifadəçi sayta daxil olanda daxil olduğu vaxta əsasən alert mesajı çıxartsın və body backgroundu dəyişsin.

window.onload = function () {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 6 && hour < 16) {
        document.body.style.backgroundColor = "orange"
        alert("Gunortaniz xeyir")

    }
    else if (hour >= 16 && hour < 22) {
        document.body.style.backgroundColor = "lightblue"
        alert("Axsam;n;z xeyir")
    }
    else {
        document.body.style.backgroundColor = "red"
        alert("Her vaxtiniz xeyir")
    }
}


// 3) İstifadəçi bir ədəd (A) daxil edir. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
let a = 6;
for (let i = 0; i < 1000; i++) {
    if (i % a == 0) {
        console.log(i)
    }

}
