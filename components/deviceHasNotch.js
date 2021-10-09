/**
 * Array of devices copied from react-native-device-info
 * (this module doesn't work with Expo)
 * KEEP THIS ARRAY UP TO DATE
 */

const devicesWithNotch = [
  /** Simulator added for testing purpose */
  {
    "brand": "Apple",
    "model": "simulator"
  },
  {
    "brand": "Apple",
    "model": "iphone 13 mini"
  },
  {
    "brand": "Apple",
    "model": "iphone 13"
  },
  {
    "brand": "Apple",
    "model": "iphone 13 pro"
  },
  {
    "brand": "Apple",
    "model": "iphone 13 pro max"
  },
  {
    "brand": "Apple",
    "model": "iphone 12 mini"
  },
  {
    "brand": "Apple",
    "model": "iphone 12"
  },
  {
    "brand": "Apple",
    "model": "iphone 12 pro"
  },
  {
    "brand": "Apple",
    "model": "iphone 12 pro max"
  },
  {
    "brand": "Apple",
    "model": "iphone 11"
  },
  {
    "brand": "Apple",
    "model": "iphone 11 pro"
  },
  {
    "brand": "Apple",
    "model": "iphone 11 pro max"
  },
  {
    "brand": "Apple",
    "model": "iphone x"
  },
  {
    "brand": "Apple",
    "model": "iphone xs"
  },
  {
    "brand": "Apple",
    "model": "iphone xs max"
  },
  {
    "brand": "Apple",
    "model": "iphone xr"
  },
  {
    "brand": "Asus",
    "model": "zenfone 5"
  },
  {
    "brand": "Asus",
    "model": "zenfone 5z"
  },
  {
    "brand": "google",
    "model": "pixel 3 xl"
  },
  {
    "brand": "google",
    "model": "pixel 4a"
  },
  {
    "brand": "Huawei",
    "model": "p20"
  },
  {
    "brand": "Huawei",
    "model": "p20 plus"
  },
  {
    "brand": "Huawei",
    "model": "p20 lite"
  },
  {
    "brand": "Huawei",
    "model": "ane-lx1"
  },
  {
    "brand": "Huawei",
    "model": "ine-lx1"
  },
  {
    "brand": "Huawei",
    "model": "pot-lx1"
  },
  {
    "brand": "Huawei",
    "model": "honor 10"
  },
  {
    "brand": "Huawei",
    "model": "mate 20 lite"
  },
  {
    "brand": "Huawei",
    "model": "mate 20 pro"
  },
  {
    "brand": "Huawei",
    "model": "ele-l29"
  },
  {
    "brand": "Huawei",
    "model": "p30 lite"
  },
  {
    "brand": "Huawei",
    "model": "p30 pro"
  },
  {
    "brand": "Huawei",
    "model": "nova 3"
  },
  {
    "brand": "Huawei",
    "model": "nova 3i"
  },
  {
    "brand": "Leagoo",
    "model": "s9"
  },
  {
    "brand": "LG",
    "model": "g7"
  },
  {
    "brand": "LG",
    "model": "g7 thinq"
  },
  {
    "brand": "LG",
    "model": "g7+ thinq"
  },
  {
    "brand": "LG",
    "model": "lm-q910"
  },
  {
    "brand": "LG",
    "model": "lm-g710"
  },
  {
    "brand": "LG",
    "model": "lm-v405"
  },
  {
    "brand": "Motorola",
    "model": "moto g7 play"
  },
  {
    "brand": "Motorola",
    "model": "moto g7 power"
  },
  {
    "brand": "Motorola",
    "model": "one"
  },
  {
    "brand": "Motorola",
    "model": "motorola one vision"
  },
  {
    "brand": "Nokia",
    "model": "5.1 plus"
  },
  {
    "brand": "Nokia",
    "model": "nokia 6.1 plus"
  },
  {
    "brand": "Nokia",
    "model": "7.1"
  },
  {
    "brand": "Nokia",
    "model": "8.1"
  },
  {
    "brand": "OnePlus",
    "model": "6"
  },
  {
    "brand": "OnePlus",
    "model": "a6003"
  },
  {
    "brand": "ONEPLUS",
    "model": "a6000"
  },
  {
    "brand": "OnePlus",
    "model": "oneplus a6003"
  },
  {
    "brand": "OnePlus",
    "model": "oneplus a6010"
  },
  {
    "brand": "OnePlus",
    "model": "oneplus a6013"
  },
  {
    "brand": "OnePlus",
    "model": "oneplus a6000"
  },
  {
    "brand": "Oppo",
    "model": "r15"
  },
  {
    "brand": "Oppo",
    "model": "r15 pro"
  },
  {
    "brand": "Oppo",
    "model": "f7"
  },
  {
    "brand": "Oukitel",
    "model": "u18"
  },
  {
    "brand": "Redmi",
    "model": "m2004j19c"
  },
  {
    "brand": "Sharp",
    "model": "aquos s3"
  },
  {
    "brand": "Vivo",
    "model": "v9"
  },
  {
    "brand": "Vivo",
    "model": "x21"
  },
  {
    "brand": "Vivo",
    "model": "x21 ud"
  },
  {
    "brand": "xiaomi",
    "model": "mi 8"
  },
  {
    "brand": "xiaomi",
    "model": "mi 8 explorer edition"
  },
  {
    "brand": "xiaomi",
    "model": "mi 8 se"
  },
  {
    "brand": "xiaomi",
    "model": "mi 8 ud"
  },
  {
    "brand": "xiaomi",
    "model": "mi 8 lite"
  },
  {
    "brand": "xiaomi",
    "model": "mi 9"
  },
  {
    "brand": "xiaomi",
    "model": "poco f1"
  },
  {
    "brand": "xiaomi",
    "model": "pocophone f1"
  },
  {
    "brand": "xiaomi",
    "model": "redmi 6 pro"
  },
  {
    "brand": "xiaomi",
    "model": "redmi note 7"
  },
  {
    "brand": "xiaomi",
    "model": "redmi 7"
  },
  {
    "brand": "xiaomi",
    "model": "redmi note 8"
  },
  {
    "brand": "xiaomi",
    "model": "redmi note 8 pro"
  },
  {
    "brand": "xiaomi",
    "model": "mi a2 lite"
  },
  {
    "brand": "Blackview",
    "model": "a30"
  },
  {
    "brand": "Samsung",
    "model": "sm-a217f"
  }
];

export const deviceHasNotch = (model) => {
  const dev = devicesWithNotch.filter((dev) => dev.model === model);
  return dev.length ? true : false;
};

export default devicesWithNotch;
