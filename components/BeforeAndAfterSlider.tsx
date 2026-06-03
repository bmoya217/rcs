"use client";

import { ReactCompareSlider } from "react-compare-slider";

type BeforeAfterSliderProps = {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
};

export const BeforeAfterSlider = ({
  before,
  after,
  className,
}: BeforeAfterSliderProps) => {
  return (
    <div className={className}>
      <ReactCompareSlider itemOne={before} itemTwo={after} />
    </div>
  );
};
