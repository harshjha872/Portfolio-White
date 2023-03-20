import React from "react";
import SideBar from "../SideBar/SideBar";
import { BsSpotify } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const access_tokenFIXED =
  "BQB5m39O_-11Cb7DfY-a9-_8ay1bpPKbHjVbXjW1FdEjKwR18Hf3VN1GAoomFQXrZSZWGw82Mhgzs3sNufA_5kpgpfYgQB7EsR4YtIfE7ucByT9N5BQi5uAx3WqB2AcEegLc5mdSycSnLDS7_iAih8sU7VH8YOMSCQZDSTtLa_hM2ouOcQ4G-N422zuM0xqGP8n3qMrP5f86-Fib_ZDnoIZMFrz8Joo";
const refresh_tokenFIXED =
  "AQDLHv7GJGL7bvSoP3jrqAWbAqtnwFT3ioO-qGvdPfF8LvcP5rdPboLrf_TfHdP7-eQBi3sMpM_hgbYI2U3gwccKyCMDh3QgzauLOtbjbT4eZs9OGutILXleMNROWon3NnU";

const Footer = () => {
  const router = useRouter();
  // useEffect(() => {
  //   const client_id = "4136b0e945ef4c56874145beaca08d0f";
  //   const client_secret = "2e36bb6567d040c1b4202ca9639466f5";

  //   const func = async () => {
  //     let body = "grant_type=refresh_token";
  //     body += "&refresh_token=" + refresh_tokenFIXED;
  //     const response = await fetch("https://accounts.spotify.com/api/token", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Authorization:
  //           "Basic " +
  //           new Buffer(client_id + ":" + client_secret).toString("base64"),
  //       },
  //       body,
  //     });

  //     const res = await response.json();
  //     console.log(res);

  //     const recentplays = await fetch(
  //       "https://api.spotify.com/v1/me/player/currently-playing",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${res.access_token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data1 = await recentplays.json();
  //     console.log(data1);

  //     // function generateRandomString(length) {
  //     //   var text = "";
  //     //   var possible =
  //     //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //     //   for (var i = 0; i < length; i++) {
  //     //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //     //   }
  //     //   return text;
  //     // }

  //     // // const res = await fetch("https://accounts.spotify.com/api/token", {
  //     // //   method: "POST",
  //     // //   headers: {
  //     // //     "Content-Type": "application/x-www-form-urlencoded",
  //     // //     Authorization:
  //     // //       "Basic " +
  //     // //       new Buffer(client_id + ":" + client_secret).toString("base64"),
  //     // //   },
  //     // //   body: "grant_type=client_credentials",
  //     // // });

  //     // // const data = await res.json();

  //     // var redirect_uri = "http://localhost:3000/"; // Your redirect uri

  //     // var state = generateRandomString(16);

  //     // var scope =
  //     //   "user-read-private user-read-email user-top-read user-read-currently-playing";

  //     // var url = "https://accounts.spotify.com/authorize";
  //     // url += "?response_type=code";
  //     // url += "&client_id=" + encodeURIComponent(client_id);
  //     // url += "&scope=" + encodeURIComponent(scope);
  //     // url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  //     // url += "&state=" + encodeURIComponent(state);

  //     // console.log(url);

  //     // const { code } = router.query;

  //     // if (code) {
  //     //   let body = "grant_type=authorization_code";
  //     //   body += "&code=" + encodeURI(code);
  //     //   body += "&redirect_uri=" + encodeURI(redirect_uri);

  //     //   const res = await fetch("https://accounts.spotify.com/api/token", {
  //     //     method: "POST",
  //     //     headers: {
  //     //       "Content-Type": "application/x-www-form-urlencoded",
  //     //       Authorization:
  //     //         "Basic " +
  //     //         new Buffer(client_id + ":" + client_secret).toString("base64"),
  //     //     },
  //     //     body,
  //     //   });
  //     //   const data = await res.json();
  //     //   console.log(data);

  //     //   const recentplays = await fetch(
  //     //     "https://api.spotify.com/v1/me/player/currently-playing",
  //     //     {
  //     //       headers: {
  //     //         Authorization: `Bearer ${data.access_token}`,
  //     //         "Content-Type": "application/json",
  //     //       },
  //     //     }
  //     //   );
  //     //   const data1 = await recentplays.json();
  //     //   console.log(data1);

  //     // }
  //     // ("https://accounts.spotify.com/authorize?response_type=code&client_id=4136b0e945ef4c56874145beaca08d0f&scope=user-read-private%20user-read-email%20user-top-read%20user-read-currently-playing&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=qgQ4wBz3e85QRk1U");
  //   };
  //   func();
  // }, [router]);

  return (
    <section>
      <hr className="h-px my-4  border-0 bg-neutral-300 dark:bg-neutral-800"></hr>
      {/* <div className="flex justify-between text-neutral-600 dark:text-neutral-300 text-sm font-semibold">
        <div>Not Playing - Spotify</div>
        <div className="text-green-500 pr-1">
          <BsSpotify />
        </div>
      </div> */}
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
