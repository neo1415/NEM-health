import React from 'react';
import { useFormProcessing } from '../../forms/Form/context';
import useFieldType from '../../forms/useFieldType';
import validateEmail from '../../forms/validations/email';
import Arrow from '../../graphics/Arrow';
import useStyles from './css';
import validateFile from '../../forms/validations/file';

const Income: React.FC = () => {
  const processing = useFormProcessing();

  const { value, setValue, showError } = useFieldType({
    path: 'income',
    validate: (value) => {
      if (!value || value === 'Choose Company Type') {
        return 'Please select your income';
      }
    }
  });

  const classes = useStyles(  );

  console.log(value)
  return (
    <div className={classes.wrap}>
        <select id="companyType"
        placeholder="Enter your income here..."
        className={classes.email}
        name="income"
        onChange={(e) => setValue(e.target.value)}
        value={value as string || ''} >
                <option value="Choose Company Type">Company Type</option>
                <option value="Sole-Proprietor">Sole Proprietor</option>
                <option value="Limited-Liability-Company">Limited Liability Company</option>
                <option value="Joint-Venture">Joint Venture</option>
            </select> 
      
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

export default Income;
