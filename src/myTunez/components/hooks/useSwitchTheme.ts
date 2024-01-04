import { ChangeEvent, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { persist } from '../../services/data';
import { THEME } from '../../../constants/localStorage';
import { setTheme } from '../../store/theme/themeSlice';

const useSwitchTheme = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (checked) {
        persist(THEME, true);
        dispatch(setTheme(true));
      } else {
        persist(THEME, false);
        dispatch(setTheme(false));
      }
    },
    [dispatch],
  );

  const defaultValue = theme;

  return { handleChange, defaultValue };
};

export default useSwitchTheme;
