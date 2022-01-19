import { actions } from '../constants/constants';
import { IAction, IData } from '../interfaces/interfaces';

const setFilter = (criterion: string) => ({
    type: actions.FILTER,
    payload: criterion
});

const dataFilter = (state: IData[] = [], action: IAction) => {
    switch (action.type) {
        case actions.FILTER:
            return {
                ...state,
                criterion: action.payload
            }
        default:
            return state || {};
    }
};

export { setFilter };
export default dataFilter;