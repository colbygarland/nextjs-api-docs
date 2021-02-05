export const Container = ({ children }) => {
  return (
    <div className="">
      <div className="px-4 lg:px-8 mx-auto max-w-screen-xl">{children}</div>
    </div>
  );
};
