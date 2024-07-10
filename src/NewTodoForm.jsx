// import { useState } from "react";

const NewTodoForm = ({submit, task, SetTask}) => {

     
  return (
    <>
      <form onSubmit={submit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            id="text"
            value={task}
            onChange={(e) => SetTask(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </>
  );
};

export default NewTodoForm;
