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
          To acheive {calcData.desiredGramsFlour} grams of high gluten flour at
          a gluten percentage of {calcData.desiredGlutenPercent}:
        </h3>

        <div className={"wrapperStyle"}>
          <label className={"labelStyle"}>
            Amount of flour (at {calcData.currentFlourGlutenPercent} percent
            gluten) required: {amtFlourReq} grams.
          </label>
        </div>

        <div className={"wrapperStyle"}>
          <label className={"labelStyle"}>
            Amount of Variable Wheat Gluten (at{" "}
            {calcData.variableWheatGlutenPrecent}) required:{" "}
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
