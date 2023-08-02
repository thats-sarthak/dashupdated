import React from 'react'

const Dashboard = (props) => {
    let uniqueVisitor = props.uniqueVisitor
    let totalVisitor = props.totalVisitor
    let pageLoadTime = props.pageLoadTime
    let conversionRate = props.conversionRate
    let avgOrderValue = props.avgOrderValue
    let abaddonmentCount = props.abaddonmentCount
    let lifeTimeOrderValue = props.lifeTimeOrderValue
    
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',  alignItems:"start" }}>

<div style={{ display: 'flex', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>UNIQUE VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {uniqueVisitor}
          </p>
                    
          </div>
          </div>
          </div>




          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap',  alignItems:"start" }}>
   {/* <div style={{flexDirection:'column'}}>  */}
      <div
        className="card text-white text-center m-3"
        style={{ width: "20rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>TOTAL VISITORS</h6>
          <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
            {totalVisitor}
          </p>

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

          </div>
          </div>
          </div>

    </div>
  )
}

export default Dashboard