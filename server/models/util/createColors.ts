// util function to create color data
import { Output } from '../../../types';

function getColorData(
  totalColors: number,
  totalShades: number,
  totalTints: number,
  detailIncrement: number
) {
  const colorData = [];
  for (let i = 0; i < totalColors; i++) {
    const randomRGB = getRandomRGB();
    colorData.push(
      getDetailsRGB(randomRGB, totalShades, totalTints, detailIncrement)
    );
  }
  return colorData;
}

function getRandomRGB() {
  function randomNum256() {
    return Math.floor(Math.random() * 256);
  }
  return [randomNum256(), randomNum256(), randomNum256()];
}

function rgbToHex(rgb: number[]) {
  const letters = '0123456789ABCDEF';
  return (
    '#' +
    letters[Math.floor(rgb[0] / 16)] +
    letters[Math.floor(rgb[0] % 16)] +
    letters[Math.floor(rgb[1] / 16)] +
    letters[Math.floor(rgb[1] % 16)] +
    letters[Math.floor(rgb[2] / 16)] +
    letters[Math.floor(rgb[2] % 16)]
  );
}

function rgbToString(rgb: number[]) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function classifyColor(rgb: number[]) {
  const colorRanges: { [key: string]: number[][] } = {
    red: [
      [255, 0, 0],
      [227, 34, 39],
      [128, 0, 0],
      [239, 171, 157],
      [193, 52, 0],
    ],
    orange: [
      [255, 165, 0],
      [242, 133, 0],
      [255, 174, 66],
    ],
    yellow: [
      [255, 255, 0],
      [255, 215, 0],
      [255, 202, 75],
      [241, 254, 178],
    ],
    green: [
      [0, 128, 0],
      [50, 205, 50],
      [76, 187, 23],
      [154, 205, 50],
      [201, 231, 203],
      [42, 56, 32],
      [134, 171, 93],
      [94, 174, 107],
      [149, 164, 39],
      [169, 201, 169],
      [138, 165, 123],
      [101, 116, 10],
    ],
    blue: [
      [0, 0, 255],
      [0, 255, 255],
      [13, 152, 186],
      [4, 118, 208],
      [0, 0, 128],
      [171, 232, 250],
      [68, 133, 133],
      [64, 115, 20],
      [68, 116, 130],
    ],
    purple: [
      [128, 0, 128],
      [218, 112, 214],
      [160, 32, 240],
      [143, 0, 255],
      [78, 53, 67],
      [136, 150, 254],
      [140, 136, 191],
      [109, 81, 148],
      [160, 128, 153],
      [251, 237, 249],
    ],
    brown: [
      [150, 75, 0],
      [201, 141, 38],
      [210, 180, 140],
      [123, 63, 0],
      [168, 168, 77],
      [70, 53, 25],
      [109, 98, 53],
    ],
  };
  const isGrey =
    Math.max(
      Math.abs(rgb[0] - rgb[1]),
      Math.abs(rgb[1] - rgb[2]),
      Math.abs(rgb[0] - rgb[2])
    ) < 10;
  if (isGrey) return 'gray';
  let closest = '';
  let distance = Infinity;
  for (const color in colorRanges) {
    colorRanges[color].forEach((version) => {
      const currDist =
        (version[0] - rgb[0]) ** 2 +
        (version[1] - rgb[1]) ** 2 +
        (version[2] - rgb[2]) ** 2;
      if (currDist < distance) {
        closest = color;
        distance = currDist;
      }
    });
  }
  return closest;
}

function getDetailsRGB(
  rgb: number[],
  totalShades: number,
  totalTints: number,
  detailIncrement: number
) {
  const output: Output = {
    ColorHex: rgbToHex(rgb),
    ColorRGB: rgbToString(rgb),
    ShadesHex: [],
    ShadesRGB: [],
    TintsHex: [],
    TintsRGB: [],
    Classification: '',
  };
  // calc shades
  output.Classification += classifyColor(rgb);
  let prevShade = rgb;
  for (let i = 0; i < totalShades; i++) {
    const newShade = [
      Math.floor(prevShade[0] * (1 - detailIncrement)),
      Math.floor(prevShade[1] * (1 - detailIncrement)),
      Math.floor(prevShade[2] * (1 - detailIncrement)),
    ];
    output.ShadesHex.push(rgbToHex(newShade));
    output.ShadesRGB.push(rgbToString(newShade));
    prevShade = newShade;
  }
  // calc tints
  let prevTint = rgb;
  for (let i = 0; i < totalTints; i++) {
    const newTint = [
      Math.floor((255 - prevTint[0]) * detailIncrement + prevTint[0]),
      Math.floor((255 - prevTint[1]) * detailIncrement + prevTint[1]),
      Math.floor((255 - prevTint[2]) * detailIncrement + prevTint[2]),
    ];
    output.TintsHex.push(rgbToHex(newTint));
    output.TintsRGB.push(rgbToString(newTint));
    prevTint = newTint;
  }
  return output;
}

export default getColorData;
