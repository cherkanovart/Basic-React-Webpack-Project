import { HP_TO_REDIRECT } from '@/shared/constants';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { NotFoundPage, Pages } from '@/shared/types';
import { activeTabSet } from '@/slices/search.slice';
import Selectors from '@/store/selectors';
import { List } from 'antd';
import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavItemsList from './NavItemsList';
import styles from './navbar.module.scss';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(Selectors.getActiveTab);
  const { pathname } = useLocation();

  const pages = [Pages.margarita, Pages.mojito, Pages.kir, Pages.a1];

  const handleClick = useCallback(
    (_: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: Pages) => {
      if (page === activeTab) return;
      dispatch(activeTabSet(page));
    },
    [activeTab, dispatch]
  );

  const renderItem = useCallback(
    (item: Pages) => (
      <List.Item>
        <Link
          className={item === activeTab ? styles.active : undefined}
          to={`${item}`}
          onClick={(e) => handleClick(e, item)}
        >
          {item}
        </Link>
      </List.Item>
    ),
    [activeTab, handleClick]
  );

  if (pathname === NotFoundPage || pathname == HP_TO_REDIRECT) return;

  return <NavItemsList list={pages} renderItem={renderItem} />;
};

export default Navbar;
