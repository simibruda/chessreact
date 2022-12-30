import { VerificationRegeMovement } from "./VerificationRegeMovement";
export function MovementRege(i, j, arr, player) {
  if (arr && Array.isArray(arr) && arr[i] && Array.isArray(arr[i])) {
    if (player === 1 && arr[i][j] > 0) {
      if (i === 0 && j == 4) {
        if (arr[i][1] === 0 && arr[i][2] === 0 && arr[i][3] === 0) {
          arr[i][2] = 65; //rocada mare
        }
        if (arr[i][5] === 0 && arr[i][6] === 0) {
          //rocada mica
          arr[i][6] = 65;
        }
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (arr[i - 1][j - 1] === 0&&VerificationRegeMovement(i-1,j - 1,arr,1)===0) {
          arr[i - 1][j - 1] = 65;
        }
      }
      if (i - 1 >= 0) {
        if (arr[i - 1][j] === 0&&VerificationRegeMovement(i-1,j,arr,1)===0) {
          arr[i - 1][j] = 65;
        }
      }
      if (j + 1 < arr[i].length && i - 1 >= 0) {
        if (arr[i - 1][j + 1] === 0&&VerificationRegeMovement(i-1,j + 1,arr,1)===0) {
          arr[i - 1][j + 1] = 65;
        }
      }
      if (j + 1 < arr[i].length) {
        if (arr[i][j + 1] === 0&&VerificationRegeMovement(i,j + 1,arr,1)===0) {
          arr[i][j + 1] = 65;
        }
      }
      if (i + 1 < arr[j].length && j + 1 < arr[i].length) {
        if (arr[i + 1][j + 1] === 0&&VerificationRegeMovement(i+1,j + 1,arr,1)===0) {
          arr[i + 1][j + 1] = 65;
        }
      }
      if (i + 1 < arr[j].length) {
        if (arr[i + 1][j] === 0&&VerificationRegeMovement(i+1,j,arr,1)===0) {
          arr[i + 1][j] = 65;
        }
      }

      if (i + 1 < arr[j].length && j - 1 >= 0) {
        if (arr[i + 1][j - 1] === 0&&VerificationRegeMovement(i+1,j - 1,arr,1)===0) {
          arr[i + 1][j - 1] = 65;
          console.log("6");
        }
      }
      if (j - 1 >= 0) {
        if (arr[i][j - 1] === 0&&VerificationRegeMovement(i,j - 1,arr,1)===0) {
          arr[i][j - 1] = 65;
        }
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (arr[i - 1][j - 1] < 0&&VerificationRegeMovement(i-1,j - 1,arr,1)===0) {
          arr[i - 1][j - 1] = arr[i - 1][j - 1] - 65;
        }
      }
      if (i - 1 >= 0) {
        if (arr[i - 1][j] < 0&&VerificationRegeMovement(i-1,j ,arr,1)===0) {
          arr[i - 1][j] = arr[i - 1][j] - 65;
        }
      }
      if (j + 1 < arr[i].length && i - 1 >= 0) {
        if (arr[i - 1][j + 1] < 0&&VerificationRegeMovement(i-1,j + 1,arr,1)===0) {
          arr[i - 1][j + 1] = arr[i - 1][j + 1] - 65;
        }
      }
      if (j + 1 < arr[i].length) {
        if (arr[i][j + 1] < 0&&VerificationRegeMovement(i,j + 1,arr,1)===0) {
          arr[i][j + 1] = arr[i][j + 1] - 65;
        }
      }
      if (i + 1 < arr[j].length && j + 1 < arr[i].length) {
        if (arr[i + 1][j + 1] < 0&&VerificationRegeMovement(i+1,j + 1,arr,1)===0) {
          arr[i + 1][j + 1] = arr[i + 1][j + 1] - 65;
        }
      }
      if (i + 1 < arr[j].length) {
        if (arr[i + 1][j] < 0&&VerificationRegeMovement(i+1,j,arr,1)===0) {
          arr[i + 1][j] = arr[i + 1][j] - 65;
        }
      }

      if (i + 1 < arr[j].length && j - 1 >= 0) {
        //aici
        if (arr[i + 1][j - 1] < 0&&VerificationRegeMovement(i+1,j - 1,arr,1)===0) {
          arr[i + 1][j - 1] = arr[i + 1][j - 1] - 65;
        }
      }
      if (j - 1 >= 0) {
        if (arr[i][j - 1] < 0&&VerificationRegeMovement(i,j - 1,arr,1)===0) {
          arr[i][j - 1] = arr[i][j - 1] - 65;
        }
      }
    }
    if (player === 2 && arr[i][j] < 0) {
      if (i === 7 && j === 4) {
        if (arr[i][1] === 0 && arr[i][2] === 0 && arr[i][3] === 0) {
          arr[i][2] = 65; //rocada mare
        }
        if (arr[i][5] === 0 && arr[i][6] === 0) {
          //rocada mica
          arr[i][6] = 65;
        }
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (arr[i - 1][j - 1] === 0&&VerificationRegeMovement(i-1,j - 1,arr,2)===0) {
          arr[i - 1][j - 1] = 65;
        }
      }
      if (i - 1 >= 0) {
        if (arr[i - 1][j] === 0&&VerificationRegeMovement(i-1,j,arr,2)===0) {
          arr[i - 1][j] = 65;
        }
      }
      if (j + 1 < arr[i].length && i - 1 >= 0) {
        if (arr[i - 1][j + 1] === 0&&VerificationRegeMovement(i-1,j + 1,arr,2)===0) {
          arr[i - 1][j + 1] = 65;
        }
      }
      if (j + 1 < arr[i].length) {
        if (arr[i][j + 1] === 0&&VerificationRegeMovement(i,j + 1,arr,2)===0) {
          arr[i][j + 1] = 65;
        }
      }
      if (i + 1 < arr[j].length && j + 1 < arr[i].length) {
        if (arr[i + 1][j + 1] === 0&&VerificationRegeMovement(i+1,j + 1,arr,2)===0) {
          arr[i + 1][j + 1] = 65;
        }
      }
      if (i + 1 < arr[j].length) {
        if (arr[i + 1][j] === 0&&VerificationRegeMovement(i+1,j,arr,2)===0) {
          arr[i + 1][j] = 65;
        }
      }

      if (i + 1 < arr[j].length && j - 1 >= 0) {
        if (arr[i + 1][j - 1] === 0&&VerificationRegeMovement(i+1,j - 1,arr,2)===0) {
          arr[i + 1][j - 1] = 65;
          console.log("6");
        }
      }
      if (j - 1 >= 0) {
        if (arr[i][j - 1] === 0&&VerificationRegeMovement(i,j - 1,arr,2)===0) {
          arr[i][j - 1] = 65;
        }
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (arr[i - 1][j - 1] > 0&&arr[i - 1][j - 1]<65&&VerificationRegeMovement(i-1,j - 1,arr,2)===0) {
          arr[i - 1][j - 1] = arr[i - 1][j - 1] + 65;
        }
      }
      if (i - 1 >= 0) {
        if (arr[i - 1][j] > 0&&arr[i - 1][j]<65&&VerificationRegeMovement(i-1,j,arr,2)===0) {
          arr[i - 1][j] = arr[i - 1][j] + 65;
        }
      }
      if (j + 1 < arr[i].length && i - 1 >= 0) {
        if (arr[i - 1][j + 1] > 0&&arr[i - 1][j + 1]<65&&VerificationRegeMovement(i-1,j + 1,arr,2)===0) {
          arr[i - 1][j + 1] = arr[i - 1][j + 1] + 65;
        }
      }
      if (j + 1 < arr[i].length) {
        if (arr[i][j + 1] > 0&&arr[i][j + 1]<65&&VerificationRegeMovement(i,j + 1,arr,2)===0) {
          arr[i][j + 1] = arr[i][j + 1] + 65;
        }
      }
      if (i + 1 < arr[j].length && j + 1 < arr[i].length) {
        if (arr[i + 1][j + 1] > 0&&arr[i + 1][j + 1]<65&&VerificationRegeMovement(i+1,j + 1,arr,2)===0) {
          arr[i + 1][j + 1] = arr[i + 1][j + 1] + 65;
        }
      }
      if (i + 1 < arr[j].length) {
        if (arr[i + 1][j] > 0&&arr[i + 1][j]<65&&VerificationRegeMovement(i+1,j,arr,2)===0) {
          arr[i + 1][j] = arr[i + 1][j] + 65;
        }
      }

      if (i + 1 < arr[j].length && j - 1 >= 0) {
        //aici
        if (arr[i + 1][j - 1] > 0&&arr[i + 1][j - 1]<65&&VerificationRegeMovement(i+1,j - 1,arr,2)===0) {
          arr[i + 1][j - 1] = arr[i + 1][j - 1] + 65;
        }
      }
      if (j - 1 >= 0) {
        if (arr[i][j - 1] > 0&&arr[i][j - 1]<65&&VerificationRegeMovement(i,j - 1,arr,2)===0) {
          arr[i][j - 1] = arr[i][j - 1] + 65;
        }
      }
    }
  }
}
