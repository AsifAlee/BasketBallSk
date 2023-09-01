import { baseUrl } from "./api";

export function rewGet(rewDesc) {
  var rewImg;

  if (rewDesc?.includes("Raging Bull Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("Spaceship Entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Brave Heart Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("HERO")) {
    rewImg = baseUrl + "/streamkar/rewards/heroEntrance.png";
  } else if (rewDesc?.includes("beansbag")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Ballpark Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/ballParkTheme.png";
  } else if (rewDesc?.includes("Water Splash Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/WaterSplashFrame.png";
  } else if (rewDesc?.includes("Royal Carriage")) {
    rewImg = baseUrl + "/streamkar/rewards/royal.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
