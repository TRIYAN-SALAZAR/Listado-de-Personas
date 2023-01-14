export class Persona {
    _nombre:string;
    _apellido:string;

    constructor(nombre:string, apellido:string){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    /*
        sintaxis simplificada:
        constructor(public nombre: string, public apellido:string){
            this.nombre = nombre;
            this.apellido = apellido;
        }

        hacer esta sintaxis simplificada es el equivalente a realizar esto:
        
        _nombre:string;
        _apellido:string;
    
        constructor(nombre:string, apellido:string){
            this._nombre = nombre;
            this._apellido = apellido;
        }
    
    */
}