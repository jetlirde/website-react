import React, { Fragment } from 'react';
import RocketHeader from './../RocketHeader';
import TechInfo from './../TechInfo';

const Rocket = ({ rocket }) => {

    const {id,name,height,diameter,stages, cost_per_launch,engines} = rocket;

    return (
           <Fragment>
              <div className="rocket d-flex flex-column align-items-center justify-content-around"> 
                 <RocketHeader  id={id} name={name} />
                 <TechInfo   name={name} rocket={{height, diameter, stages,const: cost_per_launch}}/>
               </div>
           </Fragment>
   );
};

export default Rocket;
