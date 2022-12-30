import WPionOnBlack from "./imagesPiece/BlackTaken/BPionOnBlackC.png";
import WPionOnWhite from "./imagesPiece/BlackTaken/BPionOnWhiteC.png";
import WCalOnblack from "./imagesPiece/BlackTaken/BCalOnBlackC.png";
import WCalOnWhite from "./imagesPiece/BlackTaken/BCalOnWhiteC.png";
import WTuraOnblack from "./imagesPiece/BlackTaken/BTuraOnBlackC.png";
import WTuraOnWhite from "./imagesPiece/BlackTaken/BTuraOnWhiteC.png";
import WNebunOnblack from "./imagesPiece/BlackTaken/BNebunOnBlackC.png";
import WNebunOnWhite from "./imagesPiece/BlackTaken/BNebunOnWhiteC.png";
import WReginaOnblack from "./imagesPiece/BlackTaken/BReginaOnBlackC.png";
import WReginaOnWhite from "./imagesPiece/BlackTaken/BReginaOnWhiteC.png";


const black = { backgroundColor: " rgb(209, 139, 71)" };
  const white = { backgroundColor: "rgb(255, 206, 158)" };
  const WPiononBlack = {
    backgroundImage: `url(${WPionOnBlack})`,
    backgroundSize: "100%",
  };
  const WPiononWhite = {
    backgroundImage: `url(${WPionOnWhite})`,
    backgroundSize: "100%",
  };
  const WCalonWhite = {
    backgroundImage: `url(${WCalOnWhite})`,
    backgroundSize: "100%",
  };
  const WCalonBlack = {
    backgroundImage: `url(${WCalOnblack})`,
    backgroundSize: "100%",
  };
  const WTuraonWhite = {
    backgroundImage: `url(${ WTuraOnWhite})`,
    backgroundSize: "100%",
  };
  const WTuraonBlack = {
    backgroundImage: `url(${WTuraOnblack})`,
    backgroundSize: "100%",
  };
  const WNebunonWhite = {
    backgroundImage: `url(${ WNebunOnWhite})`,
    backgroundSize: "100%",
  };
  const WNebunonBlack = {
    backgroundImage: `url(${WNebunOnblack})`,
    backgroundSize: "100%",
  };
  const WReginaonWhite = {
    backgroundImage: `url(${ WReginaOnWhite})`,
    backgroundSize: "100%",
  };
  const WReginaonBlack = {
    backgroundImage: `url(${WReginaOnblack})`,
    backgroundSize: "100%",
  };
  
export function setBStyleWcountTaken(i, j,arrtable) {
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
      if (arrtable[i][j] === 66) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return WPiononBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return WPiononBlack;
          }
        }
        return WPiononWhite;
      }
      if (arrtable[i][j] === 67) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return WCalonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return WCalonBlack;
          }
        }
         return WCalonWhite;
      }
      if (arrtable[i][j] === 69) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return WTuraonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return WTuraonBlack;
          }
        }
         return WTuraonWhite;
      }
      if (arrtable[i][j] === 68) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return WNebunonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return WNebunonBlack;
          }
        }
         return WNebunonWhite;
      }
      if (arrtable[i][j] === 70) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return  WReginaonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return  WReginaonBlack;
          }
        }
         return WReginaonWhite;
      }
      
    }
  }