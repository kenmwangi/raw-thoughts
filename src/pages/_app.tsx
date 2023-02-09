import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
