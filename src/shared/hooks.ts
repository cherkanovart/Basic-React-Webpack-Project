import type { RootState, AppDispatch } from '@/store/store';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useOnComponentDidMount = <T, R>(effect: (...args: T[]) => R) => {
  const componentDidMount = useRef(false);

  useEffect(() => {
    if (!componentDidMount.current) {
      effect();
    }
  }, [effect]);

  useEffect(() => {
    componentDidMount.current = true;
  }, []);
};
