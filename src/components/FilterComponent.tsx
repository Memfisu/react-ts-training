import React, { FC, useState, useEffect } from 'react';
import { IRadioButton } from '../interfaces/interfaces';
import { setFilter } from '../reducers/dataFilter';
import { useDispatch } from 'react-redux';
import { statuses } from '../constants/constants';

const RadioButton = ({ name = 'filter', label, onClick }: IRadioButton) => {
    return (
        <div className="filterItem">
            <label>
                <input
                    type="radio"
                    name={name}
                    onClick={onClick}
                    defaultChecked={label === statuses.ALL}
                />
                {label}
            </label>
        </div>
    );
};

const FilterComponent: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(statuses.ALL);

  useEffect(() => {
      dispatch(setFilter(value));
  }, [dispatch, value]);

    return (
      <div className="filterContainer">
          {Object.values(statuses).map((item: string, index: number) =>
              <RadioButton
                  key={index}
                  label={item}
                  onClick={() => setValue(item)}
                  checked={value === item} />
          )}
      </div>
  );
}

export default FilterComponent;
