const angka1 = document.getElementById('angka1');
const angka2 = document.getElementById('angka2');
const operator = document.getElementById('operator');
const hasil = document.getElementById('hasil');
const hitung = document.getElementById('hitung');

hitung.addEventListener('click', () => {
    const nilai1 = parseFloat(angka1.value);
    const nilai2 = parseFloat(angka2.value);
    const opr = operator.value;
    let result;

    switch (opr) {
        case '+':
            result = nilai1 + nilai2;
            break;
        // case '-':
        //     result = nilai1 - nilai2;
        //     break;
        // case '*':
        //     result = nilai1 * nilai2;
        //     break;
        // case '/':
        //     result = nilai1 / nilai2;
        //     break;
        // case '%':
        //     result = nilai1 % nilai2;
        //     break;
        default:
            result = "Operator tidak valid";
    }

    hasil.textContent = result;
});