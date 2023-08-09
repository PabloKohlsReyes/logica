

function calculadora(a,b,operador) {
    switch (operador) {
        case '+':
            console.log(`La suma es: ${a+b}`);
            break;
        case '-':
            console.log(`La resta es: ${a-b}`);
            break;
        case 'x':
            console.log(`La multiplicacion es: ${a*b}`);
            break;
        case '/':
            console.log(`La divison es: ${a/b}`);
            break;
        case '^':
            console.log(`${Math.pow(a,b)}`);
            break;
        case '√':
            console.log(`Este numero elevado al cuadrado es ${Math.sqrt(b)}`);
            break;
        case 'mayor':
            console.log(`El numero mayor entre a y b es ${Math.max(a,b)}`);
            break;
        case 'menor':
            console.log(`El numero menor entre a y b es ${Math.min(a,b)}`);
            break;
        case 'redondeo'://para abajo
            console.log(`Este numero redondeado es igual a ${Math.trunc(a)}`);
            break;
        case 'redondea':
            console.log(`Este numero redondeado es igual a ${Math.ceil(a)}`);
            break;
        default:
            console.error('Por favor ingrese un operador valido');
            break;
           
    }    
}
calculadora(4.1,100, 'redondea')