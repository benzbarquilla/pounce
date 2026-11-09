import Logo from "./Logo";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex p-8">
      <div className="flex-1 flex flex-col">
        <Logo />
        <div className="flex justify-center">
          <div className="basis-md">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
