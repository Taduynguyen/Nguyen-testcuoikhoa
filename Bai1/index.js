const $number1 = Number(document.getElementById('number1'));
const $number2 = Number(document.getElementById('number2'));
const $resulf = document.getElementById('resulf');
const $button = document.getElementById('button');

function checkSNT(number) {
    if (number < 2) return -1;

    for (let i = 2; i < number; i++)
    if (number % i === 0) return -1;

    return true;
}

$button.addEventListener('click', () => {
    if (!Number.isInteger($number1) || !Number.isInteger($number2))
    $resulf.innerHTML = 'Số bạn nhập không đúng';

    if ($number1 > $number2)
    $resulf.innerHTML = 'Số thứ nhất phải nhỏ hơn số thứ 2';

    let sum = 0;
    for (let i = $number1; i <= $number2; i++)
    if (checkSNT) sum += i;
    $resulf.innerHTML = ` Tổng các số nguyên tố trong khoảng từ ${$number1} đến ${$number2} là: ${sum}`;

})