

function calcularCaloriasMantenimiento(peso, altura, edad, actividad) {
    if (actividad === "LIGERO") {
      return 1.375 * (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad);
    } else if (actividad === "MODERADO") {
      return 1.55 * (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad);
    } else if (actividad === "ACTIVO") {
      return 1.725 * (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad);
    } else {
      return; 
    }
  }
  

let userData = null;
let planAdecuadoEncontrado = false;
let planAdecuado = null; 

  while (true) {
  bienvenido = prompt("Bienvenido al contador de calorías de mantenimiento. Para seguir, escriba CONTINUAR, o para salir, escriba CANCELAR");
  
  if (bienvenido === "CANCELAR" || bienvenido === "cancelar") {
      break;
    }
  
  if (bienvenido !== "CONTINUAR" && bienvenido !== "continuar") {
      console.log("Palabra no registrada. Para seguir, escriba CONTINUAR, o para salir, escriba CANCELAR");
      continue;
    }

    nombre = prompt("Ingrese su nombre para continuar, o para salir, escriba CANCELAR");

    if (nombre === "CANCELAR" || nombre === "cancelar") {
      break;
    }  
  
  edad = prompt("Ingrese su edad para continuar, o para salir, escriba CANCELAR");
  
    if (edad === "CANCELAR") {
      break;
    }
  
  edad = parseInt(edad);
  
  if (isNaN(edad)) {
      console.log("Ingrese un valor válido.");
      continue;
    }
  
    console.log("La edad que ingresó es de " + edad);
  
    altura = prompt("Ingrese su altura en CM para continuar, o para salir, escriba CANCELAR");
  
   if (altura === "CANCELAR" || altura === "cancelar") {
      break;
    }
  
    altura = parseInt(altura);
  
    if (isNaN(altura)) {
      console.log("Ingrese un valor válido.");
      continue;
    }
  
    console.log("La altura que ingresó es de " + altura + " CM");
  
    peso = prompt("Ingrese su peso en KG para continuar, o para salir, escriba CANCELAR");
  
    if (peso === "CANCELAR" || peso === "cancelar") {
      break;
    }
  
    peso = parseInt(peso);
  
    if (isNaN(peso)) {
      console.log("Ingrese un valor válido.");
      continue;
    }
  
    console.log("El peso que ingresó es de " + peso + " kg");
  
    actividad = prompt("Ingrese su nivel de actividad de los siguientes: LIGERO, MODERADO, ACTIVO. o para salir, escriba CANCELAR");
  
    if (actividad === "CANCELAR" || actividad === "cancelar") {
      break;
    }
  
    if (actividad !== "LIGERO" && actividad !== "MODERADO" && actividad !== "ACTIVO") {
      console.log("Ingrese un nivel de actividad válido.");
      continue;
    }
  
    caloriasDeMantenimiento = calcularCaloriasMantenimiento(peso, altura, edad, actividad);

    if (actividad == "LIGERO" || actividad == "MODERADO" || actividad == "ACTIVO") {
      console.log("Gracias por utilizar nuestro servicio. Sus calorías de mantenimiento son de " + caloriasDeMantenimiento);
      userData = {
        nombre: nombre,
        edad: edad,
        altura: altura,
        peso: peso,
        actividad: actividad,
        caloriasDeMantenimiento: caloriasDeMantenimiento,
        planSeleccionado: planAdecuado
      };
      break; 
    }
}


const planesAlimentacion = [
  { nombre: "Plan alimentación", precio: 4000 },
  { nombre: "Plan alimentación completo", precio: 6300 },
  { nombre: "Plan alimentación y entrenamiento completo", precio: 7900 },
];

let seleccionarPrecio;
let venta;
let planes;



while (true) {
  venta = prompt("Ahora que sabe sus requerimientos, escriba CONTINUAR para seguir y comprar un plan de alimentación, o para salir, escriba CANCELAR");

  if (venta === "CANCELAR" || venta === "cancelar") {
    break;
  }

  if (venta !== "CONTINUAR" && venta !== "continuar") {
    console.log("Palabra no registrada. Para seguir, escriba CONTINUAR, o para salir, escriba CANCELAR");
    continue;
  }

  planes = prompt("1- Descenso de peso / Pérdida de grasa, 2- Aumento de masa muscular. Escriba el número según el plan que requiere. O para salir, escriba CANCELAR ");

  if (planes === "CANCELAR" || planes === "cancelar") {
    break;
  }

  
  if (planes === "1") {
    console.log("Usted seleccionó el plan Descenso de peso / Pérdida de grasa");
    
    seleccionarPrecio = prompt("Escriba un rango de precio entre $4000-$8000 y el sistema le dirá el plan que se adapte a su presupuesto. O para salir, escriba CANCELAR");

    if (seleccionarPrecio === "CANCELAR" || seleccionarPrecio === "cancelar") {
      break;
    }

    seleccionarPrecio = parseInt(seleccionarPrecio);

    if (isNaN(seleccionarPrecio) || seleccionarPrecio < 4000 || seleccionarPrecio > 8000) {
      console.log("Ingrese un valor válido dentro del rango de precio.");
      continue;
    }
    planAdecuado = planesAlimentacion
    .filter(plan => plan.precio >= 4000 && plan.precio <= 8000)
    .reduce((planPrevio, planActual) => {
      const diferenciaPrevia = Math.abs(planPrevio.precio - seleccionarPrecio);
      const diferenciaActual = Math.abs(planActual.precio - seleccionarPrecio);
      return diferenciaActual < diferenciaPrevia ? planActual : planPrevio;
    });

    console.log("El plan adecuado para su presupuesto es:");
    console.log(planAdecuado);

    planAdecuadoEncontrado = true;
    break;
  }

  if (planes === "2") {
    console.log("Usted seleccionó el plan Aumento de masa muscular");

  

    
  }

  if (planes === "2") {
    console.log("Usted seleccionó el plan Aumento de masa muscular");
    
    seleccionarPrecio = prompt("Escriba un rango de precio entre $4000-$8000 y el sistema le dirá el plan que se adapte a su presupuesto. O para salir, escriba CANCELAR");

    if (seleccionarPrecio === "CANCELAR" || seleccionarPrecio === "cancelar") {
      break;
    }

    seleccionarPrecio = parseInt(seleccionarPrecio);

    if (isNaN(seleccionarPrecio) || seleccionarPrecio < 4000 || seleccionarPrecio > 8000) {
      console.log("Ingrese un valor válido dentro del rango de precio.");
      continue;
    }

     planAdecuado = planesAlimentacion
    .filter(plan => plan.precio >= 4000 && plan.precio <= 8000)
    .reduce((planPrevio, planActual) => {
      const diferenciaPrevia = Math.abs(planPrevio.precio - seleccionarPrecio);
      const diferenciaActual = Math.abs(planActual.precio - seleccionarPrecio);
      return diferenciaActual < diferenciaPrevia ? planActual : planPrevio;
    });

  console.log("El plan adecuado para su presupuesto es:");
  console.log(planAdecuado);  

  planAdecuadoEncontrado = true;
  break;

    
  }


  if (planes !== "1" && planes !== "2") {
    console.log("Por favor, ingrese un valor correcto.");
    continue;
  }

  if (planAdecuadoEncontrado) {
    console.log("Gracias por utilizar nuestro servicio.");
  } 
  

 
  
  

  
}

if (userData) {
  localStorage.setItem('userData', JSON.stringify(userData));

  const userDataContainer = document.getElementById('userDataContainer');
  userDataContainer.innerHTML = `
    <h2>Datos del Usuario</h2>
    <p>Nombre: ${userData.nombre}</p>
    <p>Edad: ${userData.edad}</p>
    <p>Altura: ${userData.altura} CM</p>
    <p>Peso: ${userData.peso} KG</p>
    <p>Actividad: ${userData.actividad}</p>
    <p>Calorías de Mantenimiento: ${userData.caloriasDeMantenimiento}</p>
    <p>Plan Seleccionado: ${userData.planSeleccionado ? userData.planSeleccionado.nombre : 'No seleccionado'}</p>
  `;

  
  userDataContainer.style.display = 'block';
}








  












