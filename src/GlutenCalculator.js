export function GlutenCalculator({ calcData }) {
  //
  //determines the amount of flour (original flour) user requires to
  //make the high gluten bread at the specified gluten percentage. The amount
  //of variable wheat gluten is  (total desired flour in grams) - (value returned from this function)
  const calcFlourRequired = () => {
    const hasEmptyField = Object.values(calcData).some((v) => v === "");
    if (hasEmptyField) {
      return -1; // return must be negative for components to render correctly
    }
    const desiredGramsFlour = parseFloat(calcData.desiredGramsFlour);
    const desiredGlutenPercent = parseFloat(calcData.desiredGlutenPercent);
    const currentFlourGlutenPercent = parseFloat(
      calcData.currentFlourGlutenPercent,
    );
    const variableWheatGlutenPrecent = parseFloat(
      calcData.variableWheatGlutenPrecent,
    );

    const num =
      desiredGramsFlour * (desiredGlutenPercent - variableWheatGlutenPrecent);
    const den = currentFlourGlutenPercent - variableWheatGlutenPrecent;
    const amtCurrentFlour = num / den;

    return amtCurrentFlour.toFixed(0);
  };

  const amtFlourReq = calcFlourRequired();

  const displayCalculation = () => {
    return (
      <>
        <h3>
          To acheive {calcData.desiredGramsFlour} grams of flour at{" "}
          {calcData.desiredGlutenPercent}% gluten:
        </h3>

        <div className={"wrapperStyle"}>
          <label className={"labelStyleGrey"}>
            Amount of flour (at {calcData.currentFlourGlutenPercent}% gluten)
            required:{" "}
          </label>

          <label className={"labelStyle"}>{amtFlourReq} grams.</label>
        </div>

        <div className={"wrapperStyle"}>
          <label className={"labelStyle"}>
            Amount of Variable Wheat Gluten (at{" "}
            {calcData.variableWheatGlutenPrecent}% protein) required:{" "}
          </label>

          <label className={"labelStyle"}>
            {calcData.desiredGramsFlour - amtFlourReq} grams.
          </label>
        </div>
      </>
    );
  };

  const displayWaitingMessage = () => {
    return (
      <div className={"wrapperStyle"}>
        <label className={"labelStyle"}>
          <h4>...Calculator is Awaiting Input...</h4>
        </label>
      </div>
    );
  };

  return (
    <div>
      <hr />
      {amtFlourReq > 0 ? displayCalculation() : displayWaitingMessage()}
    </div>
  );
}
