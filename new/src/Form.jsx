import { useState } from "react";
export default function Form() {

  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
  //  console.log(e.)
    console.log(e.target.value,e.target.name)
  };

  return (
    <div className="App">
      <input type="text" name="saif" onChange={handleChange} /><br></br>
      <input type="text" name="lname" onChange={handleChange} />
    </div>
  );
}
