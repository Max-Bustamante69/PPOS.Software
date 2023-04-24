
//Declaracion de cada seccion, dentro de su estructura cuenta con Introduccion, preguntas y respuestas

class Secciones {
    constructor(intro, preguntas, respuestas) {

      this._intro = intro;
      this._preguntas = preguntas;
      this._respuestas = respuestas;

    };
  
    get intro() {
      return this._intro;
    }
  
    get preguntas() {
      return this._preguntas;
    }
  
     get respuestas() {
      return this._respuestas;
    }

    displaySection() {
        return this._intro + ("\n")+ Object.values(this._preguntas).join('\n');
    }
  }


  
  //Seccion sobre Los precios de nuestros planes
  const seccion_1 = new Secciones('Que plan de aguacates te interesa el dia de hoy?', {
    1: "1. 1 kilo semanal",
    2: "2. 2 kilos semanales ",
    3: "3. 4 Kilos semanales",
    4: "4. 6 Kilos semanales",
    5: "5. Retornar a la seccion anterior..."
  }, {
    1: "10 Dolares Mensuales",
    2: "18 Dolares Mensuales",
    3: "30 Dolares Mensuales",
    4: "35 Dolares Mensuales",
  });
  
  //Seccion sobre envios
  const seccion_2 = new Secciones('Cual es tu Duda Puntual?', 
  {
    1: "1. Cuanto Cuesta el Envio?",
    2: "2. Que dias se hacen los Envios? ",
    3: "3. En que sectores estan disponibles los envios?",
    4: "4. Cuantos Dias a la semana se hacen los envios?",
    5: "5. Retornar a la seccion anterior..."
  }, {
    1: "Nuestro Envio Es Totalmente Gratis",
    2: "Esto dependera de la localidad en la que te encuentres",
    3: "Tenemos envios en todo el Valle de Aburra",
    4: "Solo 1 dia a la semana",
  });
  

  //Seccion  sobre recoleccion y residuos
  const seccion_3 = new Secciones('Cual es tu Duda Puntual?', 
   {
    1: "1. Que Dias se hace la recoleccion?",
    2: "2. Que es lo que debo conservar para hacer efectivo el sistema?",
    3: "3. Cuanto sera mi porcentaje de descuento?",
    4: "4. Como se vera reflejado ese descuento?",
    5: "5. Retornar a la seccion anterior..."
  }, {
    1: "Dependera de tu lugar de residencia",
    2: "La pepa de el aguacate",
    3: "Dependera de la cantidad de Residuos que recojas, a continuacion una tabla: ",
    4: "Devolucion de efectivo",
  });

  //Seccion sobre datos alrededor de el aguacate
  const seccion_4 = new Secciones('Cual es tu Duda Puntual?', 
   {
    1: "1. Datos Historia y cultura",
    2: "2. Datos Nutrición y salud",
    3: "3. Datos Cultivo y producción",
    4: "4. Otros datos curiosos",
    5: "5. Retornar a la seccion anterior..."
  }, {
    1: "El aguacate Hass fue descubierto por Rudolph Hass en 1935. El árbol de aguacate Hass es el resultado del injerto de varias variedades de aguacate diferentes.",
    2: "El aguacate es una fruta con alto contenido de grasas saludables y nutrientes esenciales como vitamina C, vitamina K, ácido fólico y potasio.Comer aguacate regularmente puede reducir el riesgo de enfermedades cardíacas, disminuir el colesterol y mejorar la salud ocular.",
    3: "El aguacate Hass es la variedad de aguacate más cultivada en todo el mundo. Los árboles de aguacate Hass pueden tardar varios años en dar frutos y pueden producir hasta 200 aguacates por árbol cada año.",
    4: "El aguacate Hass se considera una fruta debido a su origen botánico, pero se utiliza comúnmente como verdura en la cocina. El aguacate es una fruta tropical, pero se cultiva en todo el mundo en áreas con climas adecuados.",
  });
  

  //Seccion inicial
  const seccion_inicial= new Secciones('Buenos Dias! Sobre que tema te puedo asesorar el dia de hoy', {
    1: "1. Precios de las subscripciones",
    2: "2. Metodologia de envio",
    3: "3. Sistema de Recoleecion y Descuentos",
    4: "4. Datos Sobre el Aguacate",
    5: "5. Otro..."
  }, {
    //Las respuestas de esta seccion serian directamente cada una de las secciones secundarias, se hace un callback hacia ellas
    1: seccion_1.displaySection(),
    2: seccion_2.displaySection(),
    3: seccion_3.displaySection(),
    4: seccion_4.displaySection()
  });

 module.exports = {seccion_inicial, seccion_1, seccion_2, seccion_3, seccion_4};
