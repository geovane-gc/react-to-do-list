import { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Item from "./components/Item";

type Item = {
  id: number;
  title: string;
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
      };

      setItems((items: Items) => [...items, newItem]);
      setText("");
    }
  };

  const deleteItem = (id: number) => {
    setItems((items: Items) => items.filter((task: Item) => task.id !== id));
  };

  const loadItems = async () => {
    const testItem = [
      {
        id: Math.random(),
        title: "Item test",
      },
      {
        id: Math.random(),
        title: "Item test 2",
      },
      {
        id: Math.random(),
        title: "Item test 3",
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
            <Item id={item.id} title={item.title} deleteItem={deleteItem} />
          ))}
        </div>
      </div>

      <AddItem text={text} setText={setText} createItem={createItem} />
    </div>
  );
}

export default App;
