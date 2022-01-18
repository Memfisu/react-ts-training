export interface IAction {
    type: string;
    payload: IData | number; // todo
}

export interface IData {
    data: string
}

export interface IState {
    dataSetter: IData[];
}