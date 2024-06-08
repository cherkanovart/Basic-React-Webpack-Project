import { RootState } from './store';

const Selectors = {
  getActiveTab: (state: RootState) => state.search.activeTab,
  getActiveTabData: (state: RootState) => state.search.data,
  getIsLoading: (state: RootState) => state.search.isLoading
};

export default Selectors;
