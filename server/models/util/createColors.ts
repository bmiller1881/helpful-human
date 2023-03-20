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
  const colorRanges: { [key: string]: number[] } = {
    red: [255, 0, 0],
    orange: [255, 165, 0],
    yellow: [255, 255, 0],
    green: [0, 128, 0],
    blue: [0, 0, 255],
    purple: [128, 0, 128],
    brown: [165, 42, 42],
  };
  const isGrey =
    Math.max(
      Math.abs(rgb[0] - rgb[1]),
      Math.abs(rgb[1] - rgb[2]),
      Math.abs(rgb[0] - rgb[2])
    ) < 15;
  if (isGrey) return 'gray';
  let closest = '';
  let distance = Infinity;
  for (const color in colorRanges) {
    const currDist =
      (colorRanges[color][0] - rgb[0]) ** 2 +
      (colorRanges[color][1] - rgb[1]) ** 2 +
      (colorRanges[color][2] - rgb[2]) ** 2;
    if (currDist < distance) {
      closest = color;
      distance = currDist;
    }
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
