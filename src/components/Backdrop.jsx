function Backdrop() {
  return (
    <div
      onClick={props.onCancel}
      className="bg-gray-300 bg-opacity-[0.2] w-[100%] h-[100%] border absolute z-10"
    ></div>
  );
}

export default Backdrop;
