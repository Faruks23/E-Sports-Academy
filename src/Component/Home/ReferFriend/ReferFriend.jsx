import React from 'react';
import { TypeAnimation } from "react-type-animation";
const ReferFriend = () => {
  return (
    <div className=" container mx-auto p-5 my-8 bg-[#1B234D] shadow-lg rounded-lg">
      <div className="content flex gap-5">
        <img
          className="w-16 h-16 rounded-full drop-shadow-2xl"
          src="https://cdn1.codashop.com/S/content/common/images/denom-image/Supercell/ClashOfClans/new/CoC_500_Gems.png"
          alt=""
        />
        <div>
          {/* <h1 className="text-xl md:font-bold md:text-2xl mb-4 uppercase">
            Refer Your Friend & Earn TopUp Coin Free
          </h1> */}
          <h2>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Refer Your Friend & Earn TopUp Coin Free",
                1000,
                "Top Up  by the coin for any game",
                1000,
                "Participate any tournament by this coin",
                1000,
                "Lets Do First and Earn First",
                1000,
              ]}
              speed={50}
              className="text-xl md:font-bold md:text-2xl mb-4 uppercase"
              repeat={Infinity}
            />
          </h2>

          <button className="bt mt-2"> Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ReferFriend;