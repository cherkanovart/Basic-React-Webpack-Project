import { NAVBAR_GRID } from '@/shared/constants';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { searchPageById } from '@/slices/search.slice';
import Selectors from '@/store/selectors';
import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component';

import Drink from './Dirnk';

const Search = ({ scrollPosition }: { scrollPosition: ScrollPosition }) => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(Selectors.getActiveTabData);
  const activeTab = useAppSelector(Selectors.getActiveTab);
  const isLoading = useAppSelector(Selectors.getIsLoading);

  useEffect(() => {
    if (activeTab) {
      dispatch(searchPageById(activeTab));
    }
  }, [activeTab, dispatch]);

  return (
    <Col sm={NAVBAR_GRID.right.sm} md={NAVBAR_GRID.right.md} xs={NAVBAR_GRID.right.sm}>
      {search.drinks.map((e) => {
        return <Drink key={e.idDrink} item={e} scrollPosition={scrollPosition} />;
      })}
      {isLoading && <Spin fullscreen size="large" />}
    </Col>
  );
};

export default trackWindowScroll(Search);
