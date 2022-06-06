import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Colección 2022</h2>
      <hr />

      {items.map((item) => {
        console.log(item);
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
