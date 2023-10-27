const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden md:block">
      <div className="border rounded-[0.5rem] bg-background shadow">
        <div className="grid lg:grid-cols-4">
          <div className="col-span-3 lg:col-span-4 ">
            <div className="h-full px-4 py-6 lg:px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
