import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Button from "../../../../components/buttons";

const Form = ({ selected, label, onSubmit }) => {
  const containerRef = useRef(null);
  const [name, setName] = useState(selected?.name || "");
  const [color, setColor] = useState(selected?.color || "#000000");

  const onClick = () => {
    if (!name) return;
    setName("");
    setColor("#000000");

    onSubmit({ name, color });
  };

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setName(selected?.name || "");
    setColor(selected?.color || "#000000");

    // როცა დააბდეიტდება და ნულლ გახდება სელექტედი მაშინ არ გავსქროლოთ
    if (!selected) return;
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selected]);

  return (
    <div ref={containerRef} className={styles.container}>
      <input
        placeholder="Type car brand"
        value={name}
        onChange={onNameChange}
      />
      <input type="color" value={color} onChange={onColorChange} />
      <Button onClick={onClick}>{label}</Button>
    </div>
  );
};

export default Form;
