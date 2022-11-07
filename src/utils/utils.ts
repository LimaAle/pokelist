import { COLORS } from "../constants";

export function captalizeText(text?: string) {
  if(text==undefined)
  return ''
  let textArr = text.split('-');
  if (textArr.length > 1) {
    let aux2 = textArr.map((text) => text.charAt(0).toUpperCase()
      + text.slice(1));

    return aux2.join(" ");
  }
  return text.charAt(0).toUpperCase()
    + text.slice(1)
}
export function addLeadingZeros(num: number) {
  if (num >= 1000)
    return String(num).padStart(5, '#');
  return String(num).padStart(4, '#00');
}
export function convertWeight(num?: number) {
  if(num==undefined)
  return '0kg'
  return `${(num / 10).toFixed(1)}kg`
}
export function convertHeight(num?: number) {
  if(num==undefined)
  return '0m'
  return `${num / 10}m`
}
export function colorsForPokemon(type?:string){
  let colorType: string;
  let colorBackground:string;
  let colorAvatar:string;
  let isDarkText:boolean;

  switch (type) {
    case 'flying':
      colorType = COLORS.rectangleGrey;
      colorBackground=COLORS.backgroundGrey;
      colorAvatar=COLORS.circleGrey;
      isDarkText=true;
      break;
    case 'bug':
      colorType = COLORS.rectangleGreen;
      colorBackground=COLORS.backgroundGreen;
      colorAvatar=COLORS.circleGreen;
      isDarkText=false;
      break;
    case 'grass':
      colorType = COLORS.rectangleGreen;
      colorBackground=COLORS.backgroundGreen;
      colorAvatar=COLORS.circleGreen;
      isDarkText=false;
      break;
    case 'water':
      colorType = COLORS.rectangleBlue;
      colorBackground=COLORS.backgroundBlue;
      colorAvatar=COLORS.circleBlue;
      isDarkText=false;
      break;
    case 'fire':
      colorType = COLORS.rectangleRed;
      colorBackground=COLORS.backgroundRed;
      colorAvatar=COLORS.circleRed;
      isDarkText=false;
      break;
    default:
      colorType = COLORS.rectangleGrey;
      colorBackground=COLORS.backgroundGrey;
      colorAvatar=COLORS.circleGrey;
      isDarkText=true;
      break;
  }
  return {
    type:colorType,
    background:colorBackground,
    avatar:colorAvatar,
    darkText:isDarkText
  }
}

export function correctText(text?:string){
  if(text==undefined)
  return ''

  return text.replace(/(\r\n|\n|\r|\f)/gm, " ")
}