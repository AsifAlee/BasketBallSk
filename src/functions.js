import { baseUrl } from "./api";

export const formatNumbers = (numberToConvert) => {
  if (numberToConvert >= 1000000) {
    return (numberToConvert / 1000000).toFixed(1) + "M";
  } else if (numberToConvert >= 1000) {
    return (numberToConvert / 1000).toFixed(1) + "K";
  } else {
    return numberToConvert.toString();
  }
};

export const getLevelImage = (level, isTalent) => {
  const talentLevelUrl = `${baseUrl}/streamkar/common/img/tlv`;
  const userLevelUrl = `${baseUrl}/streamkar/common/img/ulv`;
  if (isTalent) {
    return `${talentLevelUrl}/${level}.png`;
  } else {
    return `${userLevelUrl}/${level}.png`;
  }
};

export const gotoProfile = (id) => {
  window.location.href = `http://www.kktv1.com/m/?roomid=${id}`;
};
