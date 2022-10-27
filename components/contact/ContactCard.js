const ContactCard = (props) => {
  return (
    <section className="flex flex-row p-4 my-2 group">
      <div className="pt-1 text-violet-500 group-hover:text-violet-300 transition duration-300 ease-linear">
        {props.icon}
      </div>
      <div className="pl-6">
        <div className="text-xl font-bold pb-2">{props.title}</div>
        <div className="text-neutral-500">{props.description}</div>
      </div>
    </section>
  );
};

export default ContactCard;
