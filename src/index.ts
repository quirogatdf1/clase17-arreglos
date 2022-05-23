const btnIniciar = document.getElementById("btnIniciar");

btnIniciar?.addEventListener("click", () => {
  /* Definir variables */
  let arregloA: number[] = new Array(6);
  let arregloB: number[] = new Array(6);

  function cargarArray(arreglo: number[]) {
    for (let i = 0; i < arreglo.length; i++) {
      arreglo[i] = Number(
        prompt(`Ingese un valor númerico, para almacenar en la posición ${i}`)
      );
      //alert(`El valor ${arreglo[i]} fue guardado en la posición ${i}`)
    }
  }

  cargarArray(arregloA);
  cargarArray(arregloB);

  /* Sumar los dos arreglos */
  let sumaArreglos: number[] = new Array(6);
  for (let i = 0; i < arregloA.length; i++) {
    sumaArreglos[i] = arregloA[i] + arregloB[i];
  }
  console.log("arregloA", arregloA);
  console.log("arregloB", arregloB);
  console.log("sumaArreglos", sumaArreglos);
});
