import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="my-container">
      {children}
      <h3>Componente Container hijo</h3>
    </div>
  );
};

export default Container;
