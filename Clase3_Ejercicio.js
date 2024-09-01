const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];
    
 
    console.log(personajesSimpsons);
    
    let mayoresDeEdad = personajesSimpsons.filter(personaje => personaje.edad >= 18);
    
    console.log(mayoresDeEdad);

    let sumaEdades = personajesSimpsons.reduce((acumulador, personaje) => acumulador + personaje.edad, 0);

    console.log(sumaEdades);

    let nombres = personajesSimpsons.map(personaje => personaje.nombre);

    console.log(nombres);

    let personajesModificados = personajesSimpsons.map(personaje => {
        let { nombre, edad, rol } = personaje;
        
        if (edad < 18) {
          rol = "Estudiante";
        }
        
        return { nombre, edad, rol };
      });
      
      console.log(personajesModificados);