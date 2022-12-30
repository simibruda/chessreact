import React, { useState, useEffect } from "react";
import BlockTable from "./BlockTable";
import "./Table.css";
const emtyArrofeight = new Array(8).fill(0);

function Table() {
  const [table, setTable] = useState(new Array(8).fill(emtyArrofeight));
  const [color,setColor]=useState(1);
  let copy = JSON.parse(JSON.stringify(table));
  copy[0][0] = 4;
  copy[0][7] = 4;
  copy[0][1] = 2;
  copy[0][6] = 2;
  copy[0][2] = 3;
  copy[0][5] = 3;
  copy[0][3] = 5;
  copy[0][4] = 6;
  copy[1].forEach((element, j) => {
    copy[1][j] = 1;
  });
  copy[7][0] = -4;
  copy[7][7] = -4;
  copy[7][1] = -2;
  copy[7][6] = -2;
  copy[7][2] = -3;
  copy[7][5] = -3;
  copy[7][3] = -5;
  copy[7][4] = -6;
  copy[6].forEach((element, j) => {
    copy[6][j] = -1;
  });

  return (
    <div>
      <h1>{color===1 ? 'Player black is moving!' :  'Player white is moving!'}</h1>
    <div className="container">
      <BlockTable copy={copy} setColor={setColor} />
    </div>
    </div>
  );
}

export default Table;
