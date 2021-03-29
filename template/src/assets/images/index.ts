export type ImageNames = 'logo';

export const images: { [K in ImageNames]: number } = {
  logo: require('./logo.png'),
};
