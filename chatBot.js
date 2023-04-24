const {seccion_inicial, seccion_1, seccion_2, seccion_3, seccion_4} = require("./secciones");

//Declaracion de la clas de chatBot
class Chatbot {
  constructor() {

    //Indicador, sobre que seccion se esta
    this.ID;

    //Secciones declaradas e importadas de el modulo de secciones
    this.secciones = {
      0: seccion_inicial,
      1: seccion_1,
      2: seccion_2,
      3: seccion_3,
      4: seccion_4
    }

  }

  iniciar() {
    //Cada que se presente el menu principal, se desplegara la seccion 0
    this.ID = 0;
    console.log( this.secciones[this.ID].displaySection()+ "\n"+"--------------------------------------");

  }

  responder(num) {
  try{
    // una ves se intente declarar una respuesta se establecera en que seccion se esta trabajando
    let seccionActual = this.secciones[this.ID];
  

    //se evaluara si se debe retornar a una seccion antes de evaluar las preguntas
    if(num <= Object.keys(seccionActual.preguntas).length  && seccionActual.preguntas[num].includes("Retornar")){
      
      this.iniciar();
    
    }

    else{
    
    //Se establece la rrespuesta segun los atributos de la seccion, y de la opcion seleccionada
    let respuesta = seccionActual.respuestas[num];


    if(respuesta == undefined){
      //si la respuesta no esta definida, se aclara que la entrada no es valida y debe volver a intentarlo
      throw new Error("Inserte una entrada Valida");
    };

    //Se imprimira la respuesta que esta destinada segun la definicion de las clases de el modulo Secciones
     console.log(respuesta+ "\n"+"--------------------------------------");
     this.ID == 0 ? this.ID = num : null;
    } 
  } catch (error) {

    //Manejo de errores
    if (error.message === "Inserte una entrada Valida") {
      console.log("Por favor,inserte una entrada válida.");
    } else {
      console.log ("Se ha producido un error:", error.message);
    }
  }
  }
}



module.exports = {Chatbot};



