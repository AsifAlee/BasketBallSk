import { baseUrl2 } from "./api";
// import xp from "../assests/rewards/xp-point.png";
import xp from "./assets/images/beanbag.png";

export function rewGet(rewDesc) {
  var rewImg;

  //console.log("my rweww"+rewDesc)
  if (rewDesc?.includes("Fragment") || rewDesc?.includes("fragment")) {
    if (rewDesc?.includes("infinity") || rewDesc?.includes("Infinity")) {
      rewImg = "./rewards/Infinity.png";
    } else if (rewDesc?.includes("titan") || rewDesc?.includes("Titan")) {
      rewImg = "./rewards/Titan.png";
    } else if (rewDesc?.includes("sigma") || rewDesc?.includes("Sigma")) {
      rewImg = "./rewards/Sigma.png";
    } else if (rewDesc?.includes("hydra") || rewDesc?.includes("Hydra")) {
      rewImg = "./rewards/Hydra.png";
    } else if (rewDesc?.includes("raven") || rewDesc?.includes("Raven")) {
      rewImg = "./rewards/Raven.png";
    } else if (rewDesc?.includes("pegasus") || rewDesc?.includes("Pegasus")) {
      rewImg = "./rewards/Pegasus.png";
    }
  } else if (rewDesc?.includes("Raging")) {
    rewImg = baseUrl2 + "streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("spaceship")) {
    rewImg = baseUrl2 + "streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Brave")) {
    rewImg = baseUrl2 + "streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("audio")) {
    rewImg = baseUrl2 + "streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("hero")) {
    rewImg = baseUrl2 + "streamkar/rewards/heroEntrance.png";
  } else if (rewDesc?.includes("xp") || rewDesc?.includes("XP")) {
    rewImg = xp;
  } else if (rewDesc?.includes("Maestro") || rewDesc?.includes("maestro ")) {
    rewImg = baseUrl2 + "/streamkar/rewards/maestro.png";
  } else if (rewDesc?.includes("Fury") || rewDesc?.includes("fury")) {
    rewImg = baseUrl2 + "/streamkar/rewards/furyFrame.png";
  } else if (
    rewDesc?.includes("FireBrand Profile Frame") ||
    rewDesc?.includes("firebrand profile frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/firebrand Profile frame.png";
  } else if (
    rewDesc?.includes("Maharaja Entrance") ||
    rewDesc?.includes("maharaja entrance")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/Maharaja-rewards.png";
  }
  //new Start
  else if (
    rewDesc?.includes("Safari Champion Frame(new)") ||
    rewDesc?.includes("Safari Champion Frame(New)") ||
    rewDesc?.includes("Safari Champion Frame (New)") ||
    rewDesc?.includes("safari frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/safariDesertframe.png";
  } else if (
    rewDesc?.includes("Safari Champion Room Skin(new)") ||
    rewDesc?.includes("Safari Champion Room Skin(New)") ||
    rewDesc?.includes("Safari Champion Room Skin (New)") ||
    rewDesc?.includes("safari skin")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/safariChampionRoomSkin.png";
  } else if (
    rewDesc?.includes("Moon Knight Room Skin(new)") ||
    rewDesc?.includes("Moon Knight Room Skin(New)") ||
    rewDesc?.includes("Moon Knight Room Skin (new)") ||
    rewDesc?.includes("Moon Knight Room Skin (New)")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/moonKnightSkin.png";
  } else if (
    rewDesc?.includes("Moon Knight Frame(new)") ||
    rewDesc?.includes("Moon Knight Frame(New)")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/moonKnightFrame.png";
  } else if (
    rewDesc?.includes("Charmed Frame") ||
    rewDesc?.includes("Charmed Glory Frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/charmedFrame.png";
  } else if (
    rewDesc?.includes("Ramadan Glory Frame") ||
    rewDesc?.includes("ramadan glory frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/ramadanGloryFrame.png";
  } else if (
    rewDesc?.includes("FireBrand Room Skin") ||
    rewDesc?.includes("firebrand room skin")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/fireBrandAudioTheme.png";
  } else if (
    rewDesc?.includes("Ramadan Mubarak Room Skin") ||
    rewDesc?.includes("ramadan mubarak room skin")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/ramdanMubarakRoomSkin.png";
  } else if (
    rewDesc?.includes("Ignite Frame") ||
    rewDesc?.includes("ignite frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/igniteFrame.png";
  } else if (
    rewDesc?.includes("Desert Knight Room Skin(new)") ||
    rewDesc?.includes("Desert Knight Room Skin(New)") ||
    rewDesc?.includes("desert knight room skin")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/desertNight.png";
  } else if (
    rewDesc?.includes("Desert Knight Frame(new)") ||
    rewDesc?.includes("Desert Knight Frame(New)") ||
    rewDesc?.includes("desert knight frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/desertnightFrame.png";
  } else if (
    rewDesc?.includes("Waterfront Room Skin") ||
    rewDesc?.includes("waterfront")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/waterfrontRoomskin.png";
  } else if (rewDesc?.includes("Fierce Frame") || rewDesc?.includes("fierce")) {
    rewImg = baseUrl2 + "/streamkar/rewards/fierceFrame.gif";
  } else if (
    rewDesc?.includes("Iron Man Entrance") ||
    rewDesc?.includes("Iron Man ")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/ironMan.png";
  } else if (
    rewDesc?.includes("Frosty Room Skin") ||
    rewDesc?.includes("Frosty Room") ||
    rewDesc?.includes("Frosty Mubarak Room Skin")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/frostySkin.png";
  } else if (
    rewDesc?.includes("Frosty Frame") ||
    rewDesc?.includes("frosty frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/frostyFrame.png";
  } else if (
    rewDesc?.includes("Pirate Ship Entrance") ||
    rewDesc?.includes("pirate ship")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/pirateShip.png";
  } else if (rewDesc?.includes("Gems") || rewDesc?.includes("gems")) {
    rewImg = baseUrl2 + "/streamkar/rewards/gems.png";
  }
  //new End
  else if (
    rewDesc?.includes("BraveHeart") ||
    rewDesc?.includes("braveheart") ||
    rewDesc?.includes("Brave Heart Frame")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/braveHeart.png";
  } else if (
    rewDesc?.includes("Ignite Profile Frame") ||
    rewDesc?.includes("Ignite")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/igniteFrame.png";
  } else if (rewDesc?.includes("spaceship") || rewDesc?.includes("Spaceship")) {
    rewImg = baseUrl2 + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Superstar") || rewDesc?.includes("Superstar")) {
    rewImg = baseUrl2 + "/streamkar/rewards/superstarProfileFrame.png";
  } else if (
    rewDesc?.includes("Celebration") ||
    rewDesc?.includes("celebration")
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/celebrationRoomskin.png";
  } else if (rewDesc?.includes("SVIP") == true) {
    rewImg = baseUrl2 + "/streamkar/rewards/svip.png";
  } else if (
    rewDesc?.includes("Bentley") == true ||
    rewDesc?.includes("bentley") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/bentley.png";
  } else if (
    rewDesc?.includes("F22") == true ||
    rewDesc?.includes("f22") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/f22.png";
  } else if (
    rewDesc?.includes("Beans") == true ||
    rewDesc?.includes("beans") == true ||
    rewDesc?.includes("Bean") == true ||
    rewDesc?.includes("bean") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/beanbag.png";
  } else if (
    rewDesc?.includes("Lantern") == true ||
    rewDesc?.includes("lantern") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/Lantern.png";
  } else if (
    rewDesc?.includes("Bomber") == true ||
    rewDesc?.includes("bomber") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/bomber.png";
  } else if (
    rewDesc?.includes("Phoenix Entrance") == true ||
    rewDesc?.includes("phoenix") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/phoniex.png";
  } else if (
    rewDesc?.includes("Batman") == true ||
    rewDesc?.includes("batman") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/batmobile.png";
  } else if (
    rewDesc?.includes("Gold Luxury") == true ||
    rewDesc?.includes("Gold luxury") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/goldLuxury.png";
  } else if (
    rewDesc?.includes("VIP entrance") == true ||
    rewDesc?.includes("VIP Entrance") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/vipcar.png";
  } else if (
    rewDesc?.includes("VIP") == true ||
    rewDesc?.includes("vip") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/vip.png";
  } else if (
    rewDesc?.includes("Solar") == true ||
    rewDesc?.includes("solar") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/solar.png";
  } else if (
    rewDesc?.includes("Bugatti") == true ||
    rewDesc?.includes("bugatti") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/bugati.png";
  } else if (
    rewDesc?.includes("Hawk Entrance") == true ||
    rewDesc?.includes("hawk") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/hawk.png";
  } else if (
    rewDesc?.includes("Motorcycle") == true ||
    rewDesc?.includes("motorcycle") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/motorcycle.png";
  } else if (
    rewDesc?.includes("Bumblebee Entrance") == true ||
    rewDesc?.includes("bumblebee") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/bumblebee.png";
  } else if (
    rewDesc?.includes("Phantom Entrance") == true ||
    rewDesc?.includes("phantom") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/phantom.png";
  } else if (
    rewDesc?.includes("Rider") == true ||
    rewDesc?.includes("rider") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/rider.png";
  } else if (
    rewDesc?.includes("Tiger") == true ||
    rewDesc?.includes("tiger") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/tiger.png";
  } else if (
    rewDesc?.includes("Bumblebee") == true ||
    rewDesc?.includes("bumblebee") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/bumblebee.png";
  } else if (
    rewDesc?.includes("Miss You") == true ||
    rewDesc?.includes("Miss you") == true ||
    rewDesc?.includes("MISS") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/missYou.png";
  } else if (
    rewDesc?.includes("Star") == true ||
    rewDesc?.includes("star") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/Star.png";
  } else if (
    rewDesc?.includes("Telescope") == true ||
    rewDesc?.includes("telescope") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/telescope.png";
  } else if (
    rewDesc?.includes("Hummer") == true ||
    rewDesc?.includes("hummer") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/hummer.png";
  } else if (
    rewDesc?.includes("Kingpin") == true ||
    rewDesc?.includes("kingpin") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/kingspin.png";
  } else if (
    rewDesc?.includes("Dragon") == true ||
    rewDesc?.includes("dragon") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/dragon.png";
  } else if (
    rewDesc?.includes("Rusty") == true ||
    rewDesc?.includes("rusty") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/rustyRanger.png";
  } else if (
    rewDesc?.includes("Lion") == true ||
    rewDesc?.includes("lion") == true
  ) {
    rewImg = baseUrl2 + "/streamkar/rewards/lion.png";
  } else if (
    rewDesc?.includes("Room skin") == true ||
    rewDesc?.includes("Room Skin") == true
  ) {
    if (rewDesc?.includes("Royalty") || rewDesc?.includes("royalty")) {
      rewImg = baseUrl2 + "/streamkar/rewards/royaltiRoom.png";
    } else if (rewDesc?.includes("Kingship") || rewDesc?.includes("kingship")) {
      rewImg = baseUrl2 + "/streamkar/rewards/kingshipRoom.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseUrl2 + "/streamkar/rewards/monarchRoom.png";
    } else if (rewDesc?.includes("Boss") || rewDesc?.includes("boss")) {
      rewImg = baseUrl2 + "/streamkar/rewards/bossRoomSkin.png";
    } else if (
      rewDesc?.includes("Exquisite") ||
      rewDesc?.includes("exquisite")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/exquisiteRoomSkin.png";
    } else if (
      rewDesc?.includes("Enlightening") ||
      rewDesc?.includes("enlightening")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/enlighteningRoom.png";
    } else if (rewDesc?.includes("Alpha") || rewDesc?.includes("alpha")) {
      rewImg = baseUrl2 + "/streamkar/rewards/alphaSkin.png";
    } else if (rewDesc?.includes("New") || rewDesc?.includes("new")) {
      rewImg = baseUrl2 + "/streamkar/rewards/newRoomSkin.png";
    } else if (
      rewDesc?.includes("Celebration") ||
      rewDesc?.includes("celebration")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/celeberationRoomskin.png";
    } else if (
      rewDesc?.includes("Aesthetic") ||
      rewDesc?.includes("aesthetic") ||
      rewDesc?.includes("Aesthetic  Room Skin")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/aestheticRoomskin.png";
    } else if (rewDesc?.includes("Victor") || rewDesc?.includes("victor")) {
      rewImg = baseUrl2 + "/streamkar/rewards/victorSkin.png";
    } else if (rewDesc?.includes("Battle") || rewDesc?.includes("battle")) {
      rewImg = baseUrl2 + "/streamkar/rewards/battleSkin.png";
    }
  } else if (
    rewDesc?.includes("Badge") == true ||
    rewDesc?.includes("badge") == true
  ) {
    if (rewDesc?.includes("Royalty") || rewDesc?.includes("royalty")) {
      rewImg = baseUrl2 + "/streamkar/rewards/royaltiBadge.png";
    } else if (rewDesc?.includes("Kingship") || rewDesc?.includes("kingship")) {
      rewImg = baseUrl2 + "/streamkar/rewards/kingshipBadge.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseUrl2 + "/streamkar/rewards/monarchBadge.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseUrl2 + "/streamkar/rewards/monarchBadge.png";
    } else if (
      rewDesc?.includes("Sovereign") ||
      rewDesc?.includes("sovereign")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/sovereignBadge.png";
    } else if (
      rewDesc?.includes("Exquisite") ||
      rewDesc?.includes("exquisite")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/exquisiteBadge.png";
    } else if (rewDesc?.includes("Beloved") || rewDesc?.includes("beloved")) {
      rewImg = baseUrl2 + "/streamkar/rewards/belovedBadge.png";
    } else if (rewDesc?.includes("Eid") || rewDesc?.includes("eid")) {
      rewImg = baseUrl2 + "/streamkar/rewards/eidBadge.png";
    } else if (rewDesc?.includes("Blessed") || rewDesc?.includes("blessed")) {
      rewImg = baseUrl2 + "/streamkar/rewards/blessedBadge.png";
    } else if (rewDesc?.includes("Topliner") || rewDesc?.includes("topliner")) {
      rewImg = baseUrl2 + "/streamkar/rewards/toplinerBadge.png";
    }
  } else if (
    rewDesc?.includes("Frame") == true ||
    rewDesc?.includes("frame") == true
  ) {
    if (
      rewDesc?.includes("Profile frame") ||
      rewDesc?.includes("Profile frame")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/superstarProfileFrame.png";
    } else if (rewDesc?.includes("Royalty") || rewDesc?.includes("royalty")) {
      rewImg = baseUrl2 + "/streamkar/rewards/royaltiProfileFrame.png";
    } else if (rewDesc?.includes("glory") || rewDesc?.includes("Glory")) {
      rewImg = baseUrl2 + "/streamkar/rewards/glory-frame.png";
    } else if (rewDesc?.includes("Ace") || rewDesc?.includes("ace")) {
      rewImg = baseUrl2 + "/streamkar/rewards/ace.png";
    } else if (rewDesc?.includes("King") || rewDesc?.includes("king")) {
      rewImg = baseUrl2 + "/streamkar/rewards/kingFrame.png";
    } else if (rewDesc?.includes("Battle") || rewDesc?.includes("battle")) {
      rewImg = baseUrl2 + "/streamkar/rewards/battleFrame.png";
    } else if (rewDesc?.includes("Kingship") || rewDesc?.includes("kingship")) {
      rewImg = baseUrl2 + "/streamkar/rewards/kingshipProfileFrame.png";
    } else if (rewDesc?.includes("Monarch") || rewDesc?.includes("monarch")) {
      rewImg = baseUrl2 + "/streamkar/rewards/monarchProfileFrame.png";
    } else if (
      rewDesc?.includes("Super Hunter") ||
      rewDesc?.includes("Super hunter") ||
      rewDesc?.includes("Hunter")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/superHunterFrame.png";
    } else if (
      rewDesc?.includes("Exquisite") ||
      rewDesc?.includes("exquisite")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/exquisiteFrame.png";
    } else if (rewDesc?.includes("Mysterio") || rewDesc?.includes("mysterio")) {
      rewImg = baseUrl2 + "/streamkar/rewards/mysterioFrame.png";
    } else if (rewDesc?.includes("Alpha") || rewDesc?.includes("alpha")) {
      rewImg = baseUrl2 + "/streamkar/rewards/alphaFrame.png";
    } else if (rewDesc?.includes("Eid") || rewDesc?.includes("eid")) {
      rewImg = baseUrl2 + "/streamkar/rewards/eidFrame.png";
    } else if (
      rewDesc?.includes("Celebration") ||
      rewDesc?.includes("celebration")
    ) {
      rewImg = baseUrl2 + "/streamkar/rewards/celebrationFrame.png";
    } else if (rewDesc?.includes("Jericho") || rewDesc?.includes("jericho")) {
      rewImg = baseUrl2 + "/streamkar/rewards/jerichoFrame.png";
    } else if (rewDesc?.includes("Mubarak") || rewDesc?.includes("mubarak")) {
      rewImg = baseUrl2 + "/streamkar/rewards/mubarakFrame.png";
    } else if (rewDesc?.includes("Taj") || rewDesc?.includes("taj")) {
      rewImg = baseUrl2 + "/streamkar/rewards/tajframe.png";
    } else if (rewDesc?.includes("Doyen") || rewDesc?.includes("doyen")) {
      rewImg = baseUrl2 + "/streamkar/rewards/doyenFrame.png";
    }
  } else {
    rewImg = baseUrl2 + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
