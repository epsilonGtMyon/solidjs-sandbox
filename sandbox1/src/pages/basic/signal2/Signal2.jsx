import { createSignalWithEventValue } from "./createSignalWithEventValue";

function Signal2() {
  const [firstName, setFirstName, inputFirstName] =
    createSignalWithEventValue("");
  const [familyName, setFamilyName, inputFamilyName] =
    createSignalWithEventValue("");
  const [bloodType, setBloodType, inputBloodType] =
    createSignalWithEventValue("");
  const [memo, setMemo, inputMemo] = createSignalWithEventValue("");

  function reset() {
    setFirstName("");
    setFamilyName("");
    setBloodType("");
    setMemo("");
  }
  return (
    <div>
      <h1>Signal2</h1>
      <div>
        inputのハンドリングをもう少し考えてみる
        createSignalをラップした関数を作ってみる
      </div>

      <div>
        <h2>input</h2>
        <div>
          <div>
            <label>
              firstName:
              <input type="text" value={firstName()} onInput={inputFirstName} />
            </label>
          </div>
          <div>
            <label>
              familyName:
              <input
                type="text"
                value={familyName()}
                onInput={inputFamilyName}
              />
            </label>
          </div>
          <div>
            <label>
              blood
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="A"
                  checked={bloodType() === "A"}
                  onInput={inputBloodType}
                />
                A
              </label>
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="B"
                  checked={bloodType() === "B"}
                  onInput={inputBloodType}
                />
                B
              </label>
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="AB"
                  checked={bloodType() === "AB"}
                  onInput={inputBloodType}
                />
                AB
              </label>
              <label>
                <input
                  type="radio"
                  name="blood"
                  value="O"
                  checked={bloodType() === "O"}
                  onInput={inputBloodType}
                />
                O
              </label>
            </label>
          </div>
          <div>
            <label>
              memo
              <textarea onInput={inputMemo} value={memo()}></textarea>
            </label>
          </div>
        </div>

        <div>
          <h2>result</h2>

          <div>
            result: {firstName()}・{familyName()} {bloodType()}
            <pre>{memo()}</pre>
          </div>
          <div>
            <button onClick={reset}>reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signal2;
