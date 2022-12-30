export function VerificationRege(i, j, arr, player) {
  if (j - 1 >= 0) {
    for (let indexj = j - 1; indexj >= 0; indexj--) {
      if (
        ((arr[i][indexj] === -5 || arr[i][indexj] === -4) && arr[i][j] > 0) ||
        ((arr[i][indexj] === 5 || arr[i][indexj] === 4) && arr[i][j] < 0)
      ) {
        return 1;
      }
      if (arr[i][indexj] != 0) {
        break;
      }
    }
  }
  if (j + 1 < 7) {
    for (let indexj = j + 1; indexj <= 7; indexj++) {
      if (
        ((arr[i][indexj] === -5 || arr[i][indexj] === -4) && arr[i][j] > 0) ||
        ((arr[i][indexj] === 5 || arr[i][indexj] === 4) && arr[i][j] < 0)
      ) {
        return 1;
      }
      if (arr[i][indexj] != 0) {
        console.log(arr[i][indexj]);
        break;
      }
    }
  }
  if (i + 1 <= 7) {
    for (let indexi = i + 1; indexi <= 7; indexi++) {
      if (
        ((arr[indexi][j] === -5 || arr[indexi][j] === -4) && arr[i][j] > 0) ||
        ((arr[indexi][j] === 5 || arr[indexi][j] === 4) && arr[i][j] < 0)
      ) {
        return 1;
      }
      if (arr[indexi][j] != 0) {
        console.log(arr[indexi][j]);
        break;
      }
    }
  }
  if (i - 1 >= 0) {
    for (let indexi = i - 1; indexi >= 0; indexi--) {
      if (
        ((arr[indexi][j] === -5 || arr[indexi][j] === -4) && arr[i][j] > 0) ||
        ((arr[indexi][j] === 5 || arr[indexi][j] === 4) && arr[i][j] < 0)
      ) {
        return 1;
      }
      if (arr[indexi][j] != 0) {
        break;
      }
    }
  }
  let indexi, indexj;
  indexi = i - 1;
  indexj = j - 1;
  while (indexi >= 0 && indexj >= 0) {
    if (
      ((arr[indexi][indexj] === 5 || arr[indexi][indexj] === 3) &&
        arr[i][j] < 0) ||
      ((arr[indexi][indexj] === -5 || arr[indexi][indexj] === -3) &&
        arr[i][j] > 0)
    ) {
      return 1;
    }
    if (arr[indexi][indexj] != 0) {
      break;
    }
    indexi--;
    indexj--;
  }
  indexi = i - 1;
  indexj = j + 1;
  while (indexi >= 0 && indexj <= 7) {
    if (
      ((arr[indexi][indexj] === 5 || arr[indexi][indexj] === 3) &&
        arr[i][j] < 0) ||
      ((arr[indexi][indexj] === -5 || arr[indexi][indexj] === -3) &&
        arr[i][j] > 0)
    ) {
      return 1;
    }
    if (arr[indexi][indexj] != 0) {
      console.log(indexi,indexj)
      break;
    }
    indexi--;
    indexj++;
  }
  indexi = i + 1;
  indexj = j + 1;
  while (indexi <= 7 && indexj <= 7) {
    if (
      ((arr[indexi][indexj] === 5 || arr[indexi][indexj] === 3) &&
        arr[i][j] < 0) ||
      ((arr[indexi][indexj] === -5 || arr[indexi][indexj] === -3) &&
        arr[i][j] > 0)
    ) {
      return 1;
    }
    if (arr[indexi][indexj] != 0) {
      break;
    }

    indexi++;
    indexj++;
  }
  indexj = j - 1;
  indexi = i + 1;
  while (indexi <= 7 && indexj >= 0) {
    if (
      ((arr[indexi][indexj] === 5 || arr[indexi][indexj] === 3) &&
        arr[i][j] < 0) ||
      ((arr[indexi][indexj] === -5 || arr[indexi][indexj] === -3) &&
        arr[i][j] > 0)
    ) {
      return 1;
    }
    if (arr[indexi][indexj] != 0) {
      break;
    }
    indexi++;
    indexj--;
  }
  if (
    i - 2 >= 0 &&
    j - 1 >= 0 &&
    ((arr[i - 2][j - 1] === 2 && arr[i][j] < 0) ||
      (arr[i - 2][j - 1] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i - 1 >= 0 &&
    j - 2 >= 0 &&
    ((arr[i - 1][j - 2] === 2 && (arr[i][j] < 0 || player === 1)) ||
      (arr[i - 1][j - 2] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i + 1 <= 7 &&
    j - 2 >= 0 &&
    ((arr[i + 1][j - 2] === 2 && arr[i][j] < 0) ||
      (arr[i + 1][j - 2] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i + 2 <= 7 &&
    j - 1 >= 0 &&
    ((arr[i + 2][j - 1] === 2 && arr[i][j] < 0) ||
      (arr[i + 2][j - 1] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i + 2 <= 7 &&
    j + 1 <= 7 &&
    ((arr[i + 2][j + 1] === 2 && arr[i][j] < 0) ||
      (arr[i + 2][j + 1] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i + 1 <= 7 &&
    j + 2 <= 7 &&
    ((arr[i + 1][j + 2] === 2 && arr[i][j] < 0) ||
      (arr[i + 1][j + 2] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i - 1 >= 0 &&
    j + 2 <= 7 &&
    ((arr[i - 1][j + 2] === 2 && arr[i][j] < 0) ||
      (arr[i - 1][j + 2] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if (
    i - 2 >= 0 &&
    j + 1 <= 7 &&
    ((arr[i - 2][j + 1] === 2 && arr[i][j] < 0) ||
      (arr[i - 2][j + 1] === -2 && arr[i][j] > 0))
  ) {
    return 1;
  }
  if(i+1<=7&&j+1<=7){
    if(arr[i][j] > 0&&arr[i+1][j+1]==-1){
      return 1;
    }
  }
  if(i+1<=7&&j-1>=0){
    if(arr[i][j] > 0&&arr[i+1][j-1]==-1){
      return 1;
    }
  }

  if(i-1>=0&&j+1<=7){
    if(arr[i][j] < 0&&arr[i-1][j+1]==1){
      return 1;
    }
  }
  if(i-1>=0&&j-1>=0){
    if(arr[i][j] < 0&&arr[i-1][j-1]==1){
      return 1;
    }
  }
  return 0;
}
