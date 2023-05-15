import { baseUrl2 } from "./api";
// import xp from "../assests/rewards/xp-point.png";
import xp from "./assets/images/beanbag.png";

export function rewGet(rewDesc) {
  var rewImg;

  //console.log("my rweww"+rewDesc)
  if (rewDesc?.includes("Raging")) {
    rewImg = baseUrl2 + "streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("spaceship")) {
    rewImg = baseUrl2 + "streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Brave")) {
    rewImg = baseUrl2 + "streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("audio")) {
    rewImg = baseUrl2 + "streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("HERO")) {
    rewImg = baseUrl2 + "streamkar/rewards/heroEntrance.png";
  } else if (rewDesc?.includes("beansbag")) {
    rewImg = baseUrl2 + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Ballpark Audio Theme")) {
    rewImg = baseUrl2 + "/streamkar/rewards/ballParkTheme.png";
  } else {
    rewImg = baseUrl2 + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
