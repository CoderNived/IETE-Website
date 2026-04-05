import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";

/**
 * _app.jsx — root of the entire Next.js application.
 * Every page is wrapped with <Layout> so Navbar & Footer
 * appear everywhere without repeating code.
 */
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}