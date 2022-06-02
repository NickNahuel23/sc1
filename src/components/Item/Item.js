const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.nombre}</h2>
      <img src={item.img} />
      <p>{item.desc}</p>
      <h4>Precio: ${item.precio}</h4>
    </div>
  );
};

export default Item;
