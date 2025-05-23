import React, { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color"; // Library to get average color

const SkillCard = ({ name, image }) => { // Removed 'invert' as theme is not managed here
  const [bgColor, setBgColor] = useState("");

  // Effect to get average color of the image for background
  useEffect(() => {
    if (image) { // Ensure image URL exists before trying to get color
      new FastAverageColor()
        .getColorAsync(image)
        .then((color) => {
          // Set a semi-transparent background color based on the image's average color
          const rgba = color.rgb.split(")");
          setBgColor(rgba[0] + ",0.07)"); // e.g., "rgb(123,45,67,0.07)"
        })
        .catch((e) => {
          console.error("Error getting average color:", e);
          setBgColor("rgba(100,100,100,0.07)"); // Fallback color
        });
    }
  }, [image]);

  return (
    <div
      key={name}
      // Mimicking NextUI Card styling with Tailwind CSS
      className={`rounded-xl border border-gray-700 bg-gray-900/60 hover:-translate-y-1 transition-transform duration-200 shadow-lg`}
    >
      <div className="p-4 flex items-center justify-center"> {/* Mimicking CardBody */}
        <div
          style={{
            backgroundColor: bgColor,
          }}
          className={`h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-gray-800 flex items-center justify-center`}
        >
          <img
            alt={name}
            className={`h-12 w-12 md:h-[4.5rem] md:w-[4.5rem] object-contain`}
            src={image} // Using standard img tag
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/72x72/transparent/FFFFFF?text=Icon" }} // Fallback for image
          />
        </div>
      </div>
      <div className="p-2 flex justify-center"> {/* Mimicking CardFooter */}
        <h3 className="font-semibold text-center text-sm md:text-base text-white"> {/* Added text-white */}
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SkillCard;
