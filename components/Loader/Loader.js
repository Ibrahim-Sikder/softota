import React from 'react';
import Lottie from 'react-lottie';
import loading from '../../public/loading.json'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className='min-h-screen w-full flex items-center justify-center text-center'>
             <div>
            <Lottie options={defaultOptions}
              height={300}
              width={300}/>
        </div>
        </div>
    );
};

export default Loader;