export function MovementRegin(i, j, arr, player) {
  if (arr && Array.isArray(arr) && arr[i] && Array.isArray(arr[i])) {
    if (player === 1 && arr[i][j] > 0) {
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
      let indexi, indexj;
      indexi = i - 1;
      indexj = j - 1;
      while (indexi >= 0 && indexj >= 0) {
        if (arr[indexi][indexj] === 0) {
          arr[indexi][indexj] = 65;
        }
        if (arr[indexi][indexj] < 0) {
          arr[indexi][indexj] = arr[indexi][indexj] - 65;
          break;
        }
        if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
          break;
        }
        indexi--;
        indexj--;
      }
      indexi = i - 1;
      indexj = j + 1;
      while (indexi >= 0 && indexj < arr[i].length) {
        if (arr[indexi][indexj] === 0) {
          arr[indexi][indexj] = 65;
        }
        if (arr[indexi][indexj] < 0) {
          arr[indexi][indexj] = arr[indexi][indexj] - 65;
          break;
        }
        if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
          break;
        }
        indexi--;
        indexj++;
      }
      indexi = i + 1;
      indexj = j + 1;
      while (indexi < arr[j].length && indexj < arr[i].length) {
        if (arr[indexi][indexj] === 0) {
          arr[indexi][indexj] = 65;
        }
        if (arr[indexi][indexj] < 0) {
          arr[indexi][indexj] = arr[indexi][indexj] - 65;
          break;
        }
        if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
          break;
        }
        indexi++;
        indexj++;
      }
      indexj = j - 1;
      indexi = i + 1;
      while (indexi < arr[j].length && indexj >= 0) {
        if (arr[indexi][indexj] === 0) {
          arr[indexi][indexj] = 65;
        }
        if (arr[indexi][indexj] < 0) {
          arr[indexi][indexj] = arr[indexi][indexj] - 65;
          break;
        }
        if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
          break;
        }
        indexi++;
        indexj--;
      }
    } else {
      if (player === 2 && arr[i][j] < 0) {
        if (j - 1 >= 0) {
          for (let indexj = j - 1; indexj >= 0; indexj--) {
            console.log("for1");
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
              
              break;
            }
          }
        }
        if (i - 1 >= 0) {
          for (let indexi = i - 1; indexi >= 0; indexi--) {
            
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

        let indexi, indexj;
        indexi = i - 1;
        indexj = j - 1;
        while (indexi >= 0 && indexj >= 0) {
          if (arr[indexi][indexj] === 0) {
            arr[indexi][indexj] = 65;
          }
          if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
            arr[indexi][indexj] = arr[indexi][indexj] + 65;
            break;
          }
          if (arr[indexi][indexj] < 0) {
            break;
          }
          indexi--;
          indexj--;
        }
        indexi = i - 1;
        indexj = j + 1;
        while (indexi >= 0 && indexj < arr[i].length) {
          if (arr[indexi][indexj] === 0) {
            arr[indexi][indexj] = 65;
          }
          if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
            arr[indexi][indexj] = arr[indexi][indexj] + 65;
            break;
          }
          if (arr[indexi][indexj] < 0) {
            break;
          }
          indexi--;
          indexj++;
        }
        indexi = i + 1;
        indexj = j + 1;
        while (indexi < arr[j].length && indexj < arr[i].length) {
          if (arr[indexi][indexj] === 0) {
            arr[indexi][indexj] = 65;
          }
          if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
            arr[indexi][indexj] = arr[indexi][indexj] + 65;
            break;
          }
          if (arr[indexi][indexj] < 0) {
            break;
          }
          indexi++;
          indexj++;
        }
        indexj = j - 1;
        indexi = i + 1;
        while (indexi < arr[j].length && indexj >= 0) {
          if (arr[indexi][indexj] === 0) {
            arr[indexi][indexj] = 65;
          }
          if (arr[indexi][indexj] > 0 && arr[indexi][indexj] < 65) {
            arr[indexi][indexj] = arr[indexi][indexj] + 65;
            break;
          }
          if (arr[indexi][indexj] < 0) {
            break;
          }
          indexi++;
          indexj--;
        }
      }
    }
  }
}
