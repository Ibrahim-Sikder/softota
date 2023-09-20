import React, { useRef, useEffect } from "react";

import loading from "../../public/loading.json";


const Loader = () => {
  // const ref = useRef();
  // React.useEffect(() => {
  //   import("@lottiefiles/lottie-player");
  // });

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-center">
      <div>
      {/* <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          controls
          loop
          mode="normal"
          src={loading}
          style={{ width: "300px", height: "300px" }}
        ></lottie-player> */}


        <h1>Loading.........!</h1>
      </div>
    </div>
  );
};

export default Loader;
