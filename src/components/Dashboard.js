import React, { useState, useEffect } from 'react'

const Dashboard = (props) => {
    let uniqueVisitor = props.uniqueVisitor
    let totalVisitor = props.totalVisitor
    let pageLoadTime = props.pageLoadTime
    let conversionRate = props.conversionRate
    let avgOrderValue = props.avgOrderValue
    let abaddonmentCount = props.abaddonmentCount
    let lifeTimeOrderValue = props.lifeTimeOrderValue




    useEffect(( ) =>{
        let handler = () => {
          setShowModal(false)
          setTotalModal(false)
          setAveragePageModal(false)
          setConversionModal(false)
          setAverageOrderModal(false)
          setAbandonmentModal(false)
          setLifeOrderModal(false)
        }
        document.addEventListener("mousedown", handler);
      },[]);


    const[showModal, setShowModal] = useState(false)//for modal
    const[uniqueQuote,setUniqueQuote]= useState("");// for info

    const[totalQuote, setTotalQuote] = useState("")
    const[totalModal, setTotalModal] = useState(false);

    const[averagePageQuote, setAveragePageQuote] = useState("")
    const[avaeragePageModal, setAveragePageModal] = useState(false);


    const[conversionQuote, setConversionQuote] = useState("")
    const[conversionModal, setConversionModal] = useState(false);

    const[averageOrderQuote, setAverageOrderQuote] = useState("")
    const[averageOrderModal, setAverageOrderModal] = useState(false)

    const[abandonmentCountQuote, setAbandonmentCountQuote] = useState("")
    const[abandonmentModal, setAbandonmentModal] = useState(false)

    const[lifeOrderQuote, setLifeOrderQuote] = useState("")
    const[lifeOrderModal, setLifeOrderModal] = useState(false)






        // info data fetch
    useEffect(() => { 
        const fetchData = async () => {
          try {
            const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getAllInfo');
            const data = await response.json();
             setUniqueQuote(data?.response[1]?.totalUniqueVisitors?.info);
             setTotalQuote(data?.response[0]?.totalVisitors?.info)
             setAveragePageQuote(data?.response[2]?.averagePageLoadTime?.info)
             setConversionQuote(data?.response[3]?.conversionRate?.info)
             setAverageOrderQuote(data?.response[4]?.avgOrderValue?.info)
             setAbandonmentCountQuote(data?.response[5]?.cartAbandonmentCount?.info)
             setLifeOrderQuote(data?.response[6]?.lifetimeOrderValue?.info)




          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);






      // modal show
      const MyModal = () => {
        return (
          <>
            <p>
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {uniqueQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {uniqueQuote}
            </p>
            <button onClick={() => setShowModal(false)}>Ok</button>
          </>
        );
      };

      const TotalModalFunc = () => {
        return (
          <>
            <p>
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {totalQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {totalQuote}
            </p>
            <button onClick={() => setTotalModal(false)}>Ok</button>
          </>
        );
      };
    

      const AveragePageModalFunc = () => {
        return (
          <>
            <p>
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {averagePageQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {averagePageQuote}
            </p>
            <button onClick={() => setAveragePageModal(false)}>Ok</button>
          </>
        );
      };

      const ConversionRateModalFunc = () => {
        return (
          <>
            <p>  
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {conversionQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {conversionQuote}
            </p>
            <button onClick={() => setConversionModal(false)}>Ok</button>
          </>
        );
      };

      const AverageOrderModalFunc = () => {
        return (
          <>
            <p>  
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {averageOrderQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {averageOrderQuote}
            </p>
            <button onClick={() => setAverageOrderModal(false)}>Ok</button>
            {/* averageOrderModal, setAverageOrderModal */}
          </>
        );
      };


      const AbandonmentModalFunc= () => {
        return (
          <>
            <p>  
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {abandonmentCountQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {abandonmentCountQuote}
            </p>
            <button onClick={() => setAbandonmentModal(false)}>Ok</button>
            {/* abandonmentModal, setAbandonmentModal */}

          </>
        );
      };

      


      const LifeTimeOrderModalFunc= () => {
        return (
          <>
            <p>  
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {lifeOrderQuote}
            {/* In marketing, the unique visitors’ metric measures (and counts) the number of distinct individuals visiting a page or multiple pages on your website in a given time interval – regardless of how often they requested those pages. */}
                {lifeOrderQuote}
            </p>
            <button onClick={() => setLifeOrderModal(false)}>Ok</button>

            {/* lifeOrderModal, setLifeOrderModal */}
            {/* lifeOrderQuote, setLifeOrderQuote */}

          </>
        );
      };
    
    
    // Cards Main All Returns
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',  alignItems:"start" }}>

<div style={{ display: 'flex', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}}>UNIQUE VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {uniqueVisitor}
          </p>
                    

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setShowModal(true)}><i>i</i></button>
          </p>
                    {showModal && <MyModal/>}


          </div>
          </div>
          </div>




          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}}>TOTAL VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {totalVisitor}
          </p>

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setTotalModal(true)}><i>i</i></button>
          </p>
                    {totalModal && <TotalModalFunc/>}

          </div>
          </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>AVERAGE PAGELOAD TIME</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {pageLoadTime}
          </p>

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setAveragePageModal(true)}><i>i</i></button>
          </p>
                    {avaeragePageModal && <AveragePageModalFunc/>}


          </div>
          </div>
          </div>




          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>CONVERSION RATE</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {conversionRate}
          </p>

          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setConversionModal(true)}><i>i</i></button>
          </p>
                    {conversionModal && <ConversionRateModalFunc/>}

                    

          </div>
          </div>
          </div>





          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>AVERAGE ORDER VALUE</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {avgOrderValue}
          </p>


          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setAverageOrderModal(true)}><i>i</i></button>
          </p>
                    {averageOrderModal && <AverageOrderModalFunc />}

          </div>
          </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>ABANDONMENT COUNT</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {abaddonmentCount}
          </p>


          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setAbandonmentModal(true)}><i>i</i></button>
          </p>
                    {abandonmentModal && <AbandonmentModalFunc />}

          </div>
          </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>LIFE TIME ORDER VALUE</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {lifeTimeOrderValue}
          </p>



          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03", position:"absolute", right:"4px",top:"2px"}}>
            <button onClick={() => setLifeOrderModal(true)}><i>i</i></button>
          </p>
                    {lifeOrderModal && <LifeTimeOrderModalFunc />}
                    {/* lifeOrderModal, setLifeOrderModal */}
          </div>
          </div>
          </div>

    </div>
  )
}

export default Dashboard