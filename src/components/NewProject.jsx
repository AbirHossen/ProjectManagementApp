import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredtTitle = titleRef.current.value;
    const enteredtDescription = descriptionRef.current.value;
    const enteredtDueDate = dueDateRef.current.value;
    if (
      enteredtTitle.trim() === "" ||
      enteredtDescription.trim() === "" ||
      enteredtDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredtTitle,
      description: enteredtDescription,
      dueDate: enteredtDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops ... looks like you forgot to enter a valid value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hver-bg-stone-950 "
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
