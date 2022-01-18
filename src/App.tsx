import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';

const App: FC = () => {
  return (
      <Provider store={store}>
          <div className="mainContainer">
          <InputComponent />
          <TodoList />
        </div>
      </Provider>
  );
}

export default App;
