import React, { useMemo } from 'react';
import { NameTitle, ErrFromRegister, Autocomplete } from './type';

const CompomentName = ({
  labelTitle,
  nameTitle,
  err,
  autoComplete,
  handleInputChange,
}: {
  labelTitle: NameTitle;
  nameTitle: NameTitle;
  err: ErrFromRegister;
  autoComplete: Autocomplete;
  handleInputChange: any;
}) => {
  const name = useMemo(() => {
    const keys = Object.keys(err);
    for (const key of keys) {
      if (nameTitle === key) {
        return err[key];
      }
    }
    return '';
  }, [err, nameTitle]);

  return (
    <div>
      <label
        htmlFor="username"
        className={`block text-sm font-medium leading-6 ${
          err.username !== '' ? 'text-orange-900' : 'text-gray-900'
        }`}
      >
        {labelTitle.toUpperCase()}
      </label>
      <div className="mt-2">
        <input
          id={nameTitle}
          name={nameTitle}
          type={autoComplete}
          autoComplete={autoComplete}
          required
          className={`${
            name !== '' ? 'text-orange-900 font-bold border-orange-600 border-1' : 'text-gray-900'
          } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          onChange={(event) => handleInputChange(nameTitle, event)}
        />
        <label className="text-orange-900 text-sm">{name}</label>
      </div>
    </div>
  );
};

export default CompomentName;
