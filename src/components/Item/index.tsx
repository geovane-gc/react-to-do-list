import "./styles.css";

interface Props {
  id: number;
  title: string;
  deleteItem: (id: number) => void;
}

const Item: React.FC<Props> = ({ id, title, deleteItem }) => {
  return (
    <div className="item-container">
      <section className="item-divisory">
        <input type="checkbox" />
        <span className="item-title">{title}</span>
      </section>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
};

export default Item;