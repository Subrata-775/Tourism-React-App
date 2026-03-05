import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {

  const [tours, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 className="heading-ref">No Tours Left</h2>
        <button className="btn-red" onClick={() => setTour(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;