import React, { useEffect, useRef, useState, useContext } from "react";
import { store } from "../assets/Store/Context";

const AutoScrollGallery = () => {
  const { swatScenes } = useContext(store);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX1, setStartX1] = useState(0);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const [autoScrollEnabled1, setAutoScrollEnabled1] = useState(true);
  const [autoScrollEnabled2, setAutoScrollEnabled2] = useState(true);

  // Auto scroll functionality for the first div (left to right)
  useEffect(() => {
    if (!autoScrollEnabled1) return;

    const scrollContainer = scrollRef1.current;
    let animationFrameId;
    let scrollPosition = scrollContainer?.scrollLeft || 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollContainer) {
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScrollEnabled1]);

  // Auto scroll functionality for the second div (right to left)
  useEffect(() => {
    if (!autoScrollEnabled2) return;

    const scrollContainer = scrollRef2.current;
    let animationFrameId;
    let scrollPosition =
      scrollContainer?.scrollLeft || scrollContainer?.scrollWidth / 2;

    const scroll = () => {
      scrollPosition -= 1;
      if (scrollContainer) {
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScrollEnabled2]);

  // Event handlers remain the same
  const handleMouseDown1 = (e) => {
    setIsDragging1(true);
    setAutoScrollEnabled1(false);
    setStartX1(e.pageX - scrollRef1.current.offsetLeft);
    setScrollLeft1(scrollRef1.current.scrollLeft);
  };

  const handleMouseUp1 = () => {
    setIsDragging1(false);
    setAutoScrollEnabled1(true);
  };

  const handleMouseMove1 = (e) => {
    if (!isDragging1) return;
    e.preventDefault();
    const x = e.pageX - scrollRef1.current.offsetLeft;
    const walk = (x - startX1) * 2;
    scrollRef1.current.scrollLeft = scrollLeft1 - walk;
  };

  const handleMouseDown2 = (e) => {
    setIsDragging2(true);
    setAutoScrollEnabled2(false);
    setStartX2(e.pageX - scrollRef2.current.offsetLeft);
    setScrollLeft2(scrollRef2.current.scrollLeft);
  };

  const handleMouseUp2 = () => {
    setIsDragging2(false);
    setAutoScrollEnabled2(true);
  };

  const handleMouseMove2 = (e) => {
    if (!isDragging2) return;
    e.preventDefault();
    const x = e.pageX - scrollRef2.current.offsetLeft;
    const walk = (x - startX2) * 2;
    scrollRef2.current.scrollLeft = scrollLeft2 - walk;
  };

  return (
    <div className="w-full gap-0 scenes-gallery">
      {/* First auto-scrolling gallery */}
      <div
        ref={scrollRef1}
        className={`block w-full overflow-x-auto h-fit scrollbar-hide cursor-grab ${
          isDragging1 ? "cursor-grabbing" : ""
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
          userSelect: "none",
        }}
        onMouseDown={handleMouseDown1}
        onMouseUp={handleMouseUp1}
        onMouseLeave={handleMouseUp1}
        onMouseMove={handleMouseMove1}
      >
        <div className="inline-flex py-4 space-x-4 xs:py-1">
          {swatScenes.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="flex-none"
              onDragStart={(e) => e.preventDefault()}
            >
              <h1 className="text-lg font-bold text-center text-slate-500 font-Manrope">
                {item.name}
              </h1>
              <img
                src={item.image}
                alt={`Couple ${index}`}
                className="object-cover xs:w-[200px] xs:h-[200px] w-[300px] h-[300px] rounded-lg hover:shadow-xl shadow-2xl shadow-slate-800"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second auto-scrolling gallery */}
      <div
        ref={scrollRef2}
        className={`block w-full overflow-x-auto h-96 scrollbar-hide cursor-grab ${
          isDragging2 ? "cursor-grabbing" : ""
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
          userSelect: "none",
        }}
        onMouseDown={handleMouseDown2}
        onMouseUp={handleMouseUp2}
        onMouseLeave={handleMouseUp2}
        onMouseMove={handleMouseMove2}
      >
        <div className="inline-flex space-x-4">
          {swatScenes.slice(8, 16).map((item, index) => (
            <div
              key={index}
              className="flex-none"
              onDragStart={(e) => e.preventDefault()}
            >
              <h1 className="text-lg font-bold text-center text-slate-500 font-Manrope">
                {item.name}
              </h1>
              <img
                src={item.image}
                alt={`Scene ${index + 8}`}
                className="object-cover xs:w-[200px] xs:h-[200px] w-[300px] h-[300px] rounded-lg hover:shadow-xl shadow-2xl shadow-slate-800"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollGallery;
