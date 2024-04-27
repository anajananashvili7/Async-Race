import React from "react";
import CarAnimation from "../garage/parts/car/carAnimation/index";
import styles from "./index.module.css";

type Winner = {
  name: string;
  wins: number;
  bestTime: number;
  color: string;
};

const WinnersTable: React.FC<{ winners: Winner[] }> = ({ winners }) => {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Car N</th>
            <th>Car SVG</th>
            <th>Car Name</th>
            <th>Wins</th>
            <th>Best Time (seconds)</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((winner: Winner, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <CarAnimation color={winner.color} isAnimationStarted={false} />
              </td>
              <td>{winner.name}</td>
              <td>{winner.wins}</td>
              <td>{winner.bestTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WinnersTable;
