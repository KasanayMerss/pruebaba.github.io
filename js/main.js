var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function ecua2() {
    var a = prompt("Introduzca el valor de a");
    var b = prompt("Introduzca el valor de b");
    var c = prompt("Introduzca el valor de c");
    var solr = 0;
    let result = '';
    sols = (-1 * b) + (b**2 -4 * a * c)**0.5;
    sols = sols / (2 * a);
    
    solr = (-1 * b)-(b**2 - 4 * a * c)**0.5;
    solr = solr / (2 * a);

    result = (sols+" y "+solr);

    screen.value = result;

}

function prodnota() {
    var a = prompt("Introduzca el valor de a");
    var b = prompt("Introduzca el valor de b");
    
    screen.value = (a)**2 + 2 * a * b + (b)**2;
}

function acir() {
    var num;
    num = screen.value;
    screen.value = 3.14159265359 * (num)**2;
}

function sqrt() {
    screen.value = (screen.value)**0.5;
}


function pi() {
    screen.value = 3.14159265359;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}