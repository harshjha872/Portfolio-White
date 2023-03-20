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
    }, 90000);
  }, [router]);

  return (
    <section>
      <hr className="h-px my-4  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
      <div className="flex justify-between text-neutral-600 dark:text-neutral-300 text-sm font-semibold">
        <a href={songLink}>
          {song} - {artist}
        </a>
        <div className="text-green-500 pr-1 flex">
          <BsSpotify />
          {/* <div className="relative flex w-5 h-4 gap-[1px]">
            <span className="w-1 h-1/2 origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave"></span>
            <span className="w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave animation-delay-2"></span>
            <span className="w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave animation-delay-3"></span>
            <span className="w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave animation-delay-4"></span>
          </div> */}
        </div>
      </div>
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
