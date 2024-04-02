/* eslint-disable no-unsafe-optional-chaining */
const carouselCalc = (size:any) => {
  const final = size.current?.scrollWidth - size.current?.offsetWidth;
  return final;
};

export default carouselCalc;
