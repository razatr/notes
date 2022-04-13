import { SpeedDial, SpeedDialIcon } from '@mui/material';
import { unit } from '../../common/metriсs';

const AddButton = () => {
  const handleClick = () => {
    console.log('click');
  }
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'fixed', bottom: unit(7), right: unit(7) }}
      icon={<SpeedDialIcon />}
      onOpen={handleClick}
    >
    </SpeedDial>
  );
};

export default AddButton;