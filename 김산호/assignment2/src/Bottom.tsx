import type { Todo } from "./types"
import style from './Bottom.module.less';

type Props = {
  todoList: Todo[],
  onClick: () => void;
}

function Bottom({todoList, onClick}: Props) {
  return (
    <div className={style.bottom}>
      <div className={style.todayTasksDiv}>오늘 할 일 {todoList.length}</div>
      <div className={style.addTodoDiv} onClick={onClick}>추가하기</div>
    </div>
  )
}

export default Bottom