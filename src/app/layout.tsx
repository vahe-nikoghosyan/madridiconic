import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
                    <div className="hidden sm:block w-[178px] min-h-[250px] bg-gray-800 sticky top-[64px]"></div>

                    {/* Center Section */}
                    <div className="w-full sm:w-[764px] flex flex-col gap-4">
                        {/* Top Ad */}
                        <div
                            className="hidden sm:block w-full max-w-[728px] min-h-[90px]
                            {/*bg-gray-700 */}
                            mx-auto sticky top-[64px]">
                            <img src="https://tpc.googlesyndication.com/simgad/11816286033359743359"
                                 width="728" height="90" alt="" className="img_ad"/>
                        </div>

                        {/* News Content */}
                        <div className="bg-white flex-1 p-4 overflow-y-auto rounded shadow">
                            {children}
                        </div>

                        {/* Bottom Ad */}
                        <div className="hidden sm:block w-full max-w-[728px] min-h-[90px]
                        {/*bg-gray-700 */}
                        mx-auto">
                            <a id="aw0" target="_blank"
                               href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstaR_wb0612pA9nm7ZA_PbWC37nKgCqzxy3qi7pwDK5kpshnFSY3XTS8vofJQNfzwcHnJ8eVIhhi2Zi21sRCxfWA84vXqOb7S7du05HpD2frRPVU7JG_v1hVYeQncLodKR2DFwA08SxqHBDqkn7FF6xtzGMZHkQgkHoExzs0hoWhN-jlAuzvrjtVzzTEzIbMj5wkAOtNebY9So5e4XB9aCh9eqfLH1hZfBTs3gg44fkifxPQAWHvsWWl5YUNWzZ88Q2juDF1iHVckT7ccUS6av15GTxrGR1OIXsoiQw4ny9HqBWcqp4VL3im3QuFURXAGqL7648qviAJStxyfA01shSQfy_Ko2gekYjvsZqSnxeUuz_haRrH87T-nJ0Ppak39XP_RRfoiMmP3wxm-F8&amp;sai=AMfl-YTrwZCQi0ufxTpBi8jT-uuXrvgUYr_nxgp_mb04XKRfwBfnMB37Njd4Jl_gTLYngeMG4_vLT2pFadrbU5GEOkByMgt22bI_qxefybKSo5KlyfoP6yoTkddgPPgVKARYwm6G&amp;sig=Cg0ArKJSzDUDZnePloeF&amp;fbs_aeid=%5Bgw_fbsaeid%5D&amp;adurl=https://play.realmadrid.com/home&amp;nm=3"
                               // onFocus="ss('aw0')" onMouseDown="st('aw0')" onMouseOver="ss('aw0')"
                               onClick="ha('aw0')"><img
                                src="https://tpc.googlesyndication.com/simgad/17780049775012052191" border="0"
                                width="728" height="90" alt="" className="img_ad"/></a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden sm:flex w-[318px] flex-col gap-4 sticky top-[64px]">
                        <div className="min-h-[250px] bg-gray-800"></div>
                        <div className="min-h-[250px] bg-gray-800"></div>
                    </div>
                </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow pb-[50px] sm:pb-0">
            <div className="container mx-auto px-4">
                <p className="text-sm">Footer Content</p>
            </div>
        </footer>
        <div className="sm:hidden fixed bottom-0 left-0 w-full h-[50px] bg-gray-700 z-50"></div>

        </body>
        </html>
    );
}
