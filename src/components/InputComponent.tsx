import React, { ChangeEvent, FC, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../reducers/dataSetter';
import { appropriateLength } from '../constants/constants';

const InputComponent: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
      (e.target.value?.length > appropriateLength) ? setError(true) :setError(false);
  };

  const handleClick = useCallback((): void => {
      if (!error) {
          dispatch(setData({ data: value, id: 0 }));
          setValue('');
      }
  }, [dispatch, error, value]);

  return (
    <div className="inputComponent">
        <div className="inputContainer">
          <input onChange={handleChange} value={value} />
            {error &&
                <div className="errorBox">
                    {`Длина не должна превышать ${appropriateLength} символов`}
                </div>
            }
        </div>
      <button className="commonButton" onClick={handleClick} disabled={error}>+</button>
    </div>
  );
}

export default InputComponent;
