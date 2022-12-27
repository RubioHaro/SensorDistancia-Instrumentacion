export function bintodec(cadenaBits){
    return parseInt(cadenaBits, 2);
}

export function voltajeResolucion(voltajeAlcance, numeroBits){
    return (voltajeAlcance/(Math.pow(2, numeroBits)-1)).toFixed(6);
}

export function voltajeSalida(voltajeRes, numeroDecimal){
    return (numeroDecimal*voltajeRes).toFixed(4);
}

export function voltajeSensor(E1, Vsal){
    return (E1*2-Vsal)/2;
}

export function resistenciaSensor(fuenteE, resistencia, Vsen){
    return (Vsen*resistencia)/(fuenteE-Vsen);
}

export function distanciaCalculada(pendiente, distanciaAlOrigen, Rsen){
    return ((distanciaAlOrigen-Rsen)/(-pendiente)).toFixed(2);
}

export function calculo(cadena_bits){
    //Datos dados por el problema 
    let numeroBits=8;
    let voltajeAlcanceADC=5;
    let voltajeE = 5;
    let E1 = voltajeE/2;
    // Establecemos el valor de resistencia si es el inferior o superior
    let resistenciaSuperior= 9944;
    //Datos de la ecuación
    let pendiente = -1464.6;
    let distanciaAlOrigen = 9944;
    //Valores obtenidos
    const Vres = voltajeResolucion(voltajeAlcanceADC, numeroBits);
    // console.log(Vres)
    /*
    Regresar la cadena de bits del arduino a un decimal
    let valorDecimal= bintodec("10010101");
    */
    //El segundo atributo de voltaje de salida debera ser valorDecimal
    //AQUI ES DONDE SE TIENE QUE PONER LA VARIABLE QUE ENTRA EN EL PUERTO Y CREAR UN LOOP PARA QUE SE EJECUTE CADA QUE CAMBIE
    const noDecimal = bintodec(cadena_bits);
    // console.log(noDecimal)
    const Vsal = voltajeSalida(Vres, noDecimal);
    // console.log(Vsal)
    const Vsen = voltajeSensor(E1, Vsal);
    // console.log(Vsen)
    const Rsen = resistenciaSensor(voltajeE, resistenciaSuperior, Vsen);
    // console.log(Rsen)
    const distancia = distanciaCalculada(pendiente, distanciaAlOrigen, Rsen);
    // console.log(distancia)    
    return [Vres, Vsal, Vsen, Rsen, distancia];
}