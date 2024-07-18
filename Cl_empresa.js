export default class Cl_empleado{
    constructor(){
        this.acumsuel=589
    }
    procesarempleado(emp){
        this.acumsuel+=emp.nuevsuel()
    }
}