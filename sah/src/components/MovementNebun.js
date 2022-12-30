export function MovementNebun(i, j, arr, player) {
  if (arr && Array.isArray(arr) && arr[i] && Array.isArray(arr[i])) {
    if (player == 1 && arr[i][j] > 0) {
      let indexi, indexj;
      indexi = i - 1;
      indexj = j - 1;
      while (indexi >= 0 && indexj >= 0) {
        if (arr[indexi][indexj] === 0) {
          arr[indexi][indexj] = 65;
        }
        if (arr[indexi][indexj] < 0&&arr[indexi][indexj]>-65) {
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
        if (arr[indexi][indexj] < 0&&arr[indexi][indexj]>65) {
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
    }


    
    if (player == 2 && arr[i][j] < 0) {
      console.log("daa");
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
