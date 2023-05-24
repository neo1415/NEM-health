import React from 'react';
import { EmailField, FileField } from 'payload-plugin-form-builder/dist/types';
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';
import { Error } from '../Error';
import { Width } from '../Width';

import classes from './index.module.scss';

export const File: React.FC<FileField & {
  register: UseFormRegister<FieldValues & any>;
  errors: Partial<FieldErrorsImpl<{
    [x: string]: any;
  }>>
}> = ({ name, width, label, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor="file" className={classes.label}>
          {label}
        </label>
        <input
          type="file"
          placeholder="Input File"
          className={classes.input}
          {...register(name, { required: requiredFromProps})}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  );
};
