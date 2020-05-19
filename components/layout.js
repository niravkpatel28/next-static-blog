import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Link href="/"> Home</Link>
        </nav>
      </header>
      <hr />
      {children}
      <hr />
      <footer>
        <p> &copy;2020 Blog Content </p>
      </footer>
    </>
  );
};

export default Layout;
