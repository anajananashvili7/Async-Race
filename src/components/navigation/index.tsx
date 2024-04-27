import { useCallback, useEffect } from "react";

import styles from "./index.module.css";
import Button from "../buttons";

const Navigation = ({ onChange }) => {
  const onGarageClick = useCallback(() => {
    onChange("garage");
    window.history.pushState(null, "", "/");
  }, [onChange]);

  const onWinnersClick = () => {
    onChange("winners");
    window.history.pushState(null, "", "/winners");
  };

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/winners") onChange("winners");
    else if (pathname === "/") onChange("garage");
    else onGarageClick();
  }, [onChange, onGarageClick]);

  return (
    <nav className={styles.container}>
      <Button onClick={onGarageClick}>Garage</Button>
      <Button onClick={onWinnersClick}>Winners</Button>
    </nav>
  );
};

export default Navigation;
