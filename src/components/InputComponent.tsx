import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../reducers/dataSetter';

const appropriateLength = 10; // Новая запись добавляется при условии, что её длина меньше N символов или равна ей;

const InputComponent: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
      (e.target.value?.length > appropriateLength) ? setError(true) :setError(false);
  };

  const handleClick = (): void => {
      if (!error) {
          dispatch(setData({ data: value }));
          setValue('');
      }
  };

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
