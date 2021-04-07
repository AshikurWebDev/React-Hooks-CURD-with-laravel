// import React from "react";
// import ReactLoading from "react-loading";

// const Loding = ({ spinningBubbles}) => (

// );

// export default Loding;

import React from "react";
import ReactLoading from "react-loading";
const Loding = (type, color,dely) => {
    return (
        <div className="inside_table_loader">
            <ReactLoading
                type={"spin"}
                color={"#6CB2EB"}
                height={50}
                width={50}
            />
        </div> 
    );
};

export default Loding;
