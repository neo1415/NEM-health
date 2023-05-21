import React from 'react';
import { useFormProcessing } from '../../forms/Form/context';
import useFieldType from '../../forms/useFieldType';
import validateEmail from '../../forms/validations/email';
import Arrow from '../../graphics/Arrow';
import useStyles from './css';
import validateName from '../../forms/validations/name';

const Name: React.FC = () => {
  const processing = useFormProcessing();

  const { value, setValue, showError } = useFieldType({
    path: 'name',
    validate: validateName,
  });

  const classes = useStyles(  );
  console.log(value)

  return (
    <div className={classes.wrap}>
      <input
        placeholder="Enter your Name here..."
        className={classes.email}
        type="text"
        name="name"
        onChange={(e) => setValue(e.target.value)}
        value={value as string || ''}
      />
      
      {/* <button
        type="submit"
        disabled={processing}
        className={classes.button}
      >
        <Arrow />
      </button> */}
    </div>
  );
};

export default Name;
