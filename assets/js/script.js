let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripciones = [];


function clickAgregarBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    if (valorGasto > 150) {
        alert("Advertencia: Controla tus gastos ¡Haz realizado un gasto mayor a US$ 150!");
    }
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripciones.push(descripcionGasto);
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripciones[posicion];
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Descripción: ${descripcionGasto}
                <div class="buttons-container">
                <button onclick="modificarGasto(${posicion});">Modificar</button>
                <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                </div>
                </li>`;
        totalGastos += valorGasto;
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = Number(totalGastos.toFixed(2));
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripciones.splice(posicion, 1);
    actualizarListaGastos();
}


function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripciones[posicion];
    let botonAgregar=document.getElementById('botonAgregar');
    botonAgregar.style.display='none';
    let htmlLista = `<button id="botonActualizar" onclick="clickActualizarBoton(${posicion});">Actualizar Gasto</button>`
    document.getElementById('cajonBotonActualizar').innerHTML = htmlLista;
}


function clickActualizarBoton(posicion) {
    listaNombresGastos[posicion] = document.getElementById('nombreGasto').value;
    listaValoresGastos[posicion] = document.getElementById('valorGasto').value;
    listaDescripciones[posicion] = document.getElementById('descripcionGasto').value;
    if (listaValoresGastos[posicion] > 150) {
        alert("Advertencia: Controla tus gastos ¡Haz realizado un gasto mayor a US$ 150!");
    }
    let botonAgregar=document.getElementById('botonAgregar');
    let botonActualizar=document.getElementById('botonActualizar')
    botonActualizar.style.display='none';
    botonAgregar.style.display='flex';
    actualizarListaGastos();
}




