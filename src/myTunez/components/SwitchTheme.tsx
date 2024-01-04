import { FormControlLabel, FormGroup } from '@mui/material';

import useSwitchTheme from './hooks/useSwitchTheme';

import { MaterialUISwitch } from '../../themes/styles';

const SwitchTheme = () => {
  const { defaultValue, handleChange } = useSwitchTheme();

  return (
    <FormGroup className="switch-theme">
      <FormControlLabel
        control={
          <MaterialUISwitch value={defaultValue} onChange={handleChange} />
        }
        label=""
      />
    </FormGroup>
  );
};

export default SwitchTheme;
