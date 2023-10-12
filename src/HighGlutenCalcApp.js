import { useState } from "react";
import { EntryForm } from "./EntryForm";
import { initialValues } from "./calcData";

export default function HighGlutenCalcApp() {
  const [calcData, setCalcData] = useState(initialValues);
  return (
    <div className="App">
      <h3>High Gluten Calculator</h3>
      <EntryForm calcData={calcData} setCalcData={setCalcData} />
      {console.log(calcData)}
    </div>
  );
}
