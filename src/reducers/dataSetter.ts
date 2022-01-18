import { IData, IAction } from '../interfaces/interfaces';

const actions = {
    SET: 'SET_DATA',
    DELETE: 'DELETE_DATA'
}

const setData = (data: IData): IAction => ({
    type: actions.SET,
    payload: data
});

const deleteData = (index: number): IAction => ({
    type: actions.DELETE,
    payload: index
});

const dataSetter = (state: IData[] = [], action: IAction) => {
    switch (action.type) {
        case actions.SET:
            return [...state, action.payload];
        case actions.DELETE:
            return state.filter((item: IData, index: number) => index !== action.payload);
        default:
            return state;
    }
};

export { setData, deleteData };
export default dataSetter;