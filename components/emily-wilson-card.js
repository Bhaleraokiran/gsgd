import { useMemo } from "react";

const EmilyWilsonCard = ({ propLeft, propBackgroundColor }) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="absolute top-[150px] left-[0px] w-[434px] h-[265px] text-left text-11xl text-darkslategray-400 font-roboto-serif"
      style={groupDivStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-10xs bg-primary-contrast shadow-[0px_4px_15px_rgba(0,_0,_0,_0.25)] w-[434px] h-[265px]"
        style={rectangleDivStyle}
      />
      <div className="absolute top-[34px] left-[29px] w-[327px] h-12">
        <b className="absolute top-[0px] left-[0px] capitalize inline-block w-[327px] h-12">
          Emily wilson
        </b>
      </div>
      <div className="absolute top-[calc(50%_-_39.5px)] left-[calc(50%_-_188px)] w-[362px] h-[150px] text-3xl text-black font-roboto-slab">
        <div className="absolute top-[calc(50%_-_75px)] left-[calc(50%_-_181px)] leading-[30px] capitalize font-medium inline-block w-[362px] h-[150px]">
          I had a great experience shopping on this website. The clothes I
          bought are fashionable and comfortable. Highly satisfied!
        </div>
      </div>
    </div>
  );
};

export default EmilyWilsonCard;
