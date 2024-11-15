import React from 'react'
import style from './TodoList.module.less';

type Props = {
  todoList: Todo[],
  toggleTodo: ToggleTodoFunc,
  deleteTodo: DeleteTodoFunc
};

function TodoList({todoList, toggleTodo, deleteTodo}: Props) {
  const trList = todoList.map(todo => (
    <div className={style.todo} key={todo.id}>
      <label className={style.checkboxContainer}>
        <input
          className={style.chk}
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo.id)}
        />
        <i className={style.circle}></i>
      </label>
      <span className={todo.isDone ? style.done : ''}>
        {todo.todoText}
      </span>
      <span className={style.delete} onClick={() => deleteTodo(todo.id)}>삭제</span>
    </div>
  ));

  return (
    <div className={style.todoListWrapper}>
      {trList}
    </div>
  )
}

export default TodoList;