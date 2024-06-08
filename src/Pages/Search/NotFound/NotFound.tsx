import { useAppDispatch, useOnComponentDidMount } from '@/shared/hooks';
import { Pages } from '@/shared/types';
import { activeTabSet } from '@/slices/search.slice';
import { FileSearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const NotFound = () => {
  const dispatch = useAppDispatch();

  useOnComponentDidMount(() => {
    dispatch(activeTabSet(null));
  });
  return (
    <div className={styles.wrapper}>
      <FileSearchOutlined style={{ fontSize: '150px' }} />
      <h1>Oops... It seems we cannot find the page is not found</h1>
      <Link to={`/${Pages.margarita}`}>Redirect to home</Link>
    </div>
  );
};

export default NotFound;
