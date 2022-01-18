export interface IAction {
    type: string;
    payload: IData | number;
}

export interface IData {
    data: string
}

export interface IState {
    dataSetter: IData[];
}