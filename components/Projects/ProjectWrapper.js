const ProjectWrapper = (props) => {
  return (
    <main className="flex flex-row h-fit w-full justify-center px-20 flex-wrap">
      {props.children}
    </main>
  );
};

export default ProjectWrapper;
