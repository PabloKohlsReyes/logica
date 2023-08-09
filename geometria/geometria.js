
let area = prompt('Ingrese el nombre de la figura geometrica del que desea hallar su area');

let altura, base,radio, respuesta;


switch (area) {
    case 'triangulo':
        base = prompt('Ingrese la base del triangulo')
        altura = prompt('Ingrese la altura del triangulo')
        respuesta = (base*altura)/2;
        alert(`El area del triangulo es ${respuesta}`)        
        break;
    case 'rectangulo':
        base = prompt('Ingrese la base del rectangulo')
        altura = prompt('Ingrese la altura del rectangulo')
        respuesta = (base*altura);
        alert(`El area del rectangulo es ${respuesta}`)        
        break;
    case 'circulo':
        radio = prompt('Ingrese el radio del circulo');
        // respuesta = Math.PI * (Math.pow(radio, 2));
        respuesta = Math.PI * (radio**2)
        alert(`El area del circulo es ${respuesta}`);
        break;
    default:
        alert('USUARIO TONTO,SOLO PUEDO HALLAR EL AREA DE TRIANGULO, RECTANGULO O CIRCULO, ANDÀ PA ALLÁ BOBO')
        break;
}