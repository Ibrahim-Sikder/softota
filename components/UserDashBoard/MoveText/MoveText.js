import React from 'react';
import style from './MoveText.module.css'
const MoveText = () => {
    return (
        <div className={style.moveText}>
        <marquee
          onmouseout="this.start()"
          onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey !</h2></marquee>
      </div>
    );
};

export default MoveText;