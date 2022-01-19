import { IData, IState } from '../interfaces/interfaces';
import { createSelector } from 'reselect'
import { statuses } from '../constants/constants';

export const dataListSelector = (state: IState): IData[] => state.dataSetter;
export const filterCriterionSelector = (state: IState): string => state.dataFilter.criterion;

export const filteredData = createSelector([
        dataListSelector,
        filterCriterionSelector
    ],
    (data: IData[], filterInfo: string) => {
        if (filterInfo === statuses.COMPLETED) return data.filter(item => item.completed);
        if (filterInfo === statuses.UNCOMPLETED) return data.filter(item => !item.completed);
        return data;
});