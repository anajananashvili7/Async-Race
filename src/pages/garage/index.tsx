import { useCallback, useState } from "react";

import Control from "./parts/control/index.js";
import List from "./parts/list/index.js";
import { getCars } from "./helpers.js";

let currentPage = 0;

const Garage = () => {
  const [cars, setCars] = useState({ items: [], totalItems: 0 });
  const [selected, setSelected] = useState(null);

  const getCarsData = useCallback((page) => {
    getCars(page || currentPage, 5).then((data) => setCars(data));
    if (page) currentPage = page;
  }, []);

  return (
    <div>
      <Control
        getCarsData={getCarsData}
        setSelected={setSelected}
        selected={selected}
      />

      <List cars={cars} getCarsData={getCarsData} setSelected={setSelected} />
    </div>
  );
};

export default Garage;
