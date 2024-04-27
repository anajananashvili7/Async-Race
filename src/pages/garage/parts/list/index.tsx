import { useEffect, useState } from "react";
import Button from "../../../../components/buttons";
import styles from "./index.module.css";
import Car from "../car";

const List = ({ cars, getCarsData, setSelected }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCarsData(page);
  }, [getCarsData, page]);

  useEffect(() => {
    if (cars.totalItems && cars.items.length === 0) paginate(-1);
  }, [cars]);

  const paginate = (newPage) => setPage((prev) => prev + newPage);

  if (!cars) return null;

  return (
    <div className={styles.container}>
      {cars.items.map((car) => (
        <Car
          key={car.id}
          car={car}
          getCarsData={getCarsData}
          setSelected={setSelected}
        />
      ))}

      <div className={styles.pagination}>
        <Button disabled={page === 1} onClick={() => paginate(-1)}>
          Previous
        </Button>
        <Button
          disabled={page * 5 >= cars.totalItems}
          onClick={() => paginate(1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default List;
