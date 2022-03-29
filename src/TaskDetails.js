const TaskDetails = ({ taskName, done }) => {
  return (
    <div className="flex items-center justify-center w-3/4 m-0 p-0">
      <div className="flex items-center justify-start space-y-16 w-full">
        <div className="sm:w-full p-1 rounded-lg border-2 h-auto  overflow-hidden">
          {taskName}
        </div>
        {/* <div className="m-0 text-center"> {done ? "done" : "NotDone"}</div> */}
      </div>
    </div>
  );
};

export default TaskDetails;
