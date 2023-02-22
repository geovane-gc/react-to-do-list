import { useState } from "react";
import "./styles.css";

interface Props {
  id: number;
  title: string;
  isDone: boolean;
  deleteItem: (id: number) => void;
}

const Item: React.FC<Props> = ({ id, title, isDone, deleteItem }) => {
  const [isChecked, setChecked] = useState<boolean>(isDone);

  const changeItemStatus = () => {
    setChecked(!isChecked);
    isDone = !isDone;
  };

  return (
    <div className={isChecked ? "active-item-container" : "item-container"}>
      <section className="item-divisory">
        <input
          onChange={changeItemStatus}
          type="checkbox"
          checked={isChecked}
        />
        <span className="item-title">{title}</span>
      </section>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
};

export default Item;
