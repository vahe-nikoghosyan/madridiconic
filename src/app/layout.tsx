import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Head from "next/head";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Madrid Iconic Title",
  description: "Welcome to Madrid Iconic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Madrid Iconic</title>
        <meta name="google-adsense-account" content="ca-pub-4237740863110900" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4237740863110900"
          crossOrigin="anonymous"
        ></script>
        <GoogleAnalytics gaId="G-0W1EH7VYV0" />
      </Head>

      <body className="bg-gray-100 text-gray-900 max-w-full overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow fixed top-0 w-full z-50">
          <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">Logo</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-gray-900 py-8 pt-[64px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Left Section */}
              <div className="hidden sm:block w-[178px] h-[600px] sticky top-[64px]">
                {/* Half Page Ad */}
                <div className="w-[160px] h-[600px]">
                  <a
                    href="https://www.googleadservices.com/pagead/aclk?sa=L&amp;ai=C4CmISYmkZ4PIBOvqkdUP34WysQiLyszRfKWh1oSiE_H1veOaRRABILnbnqABYDSgAfOaseA9yAEC4AIAqAMByAMIqgTbAk_QRulDps8lYXmN3C7kJ0-cKsF82sgQF1VF0k735_tUwZdkXV3_3XCGABH03NgFYxp9VMZxOpKT_DV7G16qiVp77JUdSv9AZNz0fTIW1-Y8uKIMmeptahS-IAM8VPgndRSSBErC2xPmJsgU3fCMtZ2M_fsHJR2kiwJUfsdUmsOZTPy4TbHic_hEdiE7qEvFZENbpel8t2_25fiGCTEDMi10EW46qq-Kszif1MYklOm2O_o-CTfZN5Vrj_nuFVrVbyfL-8N20ITvHLYXTyS0RX3yQMQH7vrBSLcuWYP3XW1bY3Xiin5VMrwIbR_b1abiu9bCdxv4W_mEonQafUlajfgMr5lrK7dwObIgSxUEtrqLuoGCtSy7XCffPxTo1ajOZCvFe1TzCxJMpQORs4hwx76Sn1d6DOsoTWWeFkzvZrGa_4W-mVi16PwaopdnhEf1HRIb3GMub78caBw-wAS3hc-zgwXgBAGIBfyuzLtRkAYBoAYCgAfz0oHAGIgHAZAHAqgH1ckbqAfZtrECqAemvhuoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5oGqAfz0RuoB5bYG6gHqpuxAqgH4L2xAqgH_56xAqgH35-xAqgHyqmxAqgH66WxAqgH6rGxAqgHmbWxAqgHvrexAqgH-MKxAqgH-8KxAtgHAdIIKQgAEAIYHTIBADoQn9CAgICABIDAgICAoKiAAki9_cE6WNTfu_7lrosDsQlQVknRLxQgBYAKA5gLAcgLAdoMFgoLELCGm-34i7nTswESAgEDQAFKASWqDQJBTcgNAeINEwizm7z-5a6LAxVrdaQEHd-CLIbqDRMIvuC8_uWuiwMVa3WkBB3fgiyG2BMN0BUBmBYB-BYBgBcBshcCGAG6FwI4AbIYCRIC6WgYAiIBAdAYAQ&amp;ae=1&amp;ase=2&amp;gclid=CjwKCAiA2JG9BhAuEiwAH_zf3prKzRMtRwa5qR31NWIz74YZRxRRa7MxkL1JR9hOnDAuU1yokkkynxoCLJ0QAvD_BwE&amp;num=1&amp;cid=CAQSQwCjtLzMpo3sEls1Iflt3V2-JDYDtyKTQxwp8L19COaFPyLsk1sSrZLpUQN3g8wu5fIgo9Xzu4E0HI2SkXIX7dJKyCwYAQ&amp;sig=AOD64_1CLd-Lyob2oV0VBrTcRdi_yocmBg&amp;client=ca-pub-5719939684469996&amp;rf=5&amp;nx=CLICK_X&amp;ny=CLICK_Y&amp;uap=UACH(platform)&amp;uapv=UACH(platformVersion)&amp;uaa=UACH(architecture)&amp;uam=UACH(model)&amp;uafv=UACH(uaFullVersion)&amp;uab=UACH(bitness)&amp;uaw=UACH(wow64)&amp;uafvl=UACH(fullVersionList)&amp;nb=2&amp;adurl=https://fasttv.am%3Fgad_source%3D5%26gclid%3DCjwKCAiA2JG9BhAuEiwAH_zf3prKzRMtRwa5qR31NWIz74YZRxRRa7MxkL1JR9hOnDAuU1yokkkynxoCLJ0QAvD_BwE"
                    target="_top"
                  >
                    <Image
                      height={600}
                      width={160}
                      src="https://tpc.googlesyndication.com/daca_images/simgad/2036988990368448555"
                      alt={""}
                    />
                  </a>
                </div>
              </div>
              {/* Center Section */}
              <div className="w-full sm:w-[764px] flex flex-col gap-4">
                {/* Top Ad */}
                {/*<div className="hidden sm:block w-full max-w-[728px] min-h-[90px] mx-auto sticky top-[64px]">*/}
                <div className="hidden sm:block w-[728px] h-[90px] mx-auto sticky top-[64px]">
                  <Image
                    src="https://tpc.googlesyndication.com/simgad/17780049775012052191"
                    width={728}
                    height={90}
                    alt=""
                    className="img_ad"
                  />
                </div>

                {/* News Content */}
                <div className="bg-white flex-1 p-4 overflow-y-auto rounded shadow">
                  {children}
                </div>

                {/* Bottom Ad */}
                <div className="hidden sm:block w-[728px] h-[90px] mx-auto">
                  <a
                    id="aw0"
                    target="_blank"
                    href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstaR_wb0612pA9nm7ZA_PbWC37nKgCqzxy3qi7pwDK5kpshnFSY3XTS8vofJQNfzwcHnJ8eVIhhi2Zi21sRCxfWA84vXqOb7S7du05HpD2frRPVU7JG_v1hVYeQncLodKR2DFwA08SxqHBDqkn7FF6xtzGMZHkQgkHoExzs0hoWhN-jlAuzvrjtVzzTEzIbMj5wkAOtNebY9So5e4XB9aCh9eqfLH1hZfBTs3gg44fkifxPQAWHvsWWl5YUNWzZ88Q2juDF1iHVckT7ccUS6av15GTxrGR1OIXsoiQw4ny9HqBWcqp4VL3im3QuFURXAGqL7648qviAJStxyfA01shSQfy_Ko2gekYjvsZqSnxeUuz_haRrH87T-nJ0Ppak39XP_RRfoiMmP3wxm-F8&amp;sai=AMfl-YTrwZCQi0ufxTpBi8jT-uuXrvgUYr_nxgp_mb04XKRfwBfnMB37Njd4Jl_gTLYngeMG4_vLT2pFadrbU5GEOkByMgt22bI_qxefybKSo5KlyfoP6yoTkddgPPgVKARYwm6G&amp;sig=Cg0ArKJSzDUDZnePloeF&amp;fbs_aeid=%5Bgw_fbsaeid%5D&amp;adurl=https://play.realmadrid.com/home&amp;nm=3"
                    // onFocus="ss('aw0')" onMouseDown="st('aw0')" onMouseOver="ss('aw0')"
                    // onclick="ha('aw0')"
                  >
                    <Image
                      src="https://tpc.googlesyndication.com/simgad/11816286033359743359"
                      width={728}
                      height={90}
                      alt=""
                      className="img_ad"
                    />
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="hidden sm:flex w-[300px] flex-col gap-4 sticky top-[64px]">
                <div className="w-[300px] h-[250px]">
                  <a
                    id="aw0"
                    target="_blank"
                    href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsuCJh9eJTkTWB1r07KCaXe6ZhAUdMyOhmpB-ICiR252lZkjY9yX_xtSbDN0u6OHkzD5g-S9lohq4adUaE1mB05SYH4IrU7wRHvMr-K7BeXljf-VPVRjAAz0OceFAK4DSH1jAMa41kdoAaOVKa9s9uA3_mbVztTVb7JnmK9mJDv2EGEtsoG5ymoWlgnQ3HJBnm7fnIJcl2x5n4d5JIIsRpwMnn7KsI6AgRycwcYYqs6eYbpZh18hxKgaBgNsN-KqjR7UUZeG0pklVjUaXElM-Uv3rA73p9rKfCEv3eTINFXdsnAo9MuqHNvUTgJEmDU-P9DEdES3GNHQ1lTVpJKSrwgVUMcYJR4NuiHan00vMZ8V-NRAMZVrRlosv4TRAEOB8zn0gIx8KafyF_7a&amp;sai=AMfl-YQc1D0dIm6a5zKAVGW_Qw9Rb1YfnC-0gszZmT6zAkQAYjL2rb-_kWtKfAixUcuKq_jnhdkRB5H7yIHFXZzvT1UVIjrBGzkwh7umcqlGUnojXEqSa2Gd1Kh7G1EZR64VCMUd&amp;sig=Cg0ArKJSzP90toAX455n&amp;fbs_aeid=%5Bgw_fbsaeid%5D&amp;adurl=https://www.adidas.es/predator&amp;nm=1"
                  >
                    <Image
                      src="https://tpc.googlesyndication.com/simgad/1721533747460821816"
                      width={300}
                      height={250}
                      alt=""
                      className="img_ad"
                    />
                  </a>
                </div>
                <div className="w-[300px] h-[250px]">
                  <a
                    id="aw0"
                    target="_blank"
                    href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjssf-WVzfAGO9lC__mFxc_YfuJ4O4vXAzMVb0w9IITsYKeH0glrKJ5XaCpW-oZNkwU1Y-scq5OSQcgqrbb_tXRdsprZFOtOcWNSxLN6AjrR5DEzLWNZI6qyuomC7t3OQ3zVks9KFAtHVUTYc9lTrI6C9iRszaS7G2ITnFnAuXFeJDZfriP0WGnyMHhu3jCDQ00vn_1xZeYss5dyYDcgHPbET2MyYGJoT4lm5ff-LwdSQu5LiZTlBXiQbWaY1iMU8eC4k2wNztuH_WeIdMHCsyz5yd0QFvj2hoWp0jUXCeizjX1hrr2qf1HuaCGb66fBnjVPXWW-YJJIRb4ekA3KoMuqKU--Lvd_93lMWG0ZIEmPsC4QRf-l9wK4Y84D8iRXiEufzRmbm-1F4jiOI&amp;sai=AMfl-YSs4BUjsiV2sLxLDf-q1rJZ4aMFR7g6IaxlNvwnXj8H57RNWsKU60AqFCRldEecMIwtsYdZVhDknvOPA-CeftF2yjs2uOu2Cw1cLadD1Wkaw52lZUHH_sOCTpnlDIx70NZQ&amp;sig=Cg0ArKJSzIfCQwpgcRc5&amp;fbs_aeid=%5Bgw_fbsaeid%5D&amp;adurl=https://shop.realmadrid.com/en-gb/fashion/urban/real%3Futm_source%3Dweb%26utm_medium%3Ddisplay%26utm_campaign%3Dtie_real-urban-24-25_20241119_en_gb%26utm_content%3Dbanner_300x250&amp;nm=1"
                  >
                    <Image
                      src="https://tpc.googlesyndication.com/simgad/7114275783402030868"
                      width={300}
                      height={250}
                      alt=""
                      className="img_ad"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow pb-[60px] sm:pb-0">
          <div className="container mx-auto px-4">
            <p className="text-sm">Footer Content</p>
          </div>
        </footer>
        <div className="sm:hidden fixed bottom-0 left-0 w-full h-[60px] z-50 mx-auto">
          <a
            id="aw0"
            target="_blank"
            href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstaR_wb0612pA9nm7ZA_PbWC37nKgCqzxy3qi7pwDK5kpshnFSY3XTS8vofJQNfzwcHnJ8eVIhhi2Zi21sRCxfWA84vXqOb7S7du05HpD2frRPVU7JG_v1hVYeQncLodKR2DFwA08SxqHBDqkn7FF6xtzGMZHkQgkHoExzs0hoWhN-jlAuzvrjtVzzTEzIbMj5wkAOtNebY9So5e4XB9aCh9eqfLH1hZfBTs3gg44fkifxPQAWHvsWWl5YUNWzZ88Q2juDF1iHVckT7ccUS6av15GTxrGR1OIXsoiQw4ny9HqBWcqp4VL3im3QuFURXAGqL7648qviAJStxyfA01shSQfy_Ko2gekYjvsZqSnxeUuz_haRrH87T-nJ0Ppak39XP_RRfoiMmP3wxm-F8&amp;sai=AMfl-YTrwZCQi0ufxTpBi8jT-uuXrvgUYr_nxgp_mb04XKRfwBfnMB37Njd4Jl_gTLYngeMG4_vLT2pFadrbU5GEOkByMgt22bI_qxefybKSo5KlyfoP6yoTkddgPPgVKARYwm6G&amp;sig=Cg0ArKJSzDUDZnePloeF&amp;fbs_aeid=%5Bgw_fbsaeid%5D&amp;adurl=https://play.realmadrid.com/home&amp;nm=3"
            // onFocus="ss('aw0')" onMouseDown="st('aw0')" onMouseOver="ss('aw0')"
            // onclick="ha('aw0')"
          >
            <Image
              src="https://tpc.googlesyndication.com/simgad/17780049775012052191"
              width={728}
              height={90}
              alt=""
              className="img_ad"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
