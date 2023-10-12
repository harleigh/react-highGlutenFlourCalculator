import { useState, useRef } from "react";

/**
 * This text box only takes floating point numbers, and (for fun)
 * sets an error flag if the user attempted to type a non-floating
 * number into the box
 */
// function FloatTextOnlyDynamic({numVal, setNumVal, setErrorInNumber}){
//     const floatRegExExpr = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/

//     const handelNumEntry = (event) => {
//         const enteredVal = event.target.value;

//         const passedTest = floatRegExExpr.test(enteredVal)

//         if(enteredVal==="" || passedTest){
//             setErrorInNumber(false)
//             setNumVal(enteredVal)
//         }
//         if(!passedTest){
//             setErrorInNumber(true)
//         }
//     }

//     return(
//         <>
//         <label htmlFor="floatBox">Give Floating Number: &nbsp;</label>
//                 <input type="text"
//                     id="floatBox"
//                     placeholder="Entry..."
//                     value={numVal}
//                     onChange={handelNumEntry}/>
//         </>
//     )
// }
export default function HighGlutenCalcApp() {
  return (
    <div className="App">
      <h3>High Gluten Calculator</h3>
    </div>
  );
}
