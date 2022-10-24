import { useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";

function App() {
  //useState update the value
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen p-10 flex space-x-6 bg-gray-300">
      <Card>
        <Dropdown />
        <Dropdown />
      </Card>
    </div>
  );
}

export default App;
