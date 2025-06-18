import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const statistics = (good, neutral, bad) => {
  return (
    <div>
      <h1>statistics</h1>

      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + neutral + bad} />
            <StatisticLine
              text="average"
              value={(good - bad) / (good + neutral + bad)}
            />
            <StatisticLine
              text="positive"
              value={(good / (good + neutral + bad)) * 100}
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <button
        onClick={() => {
          setGood(0);
          setNeutral(0);
          setBad(0);
        }}
      >
        reset
      </button>
      {statistics(good, neutral, bad)}
    </div>
  );
};

export default App;
