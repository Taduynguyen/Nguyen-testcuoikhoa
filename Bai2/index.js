
const $button = document.getElementById('button');

function numberOneTriangle(a){
    if (!Number.isInteger(a)) return -1;

    for (let i = 0; i < a; i++){
        document.write('<br>');
        for (let j = 0; j <= i; j++)
            document.write('*');
    }
}

$button.addEventListener('click', () => {
    const $resulf = Number(document.getElementById('input').value);
    numberOneTriangle($resulf);
})