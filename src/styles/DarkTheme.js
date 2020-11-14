/* @flow */
import color from 'color';
import { BasicColors, DarkColors } from './colors';
import type { Theme } from '../types/Theme';

const DarkTheme: Theme = {
  colors: DarkColors,
  primaryColor: DarkColors.blue,
  primaryLightColor: color(DarkColors.blue).lighten(0.5).string(),
  disabledColor: DarkColors.gray3,
  backgroundColor: BasicColors.black,
  barColor: DarkColors.gray5,
  dividerColor: DarkColors.gray3,
  textColor: BasicColors.white,
  placeholderColor: DarkColors.gray2,
  footnoteColor: DarkColors.gray6,
  footnoteBackgroundColor: DarkColors.gray6,
  positiveColor: DarkColors.green,
};

export default DarkTheme;
