import { AvailableNumbersType, Product } from './types';

export const createIngredients = (product: Product) => {
  const numbers = Array.from({ length: 15 }, (_, index) => index + 1) as AvailableNumbersType[];

  const measureIngredients = numbers.map((number) => {
    const measureKey = `strMeasure${number}` as const;
    const ingredientKey = `strIngredient${number}` as const;
    return { measure: product?.[measureKey], ingredient: product?.[ingredientKey] };
  });

  return measureIngredients;
};
