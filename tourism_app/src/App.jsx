import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {

  const [tours, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;