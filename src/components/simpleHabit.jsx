import React, { useCallback, useEffect, useRef, useState } from 'react';


// 함수형 컴포넌트는 props,state가 변경되면 컴포넌트 전체가 반복된다.
const SimpleHabit = () => {

  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count +1);
  });

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`)
  },[])

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
  </li>
  )
}

export default SimpleHabit;