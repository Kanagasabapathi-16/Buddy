import React from "react";




const MainDog = () => {
    return(
        <>
        <div className="container-fluid bg-warning">
            <p className="responsive-font-example text-center mx-auto font-weight-bold p-5 w-75" style={{fontSize:'1.7rem'}} >
                Ask questions and get answer from vets, fellow 
                      pet parents and experts
            </p>
            <div className="img-responsive" >
            <img 
            src='Image/dog2.png' className=" w-xs-10 img-fluid" 
            alt="DOGGY" style={{ display: 'block', width:'35rem', marginLeft: 'auto', marginRight: 'auto', height:'auto'}}/>

            </div>
        </div>
        <div className="container card p-2" style={{borderRadius: '1.5rem', position: 'relative', marginTop: '-35px'}}>
            <table className="m-auto ">
                <th className="p-3" style={{borderRight: '1px solid black', fontSize: '1.4rem'}} >
                    Dog</th>
                <th className="p-3" style={{borderRight: '1px solid black', fontSize: '1.4rem'}}>Cat</th>
                <th className="p-3" style={{borderRight: '1px solid black', fontSize: '1.4rem'}}>Fish</th>
                <th className="p-3" style={{fontSize: '1.4rem'}}>Hamster</th>
            </table>
        </div>
        </>
    )
}

export default MainDog;


