export interface IAction {
    type: string;
    payload: IData | number | string;
}

export interface IData {
    data: string,
    completed?: boolean,
    id: number
}

export interface IState {
    dataSetter: IData[];
    dataFilter: {
        criterion: string
    }
}

export interface IRadioButton {
    name?: string,
    label: string,
    checked: boolean,
    onClick: () => void
}