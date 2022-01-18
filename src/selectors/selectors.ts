import { IData, IState } from '../interfaces/interfaces';

export const dataListSelector = (state: IState): IData[] => state.dataSetter;