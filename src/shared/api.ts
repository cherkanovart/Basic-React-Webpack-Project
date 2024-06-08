// .env on real project
import axios from 'axios';

import { PATHS } from './constants';
import { Pages } from './types';

const axiosApi = axios.create({
  baseURL: PATHS.BASE // .env on real project
});
const { SEARCH_PATH } = PATHS;

export const api = {
  search: (id: Pages) => {
    return axiosApi.get(SEARCH_PATH, {
      params: {
        s: id
      }
    });
  }
};
