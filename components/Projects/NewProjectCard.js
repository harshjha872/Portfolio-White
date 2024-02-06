import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const NewProjectCard = (props) => {
  return (
    <div className="bg-white border-neutral-300 dark:bg-[#090B0B] relative h-52 sm:w-1/2 w-full rounded-md border-[1px] dark:border-[#27272A] p-5 pb-7">
      <div className="dark:text-yellow-400 text-yellow-500">{props.year}</div>
      <div className="font-medium mt-1 text-lg">{props.projectHeading}</div>
      <div className="font-normal dark:text-neutral-400 mt-2 mb-8">
        {props.desc}
      </div>
      <div className="flex gap-2 absolute bottom-4 left-4 items-center">
        {props.article && (
          <div className="dark:bg-[#090B0B] transition duration-[150] cursor-pointer px-3 text-center py-1 border-[1px] dark:border-[#27272A] dark:hover:bg-[#27272A] w-fit h-fit rounded-md ">
            {" "}
            <a href={props.source} target="_blank" rel="noreferrer">
              Article <BiLinkExternal className="inline" />{" "}
            </a>
          </div>
        )}
        {props.source && (
          <div className="dark:bg-[#090B0B] transition duration-[150] bg-neutral-50 border-neutral-300 hover:border-neutral-500  cursor-pointer px-3 text-center py-1 border-[1px] dark:border-[#27272A] dark:hover:bg-[#27272A] w-fit h-fit rounded-md">
            <a href={props.source} target="_blank" rel="noreferrer">
              Source <BiLinkExternal className="inline" />{" "}
            </a>
          </div>
        )}
        {props.demo && (
          <div className="dark:bg-[#090B0B] transition duration-[150] bg-neutral-50 border-neutral-300 hover:border-neutral-500 cursor-pointer px-3 text-center py-1 border-[1px] dark:border-[#27272A] dark:hover:bg-[#27272A] w-fit h-fit rounded-md">
            <a href={props.demo} target="_blank" rel="noreferrer">
              demo <BiLinkExternal className="inline" />{" "}
            </a>
          </div>
        )}
        {props.video && (
          <div className="dark:bg-[#090B0B] transition duration-[150] bg-neutral-50 border-neutral-300 hover:border-neutral-500 cursor-pointer px-3 text-center py-1 border-[1px] dark:border-[#27272A] dark:hover:bg-[#27272A] w-fit h-fit rounded-md">
            <a href={props.video} target="_blank" rel="noreferrer">
              video <BiLinkExternal className="inline" />{" "}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProjectCard;
