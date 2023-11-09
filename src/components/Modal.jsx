const Modal = ({ children }) => {
  return (
    <>
      <div className="w-full h-full fixed bg-black top-0 left-0 opacity-50 "></div>
      <div className="w-full h-full absolute z-50 top-0 flex justify-end  ">
        {children}
      </div>
    </>
  );
};

export default Modal;
