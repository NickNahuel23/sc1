const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    desc: "una descripción",
    precio: 1200,
    img: "https://raw.githubusercontent.com/sofiacartacci/sc/f9a68f9ae67684ac6fef82697a0e182255fe21ad/public/Assets/IMG_04.jpg",
  },
  {
    id: 2,
    nombre: "Producto 1",
    desc: "una descripción",
    precio: 1200,
    img: "https://raw.githubusercontent.com/sofiacartacci/sc/f9a68f9ae67684ac6fef82697a0e182255fe21ad/public/Assets/IMG_03.jpg",
  },

  {
    id: 3,
    nombre: "Producto 1",
    desc: "una descripción",
    precio: 1200,
    img: "image.png",
  },

  {
    id: 4,
    nombre: "Producto 1",
    desc: "una descripción",
    precio: 1200,
    img: "https://raw.githubusercontent.com/sofiacartacci/sc/f9a68f9ae67684ac6fef82697a0e182255fe21ad/public/Assets/IMG_01.jpg",
  },

  {
    id: 5,
    nombre: "Producto 1",
    desc: "una descripción",
    precio: 1200,
    img: "https://raw.githubusercontent.com/sofiacartacci/sc/f9a68f9ae67684ac6fef82697a0e182255fe21ad/public/Assets/IMG_04.jpg",
  },
];

export const ItemListContainer = () => {
  // const promesa = new Promise((resolve, reject) => {
  // resolve("Promesa resuelta");
  //reject("Promesa rechazada");
  // });

  // me trae el resolve de la promesa
  // promesa.then((data) => {
  // console.log(data);
  // });

  // console.log(promesa);

  //
  // promesa.catch((error) => {
  // console.log(error);
  //});

  //promesa.then((resp) => {
  //  console.log(resp)
  //})
  //.catch((error) => {
  //  console.log("ERROR:", error)
  //})

  const pedirDatos = (retornar) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (retornar) {
          resolve("Promesa resuelta");
        } else {
          reject("Promesa rechazada");
        }
      }, 2000);
    });
  };

  pedirDatos(false)
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });

  return (
    <section className="container my-5">
      <h2>Nuestros productos</h2>
      <hr />
    </section>
  );
};
