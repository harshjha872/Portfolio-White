const ProjectWrapper = (props) => {
  return (
    <main className="flex flex-row h-fit w-full justify-center sm:px-20 px-11 flex-wrap">
      {props.children}
    </main>
  );
};

export default ProjectWrapper;
