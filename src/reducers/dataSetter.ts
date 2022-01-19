import { IData, IAction } from '../interfaces/interfaces';
import { actions } from '../constants/constants';

const setData = (data: IData): IAction => ({
    type: actions.SET,
    payload: data
});

const changeStatus = (id: number): IAction => ({
    type: actions.STATUS,
    payload: id
});

const deleteData = (id: number): IAction => ({
    type: actions.DELETE,
    payload: id
});

const setUniqueId = (array: IData[]): number => {
    let id = Math.floor(Math.random() * 100);
    if (array.find(item => item.id === id) || !id) {
        return setUniqueId(array);
    } else return id;
};

const dataSetter = (state: IData[] = [], action: IAction) => {
    switch (action.type) {
        case actions.SET:
            {   const { data } = action.payload as IData;
                return [...state,
                    { data,
                      completed: false,
                      id: setUniqueId(state)
                    }
                ];
            }
        case actions.STATUS:
            return state.map((item: IData) => {
                if (item.id === action.payload) item.completed = !item.completed;
                return item;
            });
        case actions.DELETE:
            return state.filter((item: IData) => item.id !== action.payload);
        default:
            return state;
    }
};

export { setData, deleteData, changeStatus };
export default dataSetter;