import { useState } from "react";
import { EntryForm } from "./EntryForm";
import { initialValues } from "./calcData";
import { GlutenCalculator } from "./GlutenCalculator";

export default function HighGlutenCalcApp() {
  //calcData has all of the input from the user to determine the high gluten flour amount
  const [calcData, setCalcData] = useState(initialValues);
  return (
    <div className="mainApp">
      <h3>High Gluten Calculator</h3>
      <EntryForm calcData={calcData} setCalcData={setCalcData} />
      <GlutenCalculator calcData={calcData} />
    </div>
  );
}
