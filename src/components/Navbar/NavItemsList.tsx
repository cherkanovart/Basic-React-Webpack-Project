import SimpleSpacing from '@/shared/Components';
import { HP_TO_REDIRECT, NAVBAR_GRID } from '@/shared/constants';
import { useAppDispatch, useOnComponentDidMount } from '@/shared/hooks';
import { Pages } from '@/shared/types';
import { activeTabSet } from '@/slices/search.slice';
import { Col, List } from 'antd';
import { useLocation } from 'react-router-dom';

type NavItemsList = {
  list: Pages[];
  renderItem: (item: Pages) => JSX.Element;
};

const NavItemsList = ({ list, renderItem }: NavItemsList) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useOnComponentDidMount(() => {
    const normalizedPage = pathname.replace(HP_TO_REDIRECT, '');

    if (!normalizedPage) {
      dispatch(activeTabSet(Pages.margarita));
      return;
    }

    if (normalizedPage in Pages) {
      dispatch(activeTabSet(normalizedPage as Pages));
    }
  });

  return (
    <Col sm={NAVBAR_GRID.left.sm} xs={NAVBAR_GRID.left.sm} md={NAVBAR_GRID.left.md}>
      <List dataSource={list} renderItem={renderItem} />
      <SimpleSpacing />
    </Col>
  );
};

export default NavItemsList;
