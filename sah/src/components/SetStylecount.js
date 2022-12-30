import BPionOnBlack from "./imagesPiece/Black/PionOnBlack.png";
import BPionOnWhite from "./imagesPiece/Black/PionOnWhite.png";
import BCalOnblack from "./imagesPiece/Black/BCalOnBlack.png";
import BCalOnWhite from "./imagesPiece/Black/BCalOnWhite.png";
import BTuraOnblack from "./imagesPiece/Black/BTuraOnBlack.png";
import BTuraOnWhite from "./imagesPiece/Black/BTuraOnWhite.png";
import BNebunOnblack from "./imagesPiece/Black/BNebunOnBlack.png";
import BNebunOnWhite from "./imagesPiece/Black/BNebunOnWhite.png";
import BReginaOnblack from "./imagesPiece/Black/BReginaOnBlack.png";
import BReginaOnWhite from "./imagesPiece/Black/BReginaOnWhite.png";
import BRegeaOnblack from "./imagesPiece/Black/BRegeOnBlack.png";
import BRegeaOnWhite from "./imagesPiece/Black/BRegeOnWhite.png";
import WhitePoint from './imagesPiece/whitepoint.png'
import BlackPoint from './imagesPiece/blackpoint.png'
const black = { backgroundColor: " rgb(209, 139, 71)" };
  const white = { backgroundColor: "rgb(255, 206, 158)" };
  const blackpoint = {
    backgroundImage: `url(${BlackPoint})`,
    backgroundSize: "100%",
  };
  const whitepoint = {
    backgroundImage: `url(${WhitePoint})`,
    backgroundSize: "100%",
  };
  const BPiononBlack = {
    backgroundImage: `url(${BPionOnBlack})`,
    backgroundSize: "100%",
  };
  const BPiononWhite = {
    backgroundImage: `url(${BPionOnWhite})`,
    backgroundSize: "100%",
  };
  const BCalonWhite = {
    backgroundImage: `url(${BCalOnWhite})`,
    backgroundSize: "100%",
  };
  const BCalonBlack = {
    backgroundImage: `url(${BCalOnblack})`,
    backgroundSize: "100%",
  };
  const BTuraonWhite = {
    backgroundImage: `url(${ BTuraOnWhite})`,
    backgroundSize: "100%",
  };
  const BTuraonBlack = {
    backgroundImage: `url(${BTuraOnblack})`,
    backgroundSize: "100%",
  };
  const BNebunonWhite = {
    backgroundImage: `url(${ BNebunOnWhite})`,
    backgroundSize: "100%",
  };
  const BNebunonBlack = {
    backgroundImage: `url(${BNebunOnblack})`,
    backgroundSize: "100%",
  };
  const BReginaonWhite = {
    backgroundImage: `url(${ BReginaOnWhite})`,
    backgroundSize: "100%",
  };
  const BReginaonBlack = {
    backgroundImage: `url(${BReginaOnblack})`,
    backgroundSize: "100%",
  };
  const BRegeonWhite = {
    backgroundImage: `url(${ BRegeaOnWhite})`,
    backgroundSize: "100%",
  };
  const BRegeonBlack = {
    backgroundImage: `url(${BRegeaOnblack})`,
    backgroundSize: "100%",
  };
export function setBStylecount(i, j,arrtable) {
  if(arrtable[i][j]===65){
    if (i % 2 == 0) {
      if (j % 2 != 0) {
        return blackpoint;
      }
    }
    if (i % 2 != 0) {
      if (j % 2 == 0) {
        return blackpoint;
      }
    }
    return whitepoint;
  }
    if (arrtable[i][j] == 0) {
      if (i % 2 == 0) {
        if (j % 2 != 0) {
          return black;
        }
      }
      if (i % 2 != 0) {
        if (j % 2 == 0) {
          return black;
        }
      }
      return white;
    } else {
      if (arrtable[i][j] === 1) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return BPiononBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return BPiononBlack;
          }
        }
        return BPiononWhite;
      }
      if (arrtable[i][j] === 2) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return BCalonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return BCalonBlack;
          }
        }
         return BCalonWhite;
      }
      if (arrtable[i][j] === 4) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return BTuraonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return BTuraonBlack;
          }
        }
        return BTuraonWhite;
      }
      if (arrtable[i][j] === 3) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return BNebunonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return BNebunonBlack;
          }
        }
        return BNebunonWhite;
      }
      if (arrtable[i][j] === 5) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return  BReginaonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return  BReginaonBlack;
          }
        }
         return BReginaonWhite;
      }
      if (arrtable[i][j] === 6) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return  BRegeonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return  BRegeonBlack;
          }
        }
        return BRegeonWhite;
      }
    }
  }