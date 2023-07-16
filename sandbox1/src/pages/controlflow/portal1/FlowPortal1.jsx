import { Portal, Show } from "solid-js/web";
import "./flowPortal1.css";
import { createSignal } from "solid-js";

function Modal(props) {
  const body = document.querySelector("body");

  function close() {
    props?.onClose();
  }

  return (
    <Portal mount={body}>
      <Show when={props.active}>
        <div class="portal1-modal">
          <div class="portal1-modalBackground"></div>
          <div class="portal1-modalContent">
            <div>モーダルですわ</div>
            <div>
              <button onClick={close}>close</button>
            </div>
          </div>
        </div>
      </Show>
    </Portal>
  );
}

function FlowPortal1() {
  const [modal1Visible, setModal1Visible] = createSignal(false);

  function openModal() {
    setModal1Visible(true);
  }

  return (
    <div>
      <h1>portal</h1>

      <button onClick={openModal}>モーダル1</button>
      <Modal active={modal1Visible()} onClose={() => setModal1Visible(false)} />
    </div>
  );
}

export default FlowPortal1;
