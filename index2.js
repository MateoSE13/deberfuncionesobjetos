function showObjects(array) {
    for (let i = 0; i < array.length; i++) {
      const persona = array[i];
      let calificacion = "no califica";
  
      if (persona.edad >= 18 || (persona.edad > 5 && persona.edad < 65)) {
        calificacion = "califica";
      }
  
      alert("La persona es " + persona.nombre + " y tiene " + persona.edad + " años. Esta persona " + calificacion + " para la vacuna del COVID-19.");
    }
  }
  
  let people = [
    { nombre: "juan", edad: 20 },
    { nombre: "kevin", edad: 70 },
    { nombre: "maría", edad: 8 },
    { nombre: "ana", edad: 50 },
    { nombre: "lucía", edad: 4 },
    { nombre: "pedro", edad: 80 }
  ];
  
  showObjects(people);
  
  