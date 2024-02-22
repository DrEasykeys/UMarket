function EmailAndButton() {
  return (
    <div className="flex w-[28vw] h-10 justify-between  ">
      <input
        type="text"
        placeholder=" Enter E-mail Address"
        className=" w-[21vw] h-10 border-[8px]  border-white pl-3 text-black  outline-none rounded-md placeholder-black "
      />

      <div className="w-[6vw] h-10 ">
        <button className=" bg-orange-400 w-[75px] h-10 rounded-[7px] text-sm text-white">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default EmailAndButton;
