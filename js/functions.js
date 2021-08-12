
//Guardar en el localStorage
const agregarContacto = (contacto)=>{
   let lista = obtenerContacto();
   lista = [...lista, contacto]; //lista.push(contacto);
   localStorage.setItem("contactos", JSON.stringify(lista));
};

//Obtener desde el localStorage
const obtenerContacto = (filtro = null)=>{
   //Esto devuelve un string o undefined
   let lista = localStorage.getItem("contactos");
   if(lista){
      lista = JSON.parse(lista);
   } else {
      lista = [];
   }
   //Están filtrando
   if(filtro != null){
      //Filtrar la lista para traer sólo cuando el filtro está en alguna parte
      lista = lista.filter( c => c.nombre.includes(filtro) 
      || c.correo.includes(filtro) 
      || c.telefono.includes(filtro))
   }
   return lista;
};
