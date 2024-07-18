export default class Cl_empleado{
constructor(nombre, suelact, tipoemp){
    this.nombre = nombre
    this.suelact = suelact
    this.tipoemp = tipoemp
}
set nombre(n){
    this._nombre=n
}
get nombre(){
    return this._nombre
}
set suelact(sa){
    this._suelact=+sa
}
get suelact(){
    return this._suelact
}
set tipoemp(te){
    this._tipoemp=+te
}
get tipoemp(){
    return this._tipoemp
}
nuevsuel(){
    if(this.tipoemp==1){
        return this.suelact+(20/100*this.suelact)
    } else
            return this.suelact+(10/100*this.suelact)
}
}