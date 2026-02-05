import { Usuario } from "./S.js";
import { Token } from "./O.js";
import { Hijo, Padre } from "./L.js";
import { Pinguino} from "./I.js"
import { Tienda } from "./D.js";

const usuario = new Usuario();

usuario.registro("Marc");

usuario.Login();

usuario.registro("Alejo");

usuario.Login();

const token =new Token();

token.login();
token.token();


const llamar= new Hijo()
const padre= new Padre();

padre.llamada();

llamar.llamada();

const pinguino= new Pinguino();

pinguino.nadar();
pinguino.hacerRuido();

const tienda= new Tienda();

tienda.HacerPago();