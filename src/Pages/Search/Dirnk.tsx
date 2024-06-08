import SimpleSpacing from '@/shared/Components';
import { Product } from '@/shared/types';
import { Row, Col, Divider, Space, Card } from 'antd';
import { LazyLoadImage, ScrollPosition } from 'react-lazy-load-image-component';

import Instructions from './Instructions';
import { DRINKS_GRID } from './constants';
import styles from './styles.module.scss';

type DrinkType = {
  item: Product;
  scrollPosition: ScrollPosition;
};

const Drink = ({ item, scrollPosition }: DrinkType) => {
  return (
    <>
      <Card title="Default size card">
        <Row key={item.idDrink} justify={'center'}>
          <Col sm={DRINKS_GRID.left.sm} xs={DRINKS_GRID.left.sm} md={DRINKS_GRID.left.md}>
            <h3>{item.strDrink}</h3>
            <Divider dashed />
            <h4>{item.strCategory}</h4>
            <h4>{item.strAlcoholic}</h4>
            <h4>{item.strGlass}</h4>

            <div>
              <b>Instructions:</b>
              <p>{item.strInstructions}</p>
            </div>
            <Instructions item={item} />
          </Col>
          <Col sm={DRINKS_GRID.right.xs} xs={DRINKS_GRID.right.xs} md={DRINKS_GRID.right.md}>
            <LazyLoadImage
              className={styles.image}
              width={'100%'}
              scrollPosition={scrollPosition}
              src={item.strDrinkThumb}
              loading="lazy"
              delayMethod={'debounce'}
              effect="opacity"
            />
          </Col>
        </Row>
      </Card>
      <SimpleSpacing />
    </>
  );
};

export default Drink;
