import React, {useState, useEffect} from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import {principles, criterias, indicators, indicatorDetails} from "../../assets/principles"

import { Wrapper } from "./style"

const VisualizationTable = () => {
   const [activeCol, setActiveCol] = useState("")
   const [activeCol2, setActiveCol2] = useState("")
   const [activeCol3, setActiveCol3] = useState("")
   const [criteriaList, setCreteria] = useState([])
   const [indicatorList, setIndicatorList] = useState([])
   const [details, setDetails] = useState({})
   

   const filterIndicators = () => {
    const filtered = indicators.filter(data => data.parent === activeCol2)
     return setIndicatorList(filtered)
  }
  const updateCol1 = (key) => {
      setActiveCol(key)
      filterCreteria()
      if (criteriaList){
        setActiveCol2(criteriaList[0].key)
      
      }
    return 
  }
  const updateCol2 = (key) => {
      setActiveCol2(key)
      filterIndicators()
    return 
  }

  const updateDetail = (key) => {
    setActiveCol3(key)

    const filtered = indicatorDetails.filter(data => data.parent === key)[0]
    console.log(filtered, "got here")
   return setDetails(filtered)
  }

  const filterCreteria = () => {
    const filtered = criterias.filter(data => data.parent === activeCol)
   return setCreteria(filtered)
  }

   useEffect(() => {
   filterCreteria()
   filterIndicators()
   if(activeCol === ""){
     setActiveCol(principles[0].key)
   } 

   if(activeCol2 === ""){
     setActiveCol2(criterias[0].key)
   }  

   if(activeCol3 === ""){
     setActiveCol3(indicators[0].key)
   } 

   if(Object.keys(details).length < 1){
     setDetails(indicatorDetails[0])
   }  

   }, [activeCol, activeCol2, activeCol3])


 return (<Wrapper>
     <div className="parameters">
       <div className="head-group">
          <div className="head-item">Principles</div>
          <div className="head-item">Criteria</div>
          <div className="head-item">Indicator</div>
       </div>
       <div className="body-wrap">
          <div className="col-1">
            {principles && principles.map(data => (
               <div key={data.key} onClick={() => updateCol1(data.key)} className={`body-item ${activeCol === data.key ? 'col-1-active' : ''}`}>
               <div>
                {data.data ? data.data : ""}
               </div>
               {activeCol === data.key && (<div className="arrow-wrap">
                     <AiOutlineRight className="arrow"/>
                 </div>)}
                 
             </div>
            ))}
             

            </div>
          <div className="col-2">
            {criteriaList && criteriaList.map(data => (
                 <div key={data.key} onClick={() => updateCol2(data.key)} className={`body-item ${activeCol2 === data.key ? 'col-2-active' : ''}`}>
                 <div>
                     {data.data ? data.data : ""}
   
                 </div>
                 {activeCol2 === data.key && (
                 <div className="arrow-wrap">
                           <AiOutlineRight className="arrow"/>
                </div>
                 )}
               </div>
            ))}
         
        </div>
        <div className="col-3">
          {indicatorList && indicatorList.map(indicator => (
               <div key={indicator.key} onClick={() => updateDetail(indicator.key)} className={`body-item ${activeCol3 === indicator.key ? 'col-3-active' : ''}`}>
                   <div>
                          {indicator.data ? indicator.data : ""}
                   </div>
                   {activeCol3 && (
                      <div className="arrow-wrap">
                      <AiOutlineRight className="arrow"/>
                   </div>
                   )}
                  
                </div>
          ))}
  
       </div>
       </div>
     </div>
     <div className="details">
       <div className="detail-title">
         Indicator details
       </div>

       <div className="light-title">Status</div>
       <div className="detail-data">N/A</div>

       <div className="light-title">Definition</div>
       <div className="detail-data">{details && details.definition ? details.definition : "N/A"}</div>

       <div className="light-title">Level of Assessment</div>
       <div className="detail-data">{details && details.LOA ? details.LOA : "N/A"}</div>

       <div className="light-title">Verifier</div>
       <div className="detail-data">{details && details.verifier ? details.verifier : "N/A"}</div>

       <div className="light-title">Sources / where the infomation can be found</div>
       <div className="detail-data">{details && details.source ? details.source : "N/A"}</div>

       <div className="light-title">Methodology / how the information
       is collected</div>
       <div className="detail-data">{details && details.methodology ? details.methodology : "N/A"}</div>

       <div className="light-title">Who validates / Ensure qulaity of the information</div>
       <div className="detail-data">{details && details.validates ? details.validates : "N/A"}</div>

       <div className="light-title">Data entered in SIS database (for previous carlender year unspecified) </div>
       <div className="detail-data">{details && details.dataInSIS ? details.dataInSIS : "N/A"}</div>

       <div className="light-title">Condition for indicators to be addressed and respected</div>
       <div className="detail-data">{details && details.condition ? details.condition : "N/A"}</div>

       <div className="light-title">Linkage with others</div>
       <div className="detail-data">{details && details.linkage ? details.linkage : "N/A"}</div>


     </div>
  </Wrapper>)
}

export default VisualizationTable; 