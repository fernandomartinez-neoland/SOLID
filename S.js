export class Usuario {

    usuario={}

    registro(nombre){
        this.usuario.nombre=nombre;
    }

    Login(){
        console.log(this.usuario.nombre)
    }

    eliminarU(){}

    actualizarU(){}
}