import AddIcon from '@mui/icons-material/Add';
import { MouseEventHandler } from 'react';
import { useStyles } from './style';

const AddButton = () => {
  const classes = useStyles();
  const handleClick = () => {
    alert('click');
  }
  return (
    <div className={classes.addButton}>
      <button onClick={handleClick}>
        <AddIcon />
      </button>
    </div>
  );
};

export default AddButton;