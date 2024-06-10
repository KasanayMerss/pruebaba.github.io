const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "ecua2") {
            var a = prompt("Introduzca el valor de a");
            var b = prompt("Introduzca el valor de b");
            var c = prompt("Introduzca el valor de c");
            var solr = 0;
            var sols = 0;
            let result = '';
            sols = (-1 * b) + (b**2 -4 * a * c)**0.5;
            sols = sols / (2 * a);
            
            solr = (-1 * b)-(b**2 - 4 * a * c)**0.5;
            solr = solr / (2 * a);
        
            result = (sols.toFixed(2)+" y "+solr.toFixed(2));
        
            pantalla.textContent = result;
            return;
        }

        if (boton.id === "prodnota") {
            var a = prompt("Introduzca el valor de a");
            var b = prompt("Introduzca el valor de b");
            
            pantalla.textContent = (a)**2 + 2 * a * b + (b)**2;
            return;
        }

        if (boton.id === "acir") {
            var num;
            num = pantalla.textContent;
            pantalla.textContent = 3.14159265359 * (num)**2;
            return;
        }

        if (boton.id === "igu") {
            pantalla.textContent = (pantalla.textContent)**0.5;
            return;
        }

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})