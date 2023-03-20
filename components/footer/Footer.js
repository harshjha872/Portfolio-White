import React from "react";
import SideBar from "../SideBar/SideBar";
import { BsSpotify } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const [artist, setArtist] = useState("Spotify");
  const [song, setSong] = useState("Not Playing");
  const [songLink, setSongLink] = useState("");

  useEffect(() => {
    const res = async () => {
      const res = await axios("https://harshv1.vercel.app/api/hello");
      setArtist(res.data.artist);
      setSong(res.data.name);
      setSongLink(res.data.link);
    };
    res();
    setInterval(() => {
      res();
    }, 30000);
  }, [router]);

  return (
    <section>
      <hr className="h-px my-4  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
      {songLink ? (
        <div className="flex justify-between text-neutral-600 dark:text-neutral-300 text-sm font-semibold">
          <a href={songLink}>
            {song} - {artist}
          </a>

          <div className="text-green-500 flex">
            <div className="soundwaveContainer pb-[-12px">
              <span className="w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave bar1"></span>
              <span className="w-1 h-1/2 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave animation-delay-2 bar2"></span>
              <span className="w-1 h-2/3 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave animation-delay-3 bar3"></span>
              <span className="w-1 h-1/3 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave animation-delay-4 bar4"></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between text-neutral-600 dark:text-neutral-300 text-sm font-semibold">
          {song} - {artist}
          <div className="text-green-500 flex">
            <BsSpotify />
          </div>
        </div>
      )}
      {/* <div className="flex justify-between text-neutral-600 dark:text-neutral-300 text-sm font-semibold"> */}

      {/* <div className="text-green-500 pr-12 pb-[-20px] flex">
          <div className="soundwaveContainer pb-[-12px">
            <span className="w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave bar1"></span>
            <span className="w-1 h-1/2 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave animation-delay-2 bar2"></span>
            <span className="w-1 h-2/3 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave animation-delay-3 bar3"></span>
            <span className="w-1 h-1/3 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 soundwave animation-delay-4 bar4"></span>
          </div>
        </div> */}
      {/* </div> */}
      <div className="my-3 w-fit cursor-pointer text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-600 text-sm dark:text-neutral-500 font-semibold">
        <a
          href="https://github.com/harshjha872"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="pt-4 text-[12px] text-neutral-500 dark:text-neutral-600">
        Made by{" "}
        <a href="mailto:harshjha872@gmail.com" className="font-semibold">
          Harsh Jha
        </a>
      </div>
      <SideBar />
    </section>
  );
};

export default Footer;
