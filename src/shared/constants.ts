export const PATHS = {
  BASE: 'https://www.thecocktaildb.com/',
  SEARCH_PATH: 'api/json/v1/1/search.php',
  SEARCH_PARAMS: '?s='
};

export const HP_TO_REDIRECT = '/';

export const NAVBAR_GRID = {
  left: {
    sm: {
      span: 24
    },
    md: {
      span: 4
    }
  },
  right: {
    sm: {
      span: 24
    },
    md: {
      span: 18,
      offset: 2
    }
  }
} as const;
