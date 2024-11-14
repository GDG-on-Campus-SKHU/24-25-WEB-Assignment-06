import style from './personList.module.less';
import type { Person } from './types';

type Props = {
  personList: Person[]
}

function PersonList({personList}: Props) {
  return (
    <div className={style.list}>
        <h3>등록된 팬클럽 멤버</h3>
        {personList.map((person) => (
          <div key={person.id} className={style.person}>
            <p>닉네임: {person.name}</p>
            <p>나이: {person.age}</p>
            <p>성별: {person.gender}</p>
            <p>최애멤버: {person.favorite}</p>
          </div>
        ))}
      </div>
  )
}

export default PersonList