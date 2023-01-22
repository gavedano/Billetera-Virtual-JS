alert("Bienvenido a su Billetera Virtual");

let operaciones = parseInt(
  prompt(
    "Seleccione una operacion a realizar: \n 1- Consultar Saldo,\n 2- Datos de mi cuenta, \n 3- Depositos,\n 4- Extracciones,\n 5- Simulador Prestamos, \n 6- Salir "
  )
);

function sumar(numero1, numero2) {
  resultado = numero1 + numero2;
  return resultado;
}
function resta(numero1, numero2) {
  resultado = numero1 - numero2;
  return resultado;
}
function treintaPorciento(numero) {
  resultado = (30 * numero) / 100;
  return resultado;
}
function calculaPrestamo(monto, interes) {
  resultado = (interes * monto) / 100 + monto;
  return resultado;
}
function cuotaFinalPrestamo(monto, cuota) {
  resultado = monto / cuota;
  return resultado;
}
let saldo = 100000;
let interesDoceCuotas = 100;
let interesDieciochoCuotas = 150;
let interesVeinticuatroCuotas = 200;
while (operaciones != 6) {
  switch (operaciones) {
    case 1:
      console.log("El saldo de su cuenta es: $" + saldo);
      break;
    case 2:
      console.log(
        " ALIAS: MarceloMarquez.bl \n N° CUENTA: 125480000001 \n CBU: 215500031215454687987 \n CUIT: 20-35626897-2"
      );
      break;
    case 3:
      let deposito = parseInt(prompt("Cuanto desea depositar: $"));
      let nuevoSaldoDeposito = sumar(saldo, deposito);
      console.log(
        "Su nuevo saldo es: $" +
          nuevoSaldoDeposito +
          "\nGracias por usar nuestros servicios"
      );
      saldo = nuevoSaldoDeposito;
      break;
    case 4:
      let extraccion = parseInt(
        prompt("Saldo Actual: $" + saldo + "\nCuanto desea extraer: $")
      );
      if (saldo >= extraccion) {
        let nuevoSaldoExraccion = resta(saldo, extraccion);
        console.log(
          "Su nuevo saldo es: $" +
            nuevoSaldoExraccion +
            "\nGracias por usar nuestros servicios"
        );
        saldo = nuevoSaldoExraccion;
      } else {
        console.log("EL MONTO DE LA EXTRACCION SUPERA EL SALDO DISPONIBLE");
      }
      break;
    case 5:
      let prestamo = parseInt(prompt("Ingrese el monto a solicitar: $"));
      let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: "));
      if (cuotas == 12) {
        let montoFinalPrestamo = calculaPrestamo(prestamo, interesDoceCuotas);
        let cuotaFinal = cuotaFinalPrestamo(montoFinalPrestamo, cuotas);
        console.log(
          "Prestamo: $" +
            prestamo +
            "\nCantidad cuotas: " +
            cuotas +
            "\nMonto cuota: $ " +
            cuotaFinal
        );
      } else if (cuotas == 18) {
        let montoFinalPrestamo = calculaPrestamo(
          prestamo,
          interesDieciochoCuotas
        );
        let cuotaFinal = cuotaFinalPrestamo(montoFinalPrestamo, cuotas);
        console.log(
          "Prestamo: $" +
            prestamo +
            "\nCantidad cuotas: " +
            cuotas +
            "\nMonto cuota: $ " +
            cuotaFinal
        );
      } else if (cuotas == 24) {
        let montoFinalPrestamo = calculaPrestamo(
          prestamo,
          interesVeinticuatroCuotas
        );
        let cuotaFinal = cuotaFinalPrestamo(montoFinalPrestamo, cuotas);
        console.log(
          "Prestamo: $" +
            prestamo +
            "\nCantidad cuotas: " +
            cuotas +
            "\nMonto cuota: $ " +
            cuotaFinal
        );
      } else {
        alert("Ingrese una cantidad de cuotas validad: 12, 18 o 24");
      }
      break;
    default:
      console.log(
        "Seleccione un numero valido de operación dentro del listado"
      );
  }
  operaciones = parseInt(
    prompt(
      "Seleccione una operacion a realizar: \n 1- Consultar Saldo,\n 2- Datos de mi cuenta, \n 3- Depositos,\n 4- Extracciones,\n 5-Prestamos, \n 6- Salir "
    )
  );
}
