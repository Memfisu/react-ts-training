export const actions = {
    SET: 'SET_DATA',
    DELETE: 'DELETE_DATA',
    STATUS: 'CHANGE_STATUS',
    FILTER: 'SET_FILTER'
}

export const statuses = {
    ALL: 'all',
    COMPLETED: 'completed',
    UNCOMPLETED: 'uncompleted',
}

export const appropriateLength = 10; // Новая запись добавляется при условии, что её длина меньше N символов или равна ей;
