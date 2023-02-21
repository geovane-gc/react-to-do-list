import "./styles.css";

interface Props {
  text: string;
  setText: (text: string) => void;
  createItem: (event: React.FormEvent<EventTarget>, text: string) => void;
}

const AddItem: React.FC<Props> = ({ text, setText, createItem }) => {
  return (
    <div className="new-item-container">
      <form className="new-item-form" onSubmit={(event) => createItem(event, text)}>
        <input
          value={text}
          placeholder="Write a task"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={text.length === 0}>+</button>
      </form>
    </div>
  );
};

export default AddItem;
