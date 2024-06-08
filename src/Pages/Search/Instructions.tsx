import { Product } from '@/shared/types';
import { createIngredients } from '@/shared/utils';
import { Col, List, Row } from 'antd';
import { useCallback, useMemo } from 'react';

type Instructions = {
  item: Product;
};

type Ingredient = {
  measure: string | null;
  ingredient: string | null;
};

const Instructions = ({ item }: Instructions) => {
  const renderItem = useCallback((instr: Ingredient) => {
    return instr.ingredient || instr.measure ? (
      <List.Item>
        <Col span={24}>
          <Row>
            <Col span={8}>
              <b>{instr.measure ?? 'N/A'}</b>
            </Col>
            <Col span={16}>
              <span>{instr.ingredient}</span>
            </Col>
          </Row>
        </Col>
      </List.Item>
    ) : null;
  }, []);
  const itemInstrunctions = useMemo(() => {
    return createIngredients(item);
  }, [item]);
  return (
    <>
      <List
        header={<b>List of Ingredients</b>}
        dataSource={itemInstrunctions}
        renderItem={renderItem}
      />
    </>
  );
};

export default Instructions;
