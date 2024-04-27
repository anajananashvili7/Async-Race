import Button from "../../../../components/buttons";
import { createCar, updateCar } from "../../helpers";
import Form from "../form";
import { generateRandomCars } from "./helpers";

import styles from "./index.module.css";

const Control = ({ getCarsData, setSelected, selected }) => {
  const onRace = () => {
    console.log("Race started!");

    // setCars((prev) =>
    //   prev.map((item) => ({ ...item, isAnimationStarted: true }))
    // );
  };

  const onReset = () => {
    // setCars((prev) =>
    //   prev.map((item) => ({ ...item, isAnimationStarted: false }))
    // );
  };

  const onGenerate = () => {
    const cars = generateRandomCars(5);
    cars.map(({ name, color }) => createCar(name, color));
    // Tell that write in base is takes long time
    Promise.all(cars).then(() => {
      setTimeout(() => getCarsData(), 500);
    });
  };

  const onCreate = ({ name, color }) => {
    createCar(name, color).then(() => getCarsData());
  };

  const onUpdate = ({ name, color }) => {
    if (!selected) return;
    updateCar(selected.id, name, color).then(() => getCarsData());
    setSelected(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button onClick={onRace}>RACE</Button>
        <Button onClick={onReset}>RESET</Button>
      </div>

      <div className={styles.form}>
        <Form label="CREATE" onSubmit={onCreate} />
        <Form selected={selected} label="UPDATE" onSubmit={onUpdate} />
      </div>

      <Button onClick={onGenerate}>GENERATE CARS</Button>
    </div>
  );
};

export default Control;
