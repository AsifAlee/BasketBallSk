import { baseUrl2 } from "./api";

export function rewGet(rewDesc) {
  var rewImg;

  if (rewDesc?.includes("Raging Bull Profile Frame")) {
    rewImg = baseUrl2 + "streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("Spaceship Entrance")) {
    rewImg = baseUrl2 + "streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Brave Heart Profile Frame")) {
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
