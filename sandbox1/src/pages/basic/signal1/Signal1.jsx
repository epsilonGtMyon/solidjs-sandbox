import { createSignal } from "solid-js";

/**
 * Count
 *
 * @returns
 */
function Count() {
  const [count, setCount] = createSignal(0);

  function countUp1() {
    // 値を直接指定するパターン
    setCount(count() + 1);
  }

  function countUp2() {
    // 関数を渡して前回の値から導くパターン
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h2>count</h2>
      <div>signalを使ってカウントアップ</div>
      <div>
        <h3>count1</h3>
        <div>{count()}</div>
        <button onClick={countUp1}>click!</button>
      </div>
      <div>
        <h3>count2</h3>
        <div>{count()}</div>
        <button onClick={countUp2}>click!</button>
      </div>
    </div>
  );
}


/**
 * MyName
 * @returns 
 */
function MyName() {
  const [firstName, setFirstName] = createSignal("");
  const [familyName, setFamilyName] = createSignal("");

  function inputFirstName(ev) {
    const value = ev.target.value;
    setFirstName(value);
  }

  function inputFamilyName(ev) {
    const value = ev.target.value;
    setFamilyName(value);
  }

  function reset() {
    setFirstName("");
    setFamilyName("");
  }

  return (
    <div>
      <h2>my-name</h2>
      <div>inputのハンドリングを試す</div>
      <div>
        <label>
          firstName:
          <input type="text" value={firstName()} onInput={inputFirstName} />
        </label>
      </div>
      <div>
        <label>
          familyName:
          <input type="text" value={familyName()} onInput={inputFamilyName} />
        </label>
      </div>
      <div>
        fullName: {firstName()}・{familyName()}
      </div>

      <div>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

function Signal1() {
  return (
    <div>
      <h1>Signal1</h1>
      <Count />
      <hr />
      <MyName />
    </div>
  );
}

export default Signal1;
