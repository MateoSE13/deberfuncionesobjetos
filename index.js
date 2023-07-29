function showObjects(array) {
    for (let i = 0; i < array.length; i++) {
      alert("El estudiante es " + array[i].nombre + " y tiene " + array[i].edad + " años");
    }
  }
  
  let students = [
    { nombre: "juan", edad: 20 },
    { nombre: "kevin", edad: 20 }
  ];
  
  showObjects(students);
  
