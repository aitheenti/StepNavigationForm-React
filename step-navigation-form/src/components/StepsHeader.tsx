const StepHeader = () => {
  console.log("step header");
  return (
    <div className="flex flex-col">
      <h1>Job Posting Name</h1>
      <div className="flex">
        <h3 className="p-5">Step 1 of 3 - Step Name</h3>
        <h3 className="p-5">Step 2 of 3 - Step Name</h3>
        <h3 className="p-5">Step 3 of 3 - Step Name</h3>
      </div>
    </div>
  );
};

export default StepHeader;
