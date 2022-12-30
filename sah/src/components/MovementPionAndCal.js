export function MovementPion(i, j, arr, player) {
  if (player === 1) {
    if (i === 1 && arr[2][j] == 0) {
      if (arr[i][j] === 1 && arr[i + 2][j] === 0) {
        arr[i + 2][j] = 65;
      }
    }
    if (arr[i][j] === 1 && arr[i + 1][j] === 0) {
      arr[i + 1][j] = 65;
    }
    if (arr[i][j] === 1 && arr[i + 1][j + 1] < 0 && i + 1 < 8 && j + 1 < 8) {
      arr[i + 1][j + 1] = arr[i + 1][j + 1] - 65;
    }
    if (arr[i][j] === 1 && arr[i + 1][j - 1] < 0 && i + 1 < 8 && j - 1 >= 0) {
      arr[i + 1][j - 1] = arr[i + 1][j - 1] - 65;
    }
  } else {
    if (i == 6 && arr[5][j] == 0) {
      if (arr[i][j] === -1 && arr[i - 2][j] === 0) {
        arr[i - 2][j] = 65;
      }
    }

    if (arr[i][j] === -1 && arr[i - 1][j] === 0) {
      arr[i - 1][j] = 65;
    }
    if (arr[i][j] === -1 && arr[i - 1][j + 1] > 0 && i - 1 >= 0 && j + 1 < 8) {
      arr[i - 1][j + 1] = arr[i - 1][j + 1] + 65;
    }
    if (arr[i][j] === -1 && arr[i - 1][j - 1] > 0 && i - 1 >= 0 && j - 1 >= 0) {
      arr[i - 1][j - 1] = arr[i - 1][j - 1] + 65;
    }
  }
}

export function MovementCal(i, j, arr, player) {
  if (player === 1 && arr && Array.isArray(arr) && arr[i] && Array.isArray(arr[i]) && arr[i][j] > 0) {
    if (i - 2 >= 0 && j - 1 >= 0 && arr[i - 2][j - 1] === 0) {
      
      arr[i - 2][j - 1] = 65;
    }
    if (i - 1 >= 0 && j - 2 >= 0 && arr[i - 1][j - 2] === 0) {
     
      arr[i - 1][j - 2] = 65;
    }
    if (i + 1 < arr.length && j - 2 >= 0 && arr[i + 1][j - 2] === 0) {
     
      arr[i + 1][j - 2] = 65;
    }
    if (i + 2 < arr.length && j - 1 >= 0 && arr[i + 2][j - 1] === 0) {
      console.log('4')
      arr[i + 2][j - 1] = 65;
    }
    if (i + 2 < arr.length && j + 1 < arr[i].length && arr[i + 2][j + 1] === 0) {
     
      arr[i + 2][j + 1] = 65;
    }
    if (i + 1 < arr.length && j + 2 < arr[i].length && arr[i + 1][j + 2] === 0) {
     
      arr[i + 1][j + 2] = 65;
    }
    if (i - 1 >= 0 && j + 2 < arr[i].length && arr[i - 1][j + 2] === 0) {
    
      arr[i - 1][j + 2] = 65;
    }
    if (i -2 >=0 && j + 1 < arr[i].length && arr[i - 2 ][j +1] === 0) {
      
      arr[i - 2 ][j +1]=65;
    }
    if (i - 2 >= 0 && j - 1 >= 0 && arr[i - 2][j - 1] < 0) {
      
      arr[i - 2][j - 1] = arr[i - 2][j - 1]-65;
    }
    if (i - 1 >= 0 && j - 2 >= 0 && arr[i - 1][j - 2] < 0) {
      
      arr[i - 1][j - 2] = arr[i - 1][j - 2]-65;
    }
    if (i + 1 < arr.length && j - 2 >= 0 && arr[i + 1][j - 2] < 0) {
      
      arr[i + 1][j - 2] = arr[i + 1][j - 2]-65;
    }
    if (i + 2 < arr.length && j - 1 >= 0 && arr[i + 2][j - 1]< 0) {
      
      arr[i + 2][j - 1] = arr[i + 2][j - 1]-65;
    }
    if (i + 2 < arr.length && j + 1 < arr[i].length && arr[i + 2][j + 1] < 0) {
      
      arr[i + 2][j + 1] =arr[i + 2][j + 1]- 65;
    }
    if (i + 1 < arr.length && j + 2 < arr[i].length && arr[i + 1][j + 2] < 0) {
      
      arr[i + 1][j + 2] =arr[i + 1][j + 2]- 65;
    }
    if (i - 1 >= 0 && j + 2 < arr[i].length && arr[i - 1][j + 2] < 0) {
     
      arr[i - 1][j + 2] =arr[i - 1][j + 2]- 65;
    }
    if (i -2 >=0 && j + 1 < arr[i].length && arr[i -2 ][j +1] < 0) {
     
      arr[i -2 ][j +1]= arr[i -2 ][j +1]-65;
    }
  }
 
    if(player===2&&arr && Array.isArray(arr) && arr[i] && Array.isArray(arr[i]) && arr[i][j] < 0) {
      if (i - 2 >= 0 && j - 1 >= 0 && arr[i - 2][j - 1] === 0) {
       
        arr[i - 2][j - 1] = 65;
      }
      if (i - 1 >= 0 && j - 2 >= 0 && arr[i - 1][j - 2] === 0) {
       
        arr[i - 1][j - 2] = 65;
      }
      if (i + 1 < arr.length && j - 2 >= 0 && arr[i + 1][j - 2] === 0) {
        
        arr[i + 1][j - 2] = 65;
      }
      if (i + 2 < arr.length && j - 1 >= 0 && arr[i + 2][j - 1] === 0) {
        
        arr[i + 2][j - 1] = 65;
      }
      if (i + 2 < arr.length && j + 1 < arr[i].length && arr[i + 2][j + 1] === 0) {
       
        arr[i + 2][j + 1] = 65;
      }
      if (i + 1 < arr.length && j + 2 < arr[i].length && arr[i + 1][j + 2] === 0) {
        
        arr[i + 1][j + 2] = 65;
      }
      if (i - 1 >= 0 && j + 2 < arr[i].length && arr[i - 1][j + 2] === 0) {
        
        arr[i - 1][j + 2] = 65;
      }
      if (i -2 >=0 && j + 1 < arr[i].length && arr[i - 2 ][j +1] === 0) {
        
        arr[i - 2 ][j +1]=65;
      }
      if (i - 2 >= 0 && j - 1 >= 0 && arr[i - 2][j - 1] > 0&&arr[i - 2][j - 1]<65) {
        
        arr[i - 2][j - 1] = arr[i - 2][j - 1]+65;
      }
      if (i - 1 >= 0 && j - 2 >= 0 && arr[i - 1][j - 2] > 0&&arr[i - 1][j - 2]<65) {
       
        arr[i - 1][j - 2] = arr[i - 1][j - 2]+65;
      }
      if (i + 1 < arr.length && j - 2 >= 0 && arr[i + 1][j - 2] > 0&&arr[i + 1][j - 2]<65) {
       
        arr[i + 1][j - 2] = arr[i + 1][j - 2]+65;
      }
      if (i + 2 < arr.length && j - 1 >= 0 && arr[i + 2][j - 1]> 0&&arr[i + 2][j - 1]<65) {
       
        arr[i + 2][j - 1] = arr[i + 2][j - 1]+65;
      }
      if (i + 2 < arr.length && j + 1 < arr[i].length && arr[i + 2][j + 1] > 0&&arr[i + 2][j + 1]<65) {
       
        arr[i + 2][j + 1] =arr[i + 2][j + 1]+ 65;
      }
      if (i + 1 < arr.length && j + 2 < arr[i].length && arr[i + 1][j + 2] > 0&&arr[i + 1][j + 2]<65) {
      
        arr[i + 1][j + 2] =arr[i + 1][j + 2]+ 65;
      }
      if (i - 1 >= 0 && j + 2 < arr[i].length && arr[i - 1][j + 2] > 0&&arr[i - 1][j + 2]<65) {
        
        arr[i - 1][j + 2] =arr[i - 1][j + 2]+ 65;
      }
      if (i -2 >=0 && j + 1 < arr[i].length && arr[i -2 ][j +1] > 0&&arr[i -2 ][j +1]<65) {
        
        arr[i -2 ][j +1]= arr[i -2 ][j +1]+65;
      }
    }

  }