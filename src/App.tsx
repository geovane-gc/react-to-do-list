import { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Item from "./components/Item";

type Item = {
  id: number;
  title: string;
  isDone: boolean;
};

type Items = Array<Item>;

function App() {
  const [items, setItems] = useState<Items>([]);
  const [text, setText] = useState<string>("");

  const createItem = (event: React.FormEvent<EventTarget>, title: string) => {
    event.preventDefault();

    if (title) {
      const newItem: Item = {
        id: Math.random(),
        title: title,
        isDone: false,
      };

      setItems((items: Items) => [...items, newItem]);
      setText("");
    }
  };

  const deleteItem = (id: number) => {
    setItems((items: Items) => items.filter((task: Item) => task.id !== id));
  };

  const loadItems = () => {
    const testItem = [
      {
        id: Math.random(),
        title: "Item test",
        isDone: true,
      },
      {
        id: Math.random(),
        title: "Item test 2",
        isDone: false,
      },
    ];

    setItems(testItem);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="page-container">
      <div className="content-division">
        <h1 className="page-title">Today's tasks</h1>

        <div className="list-container">
          {items?.map((item: Item) => (
            <Item key={item.id} id={item.id} title={item.title} isDone={item.isDone} deleteItem={deleteItem} />
          ))}

          {items?.length === 0 && (
            <span>You don't have any tasks yet!</span>
          )}
        </div>
      </div>

      <AddItem text={text} setText={setText} createItem={createItem} />
    </div>
  );
}

export default App;
