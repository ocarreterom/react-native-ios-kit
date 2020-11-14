/* @flow */
import color from 'color';
import { BasicColors, LightColors } from './colors';
import type { Theme } from '../types/Theme';

/**
 * Default Theme
 */
const DefaultTheme: Theme = {
  primaryColor: LightColors.blue,
  primaryLightColor: color(LightColors.blue).lighten(0.5).string(),
  disabledColor: LightColors.gray,
  backgroundColor: BasicColors.white,
  barColor: LightColors.gray6,
  dividerColor: LightColors.gray3,
  textColor: LightColors.black,
  placeholderColor: LightColors.gray2,
  footnoteColor: LightColors.gray2,
  footnoteBackgroundColor: LightColors.gray5,
  positiveColor: LightColors.green,
};

export default DefaultTheme;
