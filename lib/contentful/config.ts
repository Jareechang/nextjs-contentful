const config = {
  space: process.env.CONTENTFUL_SPACE
  || throw new Error('contentful space not defined'),
  access_token: process.env.CONTENTFUL_ACCESS_TOKEN
  || throw new Error('contentful access_token not defined')
};

export default config;
