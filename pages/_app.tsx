import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "@bradgarropy/next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="Titus portfilio, VO VAN TUAN"
        description="A blog and portfolio"
        keywords={["Vo Van Tuan", "titus", "titus portfilio"]}
        icon="/favicon.ico"
        facebook={{
          image: "/avt02.png",
          url: "https://www.facebook.com/titus3423",
          type: "website",
        }}
        twitter={{
          image: "/bwd1.png",
          site: "@TuanVV3423",
          card: "summary",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
