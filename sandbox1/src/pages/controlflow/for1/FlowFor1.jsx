import { createSignal, For } from "solid-js";
import { ArrayUtil } from "./ArrayUtil";

function FlowFor1() {
  const [familyName, setFamilyName] = createSignal("");
  const [firstName, setFirstName] = createSignal("");
  const [users, setUsers] = createSignal([]);

  let seq = 1;

  function addUser() {
    // こっちだとusersは変わるけどレンダリングが走らない
    // users().push({
    //   id: seq++,
    //   familyName: familyName(),
    //   firstName: firstName(),
    // })

    setUsers((prev) =>
      ArrayUtil.added(prev, {
        id: seq++,
        familyName: familyName(),
        firstName: firstName(),
      })
    );

    setFamilyName("");
    setFirstName("");
  }

  function removeUser(index) {
    setUsers((prev) => ArrayUtil.removedByIndex(prev, index));
  }

  return (
    <div>
      <h1>for</h1>
      <div>forループ</div>
      <div>
        <div>
          <div>
            <label>
              姓：
              <input
                type="text"
                value={familyName()}
                onInput={(e) => setFamilyName(e.target.value)}
              />
            </label>
            <label>
              名：
              <input
                type="text"
                value={firstName()}
                onInput={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button onClick={addUser}>追加</button>
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>姓</th>
              <th>名</th>
              <td>削除</td>
            </tr>
          </thead>
          <tbody>
            <For each={users()} fallback={<div>空</div>}>
              {(user, index) => (
                <tr>
                  <td>{user.familyName}</td>
                  <td>{user.firstName}</td>
                  <td>
                    <button onClick={() => removeUser(index())}>削除</button>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FlowFor1;
