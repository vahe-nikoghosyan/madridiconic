"use client";

// import { useEffect } from "react";

export default function Home() {
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Sergio Ramos will wear No. 93 for Monterrey in honor of his iconic
            90+3 minute game-tying goal in the 2014 Champions League final, he
            and Real Madrid announced on social media.
            <br />
            <br />
            His goal forced extra time against Atlético Madrid, and Real Madrid
            went on to win &quot;La Décima,&quot; their…{" "}
            <a href="https://t.co/evoDTwW3Mc">pic.twitter.com/evoDTwW3Mc</a>
          </p>
          &mdash; ESPN FC (@ESPNFC){" "}
          <a href="https://twitter.com/ESPNFC/status/1887644249568518647?ref_src=twsrc%5Etfw">
            February 6, 2025
          </a>
        </blockquote>

        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Romero received a yellow card for this tackle on Mbappé.{" "}
            <a href="https://t.co/qmXZ8nZe3T">pic.twitter.com/qmXZ8nZe3T</a>
          </p>
          &mdash; ESPN FC (@ESPNFC){" "}
          <a href="https://twitter.com/ESPNFC/status/1885801766005973175?ref_src=twsrc%5Etfw">
            February 1, 2025
          </a>
        </blockquote>
      </main>
    </div>
  );
}
