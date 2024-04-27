import { useState } from "react";
import Button from "../../../../components/buttons";
import { deleteCar, startStopEngine } from "../../helpers";
import CarAnimation from "./carAnimation";

const Car = ({ car, getCarsData, setSelected }) => {
  const [animation, setAnimation] = useState({ status: "init" });

  const handleSelectCar = (car) => {
    //{...ცარ} ეს არის იმისთვის რო Form კომპონენტში რო უზეეფექტია თავიდან გამოიძახოს
    setSelected({ ...car });
  };

  const handleRemoveCar = ({ id }) => {
    deleteCar(id).then(() => getCarsData());
  };

  const handleAnimationStart = ({ id }) => {
    setAnimation({ status: "loading" });

    // ლოადინგი აჩვენე რამენაირად რო გაიგოს რო დაიწყო მოძრაობა
    startStopEngine(id, "started").then((res) => {
      console.log(res);

      setAnimation({ status: "started", ...res });

      startStopEngine(id, "drive").finally(() => {
        setAnimation({ status: "stopped" });
      });
    });
  };

  const handleAnimationStop = ({ id }) => {
    startStopEngine(id, "stopped").then(() => {
      setAnimation({ status: "init" });
    });
  };

  return (
    <>
      <div
        key={car.id}
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Button
            color={car.isSelected ? "lightgreen" : undefined}
            onClick={() => handleSelectCar(car)}
          >
            SELECT
          </Button>
          <Button color="coral" onClick={() => handleRemoveCar(car)}>
            REMOVE
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Button
            size="small"
            onClick={() => handleAnimationStart(car)}
            disabled={animation.status !== "init"}
          >
            A
          </Button>
          <Button
            size="small"
            onClick={() => handleAnimationStop(car)}
            disabled={animation.status === "init"}
          >
            B
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CarAnimation color={car.color} animation={animation} />
          <span
            style={{
              fontSize: "40px",
              color: "white",
              fontWeight: "700",
            }}
          >
            {car.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default Car;
