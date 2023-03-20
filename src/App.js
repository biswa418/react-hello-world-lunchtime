function App() {
  let time = new Date();

  let hours = time.getHours();

  let current;

  if (hours < 12) {
    current = "Breakfast";
  } else if (hours < 20) {
    current = "Lunch";
  } else {
    current = "Dinner";
  }

  return (
    <div className={current}>
      <h1>{current} time</h1>
    </div>
  );
}

export default App;
