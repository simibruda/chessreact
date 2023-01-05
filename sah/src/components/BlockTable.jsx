import React from "react";
import { useState } from "react";
import "./Table.css";
import { setBStylecount } from "./SetStylecount";
import { setWStylecount } from "./SetStylecountW";
import { MovementPion, MovementCal } from "./MovementPionAndCal";
import { setWStyleWcountTaken } from "./SetStyleWconTaken";
import { setBStyleWcountTaken } from "./SetStyleBconTaken";
import { MovementNebun } from "./MovementNebun";
import { MovementTura } from "./MovementTura";
import { MovementRegin } from "./MovementRegina";
import { MovementRege } from "./MovementRege";
import { useEffect } from "react";
import { VerificationRege } from "./VerificationRege";
function BlockTable({ copy, setColor }) {
  const [arrtable, setArrTable] = useState(copy);
  const [lastMovebent, setLastMovebent] = useState(0);
const [regeW,setRegeW]=useState({})
const [regeB,setRegeB]=useState({})
  const [player, setPlayer] = useState(2);
  const [lastMoveIndexs, setLastMoveIndexs] = useState({});
  console.log(arrtable);
  function click(i, j) {
    let arr = JSON.parse(JSON.stringify(arrtable));
    if (arrtable[i][j] != 0) {
      arr.forEach((line, row) => {
        line.forEach((element, col) => {
          if (element === 65) {
            arr[row][col] = 0;
          } else {
            if (element < -65 && element < -6) {
              arr[row][col] = arr[row][col] + 65;
            }
            if (element > 65) {
              arr[row][col] = arr[row][col] - 65;
            }
          }
        });
      });

      setArrTable(arr);
      if (arrtable[i][j] === 1 || arrtable[i][j] === -1) {
        MovementPion(i, j, arr, player);
        setArrTable(arr);

        setLastMoveIndexs({ indexI: i, indexJ: j });
      }
      if (arrtable[i][j] === 2 || arrtable[i][j] === -2) {
        MovementCal(i, j, arr, player);
        setArrTable(arr);
        setLastMovebent(arrtable[i][j]);
        setLastMoveIndexs({ indexI: i, indexJ: j });
      }
      if (arrtable[i][j] === 4 || arrtable[i][j] === -4) {
        MovementTura(i, j, arr, player);
        setArrTable(arr);
        setLastMovebent(arrtable[i][j]);
        setLastMoveIndexs({ indexI: i, indexJ: j });
      }
      if (arrtable[i][j] === 3 || arrtable[i][j] === -3) {
        MovementNebun(i, j, arr, player);
        setArrTable(arr);
        setLastMovebent(arrtable[i][j]);
        setLastMoveIndexs({ indexI: i, indexJ: j });
      }
      if (arrtable[i][j] === 5 || arrtable[i][j] === -5) {
        MovementRegin(i, j, arr, player);
        setArrTable(arr);
        setLastMovebent(arrtable[i][j]);
        setLastMoveIndexs({ indexI: i, indexJ: j });
      }

     
      if (arrtable[i][j] === 6 || arrtable[i][j] === -6) {
        MovementRege(i, j, arr, player);
        setArrTable(arr);
        setLastMovebent(arrtable[i][j]);
        setLastMoveIndexs({ indexI: i, indexJ: j });
      }
    }
      if (arrtable[i][j] === 65) {
        if (player === 1) {
          if (lastMovebent === 1 && i == 3) {
            arr[i - 2][j] = 0;
            arr[i][j] = lastMovebent;
            setArrTable(arr);
            setPlayer(2);
            setColor(2);
          }
        } else {
          if (lastMovebent === -1 && i == 4) {
            arr[i + 2][j] = 0;
            arr[i][j] = lastMovebent;
            setArrTable(arr);
            setPlayer(1);
            setColor(1);
          }
        }
        if (player === 1) {
          if (lastMovebent === 6 && i === 0 && j === 2) {
            arr[0][3] = arr[0][0];
            arr[0][0]=0;
            setArrTable(arr);
            setPlayer(2);
            setColor(2);
          }
          if (lastMovebent === 6 && i === 0 && j ===6 ) {
           
            arr[0][6] = 6;
            arr[0][5] = arr[0][7];
            arr[0][7]=0;
            setArrTable(arr);
            setPlayer(2);
            setColor(2);
          }
        }else{
          if (lastMovebent === -6 && i === 7 && j === 2) {
            arr[7][3] = arr[7][0];
            arr[7][0]=0;
            setArrTable(arr);
            setPlayer(2);
            setColor(2);
          }
          if (lastMovebent === -6 && i === 7 && j ===6 ) {
           
            arr[7][6] = 6;
            arr[7][5] = arr[7][7];
            arr[7][7]=0;
            setArrTable(arr);
            setPlayer(2);
            setColor(2);
          }
        }
     

      }
      if (arrtable[i][j] < -6 || arrtable[i][j] >= 65) {
        arr[i][j] = arr[lastMoveIndexs.indexI][lastMoveIndexs.indexJ];
        arr[lastMoveIndexs.indexI][lastMoveIndexs.indexJ] = 0;
        setArrTable(arr);
        if (player == 2) {
          setPlayer(1);
          setColor(1);
        } else {
          setPlayer(2);
          setColor(2);
        }
      }
  
  }
  useEffect(()=>{
    arrtable.forEach((linie,i)=>{
      linie.forEach((element,j)=>{
        if(arrtable[i][j]===6){
          setRegeB({indexi:i,indexj:j})
        }
        if(arrtable[i][j]===-6){
          setRegeW({indexi:i,indexj:j})
        }
      })
    })
   console.log(player)
    
  if(VerificationRege(regeB.indexi,regeB.indexj,arrtable,0)==1||VerificationRege(regeW.indexi,regeW.indexj,arrtable,0)==1)
  {
  alert('Sah')
  }
     
  },[player])
  return arrtable.map((line, i) => (
    <div style={{ display: "flex" }} key={i}>
      {line.map((smallBlockJ, j) => {
        let stylecont = 0;
        if (arrtable[i][j] >= 0) {
          if (arrtable[i][j] <= 65) {
            stylecont = setBStylecount(i, j, arrtable);
          } else {
            stylecont = setBStyleWcountTaken(i, j, arrtable);
          }
        } else {
          if (arrtable[i][j] >= -6) {
            stylecont = setWStylecount(i, j, arrtable);
          } else {
            stylecont = setWStyleWcountTaken(i, j, arrtable);
          }
        }
        
        return (
          <div
            key={j}
            className="cont"
            onClick={() => {
              click(i, j);
            }}
            style={stylecont}
          ></div>
        );
      })}
    </div>
  ));
}
export default BlockTable;
