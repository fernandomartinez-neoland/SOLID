class Paypal{
    pagar(){
        console.log("pagar con Paypal")
    }
}

class Stripe{
    pagar(){
        console.log("pagar con Stripe")
    }
}
class klarna{
    pagar(){
        console.log("pagar con klarna")
    }
}


export class Tienda{
    constructor(){

        this.metodoPago= new Stripe();
    }
    HacerPago(){
        this.metodoPago.pagar()
    }
}