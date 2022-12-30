export function MovementTura(i, j, arr, player) {
  if (arr && Array.isArray(arr) && arr[i] && Array.isArray(arr[i])) {
    if (player == 1 && arr[i][j] > 0) {
      if (j - 1 >= 0) {
        for (let indexj = j - 1; indexj >= 0; indexj--) {
          console.log("for1");
          if (arr[i][indexj] === 0) {
            arr[i][indexj] = 65;
          }
          if (arr[i][indexj] < 0) {
            arr[i][indexj] = arr[i][indexj] - 65;
            break;
          }
          if (arr[i][indexj] > 0 && arr[i][indexj] < 65) {
            break;
          }
        }
      }
      if (j + 1 < arr[i].length) {
        for (let indexj = j + 1; indexj < arr[i].length; indexj++) {
          console.log("for2");
          if (arr[i][indexj] === 0) {
            arr[i][indexj] = 65;
          }
          if (arr[i][indexj] < 0) {
            arr[i][indexj] = arr[i][indexj] - 65;
            break;
          }
          if (arr[i][indexj] > 0 && arr[i][indexj] < 65) {
            break;
          }
        }
      }
      if (i + 1 < arr[j].length) {
        for (let indexi = i + 1; indexi < arr[j].length; indexi++) {
         
          if (arr[indexi][j] === 0) {
            arr[indexi][j] = 65;
           
          }
          if (arr[indexi][j] < 0) {
            arr[indexi][j] = arr[indexi][j] - 65;
            break;
          }
          if (arr[indexi][j] > 0 && arr[indexi][j] < 65) {
           
            break;
          }
        }
      }
      if (i - 1 >= 0) {
        for (let indexi = i - 1; indexi >= 0; indexi--) {
          
          if (arr[indexi][j] === 0) {
            arr[indexi][j] = 65;
          }
          if (arr[indexi][j] < 0) {
            arr[indexi][j] = arr[indexi][j] - 65;
            break;
          }
          if (arr[indexi][j] > 0 && arr[indexi][j] < 65) {
            break;
          }
        }
      }
    } else {
      if (player == 2 && arr[i][j] < 0) {
        if (j - 1 >= 0) {
          for (let indexj = j - 1; indexj >= 0; indexj--) {
         
            if (arr[i][indexj] === 0) {
              arr[i][indexj] = 65;
            }
            if (arr[i][indexj] > 0 && arr[i][indexj] < 65) {
              arr[i][indexj] = arr[i][indexj] + 65;
              break;
            }
            if (arr[i][indexj] < 0) {
              break;
            }
          }
        }
        if (j + 1 < arr[i].length) {
          for (let indexj = j + 1; indexj < arr[i].length; indexj++) {
           
            if (arr[i][indexj] === 0) {
              arr[i][indexj] = 65;
            }
            if (arr[i][indexj] > 0 && arr[i][indexj] < 65) {
              arr[i][indexj] = arr[i][indexj] + 65;
              break;
            }
            if (arr[i][indexj] < 0) {
              break;
            }
          }
        }
        if (i + 1 < arr[j].length) {
          for (let indexi = i + 1; indexi < arr[j].length; indexi++) {
            
            if (arr[indexi][j] === 0) {
              arr[indexi][j] = 65;
              
            }
            if (arr[indexi][j] > 0 && arr[indexi][j] < 65) {
              arr[indexi][j] = arr[indexi][j] + 65;
              break;
            }
            if (arr[indexi][j] < 0) {
              console.log("if3 3");
              break;
            }
          }
        }
        if (i - 1 >= 0) {
          for (let indexi = i - 1; indexi >= 0; indexi--) {
            console.log("for4");
            if (arr[indexi][j] === 0) {
              arr[indexi][j] = 65;
            }
            if (arr[indexi][j] > 0 && arr[indexi][j] < 65) {
              arr[indexi][j] = arr[indexi][j] + 65;
              break;
            }
            if (arr[indexi][j] < 0) {
              break;
            }
          }
        }
      }
    }
  }
}
