import { useCallback, useState } from "react";

export default function CandyDispenser() {
  const initialCandies = ["snickers", "skittles", "twix", "milky way"];
  const [candies, setCandies] = useState(initialCandies);

  //original
  // const dispense = (candy) => {
  //   setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  // };
  console.log("rerendering...");
  const dispense = useCallback((candy) => {
    setCandies((prevCandies) => prevCandies.filter((c) => c !== candy));
  }, []);
  return (
    <div>
      <h1>Candy Dipenser</h1>
      <main>
        <div>Available candies</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>Refil</button>
        ) : (
          <ul>
            {candies.map((candy) => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>Grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
