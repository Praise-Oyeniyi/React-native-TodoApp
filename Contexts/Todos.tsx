import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type AdminContextType = {
  todos: string[],
  setTodos: Dispatch<SetStateAction<string[]>>,
};

const TodosContext = createContext<AdminContextType | undefined>(undefined);

type TodosProviderProps = {
  children: ReactNode;
};

export const AdminProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const [todos,setTodos] = useState(['eat', 'sleep', 'talk', 'code','run'])

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
