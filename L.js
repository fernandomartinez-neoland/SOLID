export class Padre {
  llamada() {
    console.log("llamar Esposa");
  }
}

export class Hijo extends Padre {
  llamada() {
    console.log("llamar a mmama");
  }
}
