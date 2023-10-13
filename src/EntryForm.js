/*
 * Purpose: Takes in user input and populates the calculator data (so calculation
 * component can  use the data)
 * */
export function EntryForm({ calcData, setCalcData }) {
  //data entry detects invalid entries using a regular expression
  const handleDataEntry = (e) => {
    const { name, value } = e.target;
    const floatRegExExpr = /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    const passedTest = floatRegExExpr.test(value);

    //empty string is here to allow user to delete the contents of the input textarea
    if (value === "" || passedTest) {
      setCalcData((prevData) => {
        return { ...prevData, [name]: value };
      });
    }
  };
  //when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="entryForm">
      <h5>
        Don't convert percentages to decimal (e.g. ten point five percent should
        be entered as "10.5").
      </h5>

      <form onSubmit={handleSubmit}>
        <div className={"wrapperStyle"}>
          <label className={"labelStyleGrey"}>Desired Gluten Percentage:</label>
          <input
            className={"inputStyle"}
            type={"text"}
            name="desiredGlutenPercent"
            placeholder={"15%"}
            value={calcData.desiredGlutenPercent}
            onChange={handleDataEntry}
          />
        </div>

        <div className={"wrapperStyle"}>
          <label className={"labelStyle"}>
            Desired Amount of Flour (grams):
          </label>
          <input
            className={"inputStyle"}
            type={"text"}
            name="desiredGramsFlour"
            placeholder={"2000 g"}
            value={calcData.desiredGramsFlour}
            onChange={handleDataEntry}
          />
        </div>

        <div className={"wrapperStyle"}>
          <label className={"labelStyleGrey"}>
            Current Flour's Gluten Percentage:
          </label>
          <input
            className={"inputStyle"}
            type={"text"}
            name="currentFlourGlutenPercent"
            placeholder={"11.5%"}
            value={calcData.currentFlourGlutenPercent}
            onChange={handleDataEntry}
          />
        </div>

        <div className={"wrapperStyle"}>
          <label className={"labelStyle"}>
            Percentage Protein of Variable Wheat Gluten:
          </label>
          <input
            className={"inputStyle"}
            type={"text"}
            name="variableWheatGlutenPrecent"
            placeholder={"75%"}
            value={calcData.variableWheatGlutenPrecent}
            onChange={handleDataEntry}
          />
        </div>
      </form>
    </div>
  );
}
// variableWheatGlutenPrecent
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
//                 <input className={"inputStyle"} type="text"
//                     id="floatBox"
//                     placeholder="Entry..."
//                     value={numVal}
//                     onChange={handelNumEntry}/>
//         </>
//     )
// }
