import fonts from './fonts-sources';

const fontsStyles = {
  // Title
  T1: {
    fontFamily: fonts.bold,
    fontSize: 23,
    letterSpacing: 0.38,
  },
  T2: {
    fontFamily: fonts.bold,
    fontSize: 20,
    letterSpacing: 0.38,
  },
  T3: {
    fontFamily: fonts.bold,
    fontSize: 15,
    letterSpacing: 0.38,
  },

  // Subtitle
  S1: {
    fontFamily: fonts.medium,
    fontSize: 23,
    letterSpacing: 0.38,
  },

  // Paragraph
  P1: {
    fontFamily: fonts.regular,
    fontSize: 17,
    letterSpacing: -0.15,
  },
  P1_italic: {
    fontFamily: fonts.regular,
    fontSize: 17,
    letterSpacing: -0.15,
  },
  P2: {
    fontFamily: fonts.regular,
    fontSize: 13,
    letterSpacing: 0.1,
  },

  // Caption
  C1: {
    fontFamily: fonts.regular,
    fontSize: 15,
    letterSpacing: 0.06,
  },
  C2: {
    fontFamily: fonts.regular,
    fontSize: 11,
    letterSpacing: 0.03,
  },

  // Lable
  L1: {
    fontFamily: fonts.medium,
    fontSize: 14,
    letterSpacing: 0.15,
  },

  // Button
  B1: {
    fontFamily: fonts.bold,
    fontSize: 16,
    // letterSpacing: 0,
  },
  B2: {
    fontFamily: fonts.medium,
    fontSize: 14,
    letterSpacing: 0.03,
  },
  B3: {
    fontFamily: fonts.regular,
    fontSize: 13,
    letterSpacing: 0.25,
  },
};

export default fontsStyles;
