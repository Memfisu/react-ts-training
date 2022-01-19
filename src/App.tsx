import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';
import FilterComponent from './components/FilterComponent';

const App: FC = () => {
  return (
      <Provider store={store}>
          <div className="mainContainer">
            <InputComponent />
            <FilterComponent />
            <TodoList />
        </div>
      </Provider>
  );
}

export default App;
