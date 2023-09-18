import React from 'react';
import Lottie from 'react-lottie';
import plane from '../../public/plane.json'
const Plane = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: plane,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div>
            <Lottie options={defaultOptions}
              height={1000}
              width={1000}/>
        </div>
    );
};

export default Plane;