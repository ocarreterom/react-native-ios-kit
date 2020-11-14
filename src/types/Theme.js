/* @flow */

export type SystemColors = {
  blue: string,
  green: string,
  indigo: string,
  orange: string,
  pink: string,
  purple: string,
  red: string,
  teal: string,
  yellow: string,
  gray: string,
  gray2: string,
  gray3: string,
  gray4: string,
  gray5: string,
  gray6: string,
};

export type Theme = {
  colors: SystemColors,
  primaryColor: string,
  primaryLightColor: string,
  disabledColor: string,
  backgroundColor: string,
  barColor: string,
  dividerColor: string,
  textColor: string,
  placeholderColor: string,
  footnoteColor: string,
  footnoteBackgroundColor: string,
  positiveColor: string,
};
