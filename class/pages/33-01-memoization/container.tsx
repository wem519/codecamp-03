import { useState, useMemo, useCallback } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 되었습니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet +1
  }, []);
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1</button>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
