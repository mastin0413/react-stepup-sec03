import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("最初");
  const [text, setText] = useState("");
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
