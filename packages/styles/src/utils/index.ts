import { colorLevels, colorsList } from '../variables/colors';

/**
 * Converte pixel de string para numero
 * @param px String
 * @return Number
 */
export function parsePixel(px?: string): number {
  if (!px) return 0;

  let result = Number(px.replace(/[^0-9]/gi, ''));

  if (px.includes('%')) {
    result = 0;
  }
  if (px.includes('vh')) {
    result = (result / 100) * (document.body.clientHeight || 0);
  }
  if (px.includes('vw')) {
    result = (result / 100) * (document.body.clientWidth || 0);
  }

  return result;
}

/**
 * Retorna uma cor aleatória do style-guide
 * @return Color
 */
export function randomColor() {
  const colors = colorsList.filter((x) => !['black', 'white'].includes(x));
  const indexColor = Math.floor(Math.random() * (colors.length - 1));
  return colors[indexColor];
}

/**
 * Retorna um nivel de cor aleatória do style-guide
 * @return ColorLevel
 */
export function randomColorLevel() {
  const indexLevel = Math.floor(Math.random() * (colorLevels.length - 1));
  return colorLevels[indexLevel];
}

/**
 * Util para adicionar alpha em cor hexadecimal
 * @param color String (Hex color)
 * @param opacity Number (Decimal)
 * @return String (Hex color with alpha)
 */
export function addAlphaHex(color: string, opacity?: number) {
  // prettier-ignore
  const alphas = ['FF','FC','FA','F7','F5','F2','F0','ED','EB','E8','E6','E3','E0','DE','DB','D9','D6','D4','D1','CF','CC','C9','C7','C4','C2','BF','BD','BA','B8','B5','B3','B0','AD','AB','A8','A6','A3','A1','9E','9C','99','96','94','91','8F','8C','8A','87','85','82','80','7D','7A','78','75','73','70','6E','6B','69','66','63','61','5E','5C','59','57','54','52','4F','4D','4A','47','45','42','40','3D','3B','38','36','33','30','2E','2B','29','26','24','21','1F','1C','1A','17','14','12','0F','0D','0A','08','05','03','00'];
  if (opacity) {
    return `${alphas[opacity * 100]}${color}`;
  }
  return `${alphas[0]}${color}`;
}
