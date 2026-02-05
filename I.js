export class Ave{
    hacerRuido(){
        console.log("haciendo ruido")
    }
}

export class AveVoladora extends Ave{
    volar(){
        console.log("Volando")
    }
}

export class AveAcuatica extends Ave{

    nadar(){
        console.log("nadando")
    }
}

export class Pinguino extends AveAcuatica{

}