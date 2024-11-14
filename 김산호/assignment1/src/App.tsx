import React, { useState } from "react";
import type { Person, AddPersonFunc } from './types';
import style from "./App.module.less";
import PersonList from "./PersonList";

function App() {
  const [personList, setPersonList] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState("");
  const [favorite, setFavorite] = useState("");

  const addPerson: AddPersonFunc = (person: Person) => {
    const lastIndex = personList.length - 1;
    const lastId = lastIndex === -1 ? 0 : personList[lastIndex].id;
    const newPerson = { ...person, id: lastId + 1 };
    setPersonList([...personList, newPerson]);
  };

  const onClick = () => {
    if (!name || !age || !gender || !favorite) {
      alert("모든 정보를 입력해 주세요!");
      return;
    }
    const person: Person = { id: 0, name, age, gender, favorite };
    addPerson(person);
    setName("");
    setAge(undefined);
    setGender("");
    setFavorite("");
  };

  return (
    <div className={style.container}>
      <div className={style.title}>에스파 팬클럽 명단 등록</div>
      <div className={style.formDiv}>
        <input type="text" placeholder="닉네임"
               onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div className={style.formDiv}>
        <input type="number" placeholder="나이" min="0" step="1"
               onChange={(e) => setAge(parseInt(e.target.value))} value={age || ''} />
      </div>
      <div className={style.formDiv}>
        <label>
          <input type="radio" name="gender"
                 onChange={() => setGender("남자")} checked={gender === "남자"} />
          <span>남자</span>
        </label>
        <label>
          <input type="radio" name="gender"
                 onChange={() => setGender("여자")} checked={gender === "여자"} />
          <span>여자</span>
        </label>
      </div>
      <div className={style.formDiv}>
        <select value={favorite} onChange={(e) => setFavorite(e.target.value)}>
          <option value="">최애멤버</option>
          <option value="윈터">윈터</option>
          <option value="카리나">카리나</option>
          <option value="닝닝">닝닝</option>
          <option value="지젤">지젤</option>
        </select>
      </div>
      <button onClick={onClick} className={style.addButton}>명단에 추가</button>
      <hr />
      <PersonList personList={personList} />
    </div>
  );
}

export default App;
