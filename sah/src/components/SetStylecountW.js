import WPionOnBlack from "./imagesPiece/White/WPionOnBlack.png";
import WPionOnWhite from "./imagesPiece/White/WPionOnWhite.png";
import WCalOnblack from "./imagesPiece/White/WCalOnBlack.png";
import WCalOnWhite from "./imagesPiece/White/WCalOnWhite.png";
import WTuraOnblack from "./imagesPiece/White/WTuraOnBlack.png";
import WTuraOnWhite from "./imagesPiece/White/WTuraOnWhite.png";
import WNebunOnblack from "./imagesPiece/White/WNebunOnBlack.png";
import WNebunOnWhite from "./imagesPiece/White/WNebunOnWhite.png";
import WReginaOnblack from "./imagesPiece/White/WReginaOnBlack.png";
import WReginaOnWhite from "./imagesPiece/White/WReginaOnWhite.png";
import WRegeaOnblack from "./imagesPiece/White/WRegeOnBlack.png";
import WRegeaOnWhite from "./imagesPiece/White/WRegeOnWhite.png";
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
  const WRegeonWhite = {
    backgroundImage: `url(${ WRegeaOnWhite})`,
    backgroundSize: "100%",
  };
  const WRegeonBlack = {
    backgroundImage: `url(${WRegeaOnblack})`,
    backgroundSize: "100%",
  };
export function setWStylecount(i, j,arrtable) {
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
      if (arrtable[i][j] === -1) {
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
      if (arrtable[i][j] === -2) {
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
      if (arrtable[i][j] === -4) {
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
      if (arrtable[i][j] === -3) {
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
      if (arrtable[i][j] === -5) {
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
      if (arrtable[i][j] === -6) {
        if (i % 2 == 0) {
          if (j % 2 != 0) {
            return  WRegeonBlack;
          }
        }
        if (i % 2 != 0) {
          if (j % 2 == 0) {
            return  WRegeonBlack;
          }
        }
        return WRegeonWhite;
      }
    }
  }