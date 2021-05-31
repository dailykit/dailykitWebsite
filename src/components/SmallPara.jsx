import React from "react";
const SmallPara = (props) => {
  return props.smallPara.map((smallPara) => {
    return (
      <>
        {smallPara.description ? (
          <>
            {smallPara.description}
            <img
              src={smallPara.image}
              alt="smallParaImage"
              class="startAMealImage"
            />
          </>
        ) : (
          smallPara
        )}
        <br />
        <br />
      </>
    );
  });
};
export default SmallPara;
