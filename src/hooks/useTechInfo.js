const useTechinfo = ({name, rocket, engine, isEngine}) => {
    const header = name.toUpperCase();


    const fristRow = {
        title: isEngine ? 'NUMBER' : 'HEIGHT'
       
    };

    const secondRow = {
        title: isEngine ? 'PROPELLANTI1' : 'DIAMETER'
    };

    const thirdRow = {
        title: isEngine ? 'ROPELLANTI2' : 'STAGES'
    };
    const  fourRow = {
        title: isEngine ? 'THRUST TO WEIGHT' : 'COST PER LAUNCH'
    };

      const body = {fristRow,secondRow,thirdRow,fourRow};


      
    return{
        header,
        body,
    };

};

export default useTechinfo;