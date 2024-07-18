import Cl_empleado from "./Cl_empleado.js";
import Cl_empresa from "./Cl_empresa.js";

let empresa= new Cl_empresa()
    let empleado1 = new Cl_empleado("Juan", 100, 1)
    let empleado2= new Cl_empleado("Ana", 120, 1)
    let empleado3= new Cl_empleado("Lin", 200, 2)
    let empleado4= new Cl_empleado("Mary", 50, 1)
    let empleado5= new Cl_empleado("Carlos", 150, 2)

    empresa.procesarempleado(empleado1,empleado2,empleado3,empleado4,empleado5)

    document.getElementById("salida")
    salida.innerHTML=`
    <br>${empleado1.nombre} tendra un sueldo de ${empleado1.nuevsuel()}$
    <br>${empleado2.nombre} tendra un sueldo de ${empleado2.nuevsuel()}$
    <br>${empleado3.nombre} tendra un suelda de ${empleado3.nuevsuel()}$
    <br>${empleado4.nombre} tendra un suelda de ${empleado4.nuevsuel()}$
    <br>${empleado5.nombre} tendra un suelda de ${empleado5.nuevsuel()}$
    <br>
    <br>El total de sueldos que debe pagar la empresa es de ${empresa.acumsuel}$
    `
