import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../reducers/dataSetter';

const InputComponent: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
  };

  const handleClick = (): void => {
      dispatch(setData({ data: value }));
      setValue('');
  };

  return (
    <div className="inputContainer">
      <input onChange={handleChange} value={value} />
      <button className="commonButton" onClick={handleClick}>+</button>
    </div>
  );
}

export default InputComponent;
