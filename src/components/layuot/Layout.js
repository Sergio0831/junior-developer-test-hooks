import Wrapper from "../ui/Wrapper";
import Header from "../layuot/Header";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
