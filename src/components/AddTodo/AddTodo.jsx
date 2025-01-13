import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState(''); // form을 uncontrol에서 control폼으로 만들기 위함
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      // 빈공백이 입력 안되도록 방지
      return;
    } // 빈공백이 입력되는것 방지
    onAdd({ id: uuid4(), text, status: 'active' });
    setText(''); // text 입력후 내용이 남아있는 것을 없애줌
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="todo를 추가하세요"
          value={text}
          onChange={handleChange}
        />
        <label htmlFor=""></label>
        <button className={styles.button}>Add</button>
      </form>
    </>
  );
}
