"use client";

import { Tweet } from "react-tweet";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Dynamically reload the Twitter embed script
    if (typeof window !== "undefined" && window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);
  // const API_KEY = "6066790e0b354eccbd56ef18d17d246b";
  // useEffect(() => {
  //   fetch(
  //     `https://newsapi.org/v2/everything?qInTitle=Real Madrid&from=2025-02-01&to=2025-02-07&sortBy=popularity&apiKey=${API_KEY}`,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       // setNews(data.articles);
  //       // setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching news:", error);
  //       // setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      <div className="hidden sm:block w-[728px] h-[90px] mx-auto sticky top-[64px]">
        <Image
          src="https://tpc.googlesyndication.com/simgad/17780049775012052191"
          width={728}
          height={90}
          alt=""
          className="img_ad"
        />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Tweet id="1887531706070052887" />
          <Tweet id="1887644249568518647" />
        </main>
      </div>
    </div>
  );
}
