import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import useStyles from './css';

const PriceTable = () => {
  const [flipClass, setFlipClass] = useState('');
  const [tableClass, setTableClass] = useState('');
  const [showPartTwo, setShowPartTwo] = useState(false);
  const [showPartThree, setShowPartThree] = useState(false);

  const handleShowPartTwo = () => {
    setShowPartTwo(true);
  };
  
  const handleShowPartThree = () => {
    setShowPartThree(true);
  };

  const handleShowMeClick = (index) => {
    setFlipClass(`flip${index}`);
  };

  const handleHideMeClick = () => {
    setFlipClass('');
  };

  const handleTableNextClick = () => {
    setTableClass((prevClass) => {
      if (prevClass === '') return 'activetwo';
      else if (prevClass === 'activetwo') return 'active';
      else if (prevClass === 'active') return 'last';
      else if (prevClass === 'last') return 'activetwo';
    });
  };

  const handleTablePrevClick = () => {
    setTableClass((prevClass) => {
      if (prevClass === '') return 'last';
      else if (prevClass === 'last') return 'active';
      else if (prevClass === 'active') return 'activetwo';
      else if (prevClass === 'activetwo') return 'last';
    });
  };
  const classes = useStyles();

  return (
    <section className={classes.pakete}>
      <div className={classes.box}>
        {/* The front container */}
        <div className={classes.front}>
          <table className={classes.tables} >
          <tr className={classes.tr} >
        <th className={classes.thp}>Benefit Sub-Categories</th>
        <th className={classes.thp}>Rose Lite</th>
        <th className={classes.thp}>Rose </th>
        <th className={classes.thp}>Lotus</th>
        <th className={classes.thp}>Tulip</th>
        <th className={classes.thp}>Hazel Lite</th>
        <th className={classes.thp}>Hazel </th>
        <th className={classes.thp}>Ivy</th>
        <th className={classes.thp} style={{borderRadius:'25px'}}>MariGold</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Region of Cover</th>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa II</td>
        <td className={classes.entypocheck}>Nigeria + India + Africa II</td>
        <td className={classes.entypocheck}>Nigeria + India + Africa II + UAE</td>
        <td className={classes.entypocheck}>Nigeria + India + Africa II + UAE</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Provider Category</th>
        <td className={classes.entypocancel}>Beta</td>
        <td className={classes.entypocheck}> Beta</td>
        <td className={classes.entypocheck}>Beta</td>
        <td className={classes.entypocheck}>Gamma</td>
        <td className={classes.entypocheck}>Gamma</td>
        <td className={classes.entypocheck}>Delta</td>
        <td className={classes.entypocheck}>Zeta</td>
        <td className={classes.entypocheck}>Sigma</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Annual Benefit Limit</th>
        <td className={classes.entypocancel}>Unlimited</td>
        <td className={classes.entypocancel}>Unlimited</td>
        <td className={classes.entypocancel}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
      </tr>
       
            <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>Out Patient Care</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Gp-Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Specialist Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Rare Specialist Consultation</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>???</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Telemedicine Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
      </tr>
          
      <tr className={classes.tr} >
        <th className={classes.th}>Prescribed Medications</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
      </tr> 

     <tr className={classes.tr} >
        <th className={classes.th}>Basic Laboratory Investigations/X-Ray/Ultrasound</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
      </tr>
   
        
    <tr  style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>IN PATIENT CARE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
      </tr>
   
        
    <tr className={classes.tr} >
        <th className={classes.th}>Admission and Feeding</th>
        <td className={classes.entypocancel}>Covered(Up to 15 days per annum)</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
      </tr>
        
     <tr className={classes.tr} >
        <th className={classes.th}>Room Type</th>
        <td className={classes.entypocancel}>Standard Ward</td>
        <td className={classes.entypocancel}>Standard Ward</td>
        <td className={classes.entypocancel}>Semi-Private room</td>
        <td className={classes.entypocancel}>Semi-Private Room</td>
        <td className={classes.entypocancel}>Private room</td>
        <td className={classes.entypocancel}>Private room</td>
        <td className={classes.entypocancel}>Private room</td>
        <td className={classes.entypocancel}>Private room</td>
        
      </tr>
        
    <tr className={classes.tr} >
        <th className={classes.th}>Telemedicine Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>

      </tr>

     <tr className={classes.tr} >
        <th className={classes.th}>Parental accommodation for infants in care</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered For 2 days</td>
        <td className={classes.entypocancel}>Covered for 2 days</td>
        <td className={classes.entypocancel}>Covered for 2 days</td>
        <td className={classes.entypocancel}>Covered for 3 days</td>
        <td className={classes.entypocancel}>Covered For 5 days</td>
        <td className={classes.entypocancel}>Covered For 7 days</td>
      
      </tr>
        
      <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>Intensive Care Services</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
       
      </tr>

    <tr className={classes.tr} >
        <th className={classes.th}>Subject to Plan Type Limit</th>
        <td className={classes.entypocancel}>24 hours</td>
        <td className={classes.entypocancel}>24 hours</td>
        <td className={classes.entypocancel}>2 Days</td>
        <td className={classes.entypocancel}>3 days</td>
        <td className={classes.entypocancel}>4 days</td>
        <td className={classes.entypocancel}>5 days</td>
        <td className={classes.entypocancel}>7 days</td>
        <td className={classes.entypocancel}>12 days</td>
       
      </tr>

       <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>Accident And Emergency</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
       
      </tr>

       <tr className={classes.tr} >
        <th className={classes.th}>Emergency Room Care</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
      
      </tr>
 
      <tr className={classes.tr} >
        <th className={classes.th}>Emergency Medical Transportation from Roadside to Hospital and Hospital to Hospital </th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
       
      </tr>
   
      <tr className={classes.tr} >
        <th className={classes.th}>Free Uber or Bolt ride home to hospital (Medical Emergencies Only)</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
       
      </tr>

    <tr className={classes.tr} >
        <th className={classes.th}>Emergency Services - Resuscitation and Stabilization</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
       
      </tr>
   
    <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>OBSTETRICS AND GYNAECOLOGY</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
       
      </tr>
    
              <tr className={classes.tr} >
        <th className={classes.th}>Antenatal Care</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
       
      </tr>
  
                     <tr className={classes.tr} >
        <th className={classes.th}>Induction of Labour and Normal Delivery</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
       
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>Assisted Delivery</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>Emeregency or Elective Caesarian Section</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
     
                     <tr className={classes.tr} >
        <th className={classes.th}>Epidural For Normal Delivery</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>40,000</td>
        <td className={classes.entypocancel}>40,000</td>
        
      </tr>
     
                     <tr className={classes.tr} >
        <th className={classes.th}>Post Natal Care (6 weeks)</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                     <tr className={classes.tr} >
        <th className={classes.th}>Family planning services (All Method)</th>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        
      </tr>
    
                     <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>NEONATAL CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
   
                     <tr className={classes.tr} >
        <th className={classes.th}>Special Baby Care Unit (Intensive care Unit-including life support, Phototherapy & Incubator care). limit per plan</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>24 Hours</td>
        <td className={classes.entypocancel}>3 Days</td>
        <td className={classes.entypocancel}>5 Days</td>
        <td className={classes.entypocancel}>7 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        <td className={classes.entypocancel}>12 Days</td>
        
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>Male Circumcision and Ear Piercing - Within first 6 weeks of life</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Congenital anomaly treatment (for children born on the plan). Limits per plan</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N200,000 per annum</td>
        <td className={classes.entypocancel}>N300,000 per annum</td>
        <td className={classes.entypocancel}>N400,000 per annum</td>
        <td className={classes.entypocancel}>N500,000 per annum</td>
        <td className={classes.entypocancel}>N850,000 per annum</td>
        <td className={classes.entypocancel}>N1,000,000 per annum</td>
        
      </tr>
   
                             <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>INFERTILITY MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
      </tr>
    
                             <tr className={classes.tr}>
        <th className={classes.th}>Consultation and Investigation</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N150,000</td>
        
      </tr>
     
        <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>PRIMARY IMMUNIZATIONS</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
    
                             <tr className={classes.tr} >
        <th className={classes.th}>BCG</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
     
                             <tr className={classes.tr} >
        <th className={classes.th}>OPV</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Pentavalent and NPV</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>HBV</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr}>
        <th className={classes.th}>Vitamin A</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>

      </tr>
    
                             <tr className={classes.tr} >
        <th className={classes.th}>Measles</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Pneumonoccoccal</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
  
                             <tr className={classes.tr} >
        <th className={classes.th}>Yelow Fever</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      </table>
          {!showPartTwo && (
            <button className={classes.seeMoreButton} onClick={handleShowPartTwo}>
              See More
            </button>
          )}
        </div>
        {showPartTwo && (
          <div className={`${classes.front} ${showPartThree ? classes.showPart : ''}`}>
            <table className={classes.tables}>
                             <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>SECONDARY IMMUNIZATION</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>RotaVirus</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Meningitis</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
    <tr className={classes.tr} >
        <th className={classes.th}>MMR</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
              
        
     </tr>
      
         <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>Hexaxim</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Typhoid</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Chicken Pox</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>HPV</th>
  <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>SURGERY (Subject to Plan limit)</th>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>N200,000</td>
        <td className={classes.entypocancel}>N300,000</td>
        <td className={classes.entypocancel}>N500,000</td>
        <td className={classes.entypocancel}>N800,000</td>
        <td className={classes.entypocancel}>N1,500,000</td>
        <td className={classes.entypocancel}>N2,500,000</td>
        <td className={classes.entypocancel}>N3,500,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Ninor Surgery</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Intermediate Surgery</th>
               <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Major Surgery</th>
               <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
        
     <tr className={classes.tr} >
        <th className={classes.th}>Tertiary Surgery/Minimal Invasive Surgeries</th>
               <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
                  
     <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>ENT SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      
      <tr className={classes.tr} >
        <th className={classes.th}>Treatment for ENT Diseases</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
    
    <tr className={classes.tr} >
        <th className={classes.th}>ENT Surgery(Subject to overall Surgical limit)</th>
                <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>        
                                           <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>DENTAL CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
  
                                            <tr className={classes.tr} >
        <th className={classes.th}>Primary Dental Care - Basic dental treatment, Simple Amalgam or composite filling ,Scaling and Polishing, Non-Surgical Extractions and Pain Therapy/ Relief</th>
        <td className={classes.entypocancel}>N5,000</td>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N60,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N150,000</td>
        <td className={classes.entypocancel}>N200,000</td>
        
      </tr>
     
                                           <tr className={classes.tr} >
        <th className={classes.th}>Secondary Dental Care - Surgical Tooth Extraction, Root Canal Treatment and Orthodontics</th>
              <td className={classes.entypocancel}>N5,000</td>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N60,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N150,000</td>
        <td className={classes.entypocancel}>N200,000</td>
        
      </tr>
      

    <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>EYE CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
 
                                           <tr className={classes.tr} >
        <th className={classes.th}>Primary Eye Care- Consultation, Examination, Primary Infections, and Medications</th>
                     <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>

                                           <tr className={classes.tr} >
        <th className={classes.th}>Eye Surgeries covered as part of over all surgical limit</th>
                      <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
       
                                           <tr className={classes.tr} >
        <th className={classes.th}>Lenses and Frames covered up to limit per plan (Once every 18 months)</th>
        <td className={classes.entypocancel}>N3000</td>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N35,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        
      </tr>

      <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>MAJOR DISEASE CARE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
     
      </table>
            {!showPartThree && (
              <button className={classes.seeMoreButton} onClick={handleShowPartThree}>
                See More
              </button>
            )}
          </div>
        )}
      {showPartThree && (
          <div className={`${classes.front} ${showPartThree ? classes.showPart : ''}`}>
            <table className={classes.tables}>
                                           <tr className={classes.tr} >
        <th className={classes.th}>Cancer Treatment (Chemotherapy, Radiotherapy, Surgery), Major Organ Diseases- Stroke, Rehabilitation, etc. Care. All drawn from major disease limits</th>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N300,000</td>
        <td className={classes.entypocancel}>N500,000</td>
        <td className={classes.entypocancel}>N700,000</td>
        <td className={classes.entypocancel}>N1,000,000</td>
        <td className={classes.entypocancel}>N2,500,000</td>
        <td className={classes.entypocancel}>N3,500,000</td>
        
      </tr>   
    <tr style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>PHYSIOTHERAPY CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
 
                                           <tr className={classes.tr} >
        <th className={classes.th}>Telemedicine Consultation</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>Specialist Consultant & Treatment</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>

        
                                           <tr className={classes.tr} >
        <th className={classes.th}>PhysioTherapy Sessions</th>
        <td className={classes.entypocancel}>2 Sessions</td>
        <td className={classes.entypocancel}>3 Sessions</td>
        <td className={classes.entypocancel}>6 Sessions</td>
        <td className={classes.entypocancel}>12 Sessions</td>
        <td className={classes.entypocancel}>15 Sessions</td>
        <td className={classes.entypocancel}>20 Sessions</td>
        <td className={classes.entypocancel}>40 Sessions</td>
        <td className={classes.entypocancel}>40 Sessions</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>External Medical Devices & Appliances such as Crutches, Wheelchair, Neck Collars etc Limits are per incident. </th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered Up to N15,000</td>
        <td className={classes.entypocancel}>Covered up to N50,000</td>
        <td className={classes.entypocancel}>Covered Up to N75,000</td>
        <td className={classes.entypocancel}>Covered up to N100,000</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>DIAGNOSTIC SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Basic Radiological Studies e.g Plain x-ray, Contrast X-ray & Ultrasonography (Abdominal and Pelvic)</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Laboratory Services- Histopathology, Hematological Investigations, Microbiological Investigations , Serology& Clinical chemistry</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Spirometry , Electrocardiogram (ECG) - Rest & EEG-Electroencephalogram </th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Advanced and  Complex Laboratory and Radiological Investigations e.g Echocardiogram, CT scan, MRI,e.t.c.</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>1 per anuum</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>ANNUAL WELLNESS SCREENING ( PRINCIPAL & SPOUSE)</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Physical Examination</th>
                <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>Visual Acuity</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>Blood Pressure</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Fasting Blood Sugar</th>
            <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Full Blood Count</th>
           <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Urinalysis</th>
           <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Lipid Profile</th>
              <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Liver Function Test</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>ECG</th>
             <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Kidney Function Test (E/U/Cr)</th>
               <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Breast scan every 2years for females older than 40years, Mammogram for every 2 years females older than 40 years , Pap smear every 2 years for females older than 35 years</th>
               <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>PSA for men above 40 years every 2 years</th>
              <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>PHARMACY BENEFIT AND CHRONIC DISEASE MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Chronic Medical Conditions (drug refill)</th>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Drug Delivery and Pick up at Partner Pharmacies</th>
                 <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Chronic Disease Management Program</th>
                  <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
    <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>MENTAL HEALTH MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Specialist Consultations on Outpatient Cases Only</th>
        <td className={classes.entypocancel}>2 Weeks</td>
        <td className={classes.entypocancel}>5 Weeks</td>
        <td className={classes.entypocancel}>10 Weeks</td>
        <td className={classes.entypocancel}>10 Weeks</td>
        <td className={classes.entypocancel}>10 Weeks</td>
        <td className={classes.entypocancel}>12 Weeks</td>
        <td className={classes.entypocancel}>12 Weeks</td>
        <td className={classes.entypocancel}>12 Weeks</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Psychiatric Inpatient Cases</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}> 2 Days</td>
        <td className={classes.entypocancel}>5 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Employee Assistance Program / Stress Management </th>
              <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                  <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>LIFESTYLE MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Discount at Network GYM Centres</th>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>On-site Health Checks , Health Talks/ Education Forum or Wellness Fairs</th>
              <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                        <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>TELEMEDICINE AND E-HEALTH SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Teleconsultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                        <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>TRAVEL INSURANCE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Worldwide Cover For Principal Only</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>2 Weeks</td>
        <td className={classes.entypocancel}>2 Weeks</td>
        <td className={classes.entypocancel}>1 Month</td>
        <td className={classes.entypocancel}>1 Month</td>
        
      </tr>
      
                        <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>EXPERT SECOND OPINION SEWRVICE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Second Opinion SErvice By Experts</th>
              <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                        <tr style={{backgroundColor:'brown' ,color:'white'}}>
        <th className={classes.th}>MORTUARY SERVICES FOR FAMILY</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Mortuary Service</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered Up to N50,000</td>
        <td className={classes.entypocancel}>Covered up to N100,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        
      </tr>
      </table>
      </div>
        )}
      
            <div className={classes.front}>
            <table className={classes.tables}>
            <tr className={classes.tr} style={{backgroundColor:'brown' ,color:'white'}} >
        <th className={classes.th}>Price</th>
        <td className={classes.entypocancele}>N5000</td>
        <td className={classes.entypocancele}>N50,000</td>
        <td className={classes.entypocancele}>N100,000</td>
        <td className={classes.entypocancele}>N150,000</td>
        <td className={classes.entypocancele}>N150,000</td>
        <td className={classes.entypocancele}>N150,000</td>
        <td className={classes.entypocancele}>N150,000</td>
        <td className={classes.entypocancele}>N150,000</td>
        
      </tr>
          </table>
        </div>
        </div>
        <div className={classes.responsivetables}>
        <div className={`${classes.little} ${classes.active}`}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 1</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>1123,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td onClick={handleShowMeClick}><button>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={`${classes.little} ${classes.activetwo}`}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 2</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>5813,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button onClick={handleShowMeClick} >Details</button></td>
      </tr>
    </table>
  </div>

  <button onClick={ handleTableNextClick} className={classes.nexttable} ></button>
  <button onClick={ handleTablePrevClick} className={classes.prevtable} ></button>

</div>

                                                                         

    </section>
  )
};

export default PriceTable;

{/* <section id="pakete">
<h1>Responsive Flipping Price-Table</h1>
<p className="section-text">This is a neat price-table. It saves you a lot of space and it looks nice. Have fun! <em>Also try resizing the window, to see the responsive Solution I came up with!</em></p>

<div className="box"><!-- The surrounding box -->

  <!-- The front container -->
  <div className="front">
    <table border="0">
      <tr className={classes.tr} >
        <th className={classes.th}>Benefit Sub-Categories</th>
        <th className={classes.th}>Rose Lite</th>
        <th className={classes.th}>Rose </th>
        <th className={classes.th}>Lotus</th>
        <th className={classes.th}>Tulip</th>
        <th className={classes.th}>Hazel Lite</th>
        <th className={classes.th}>Hazel </th>
        <th className={classes.th}>Ivy</th>
        <th className={classes.th}>MariGold</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Region of Cover</th>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa I</td>
        <td className={classes.entypocheck}>Nigeria + Africa II</td>
        <td className={classes.entypocheck}>Nigeria + India + Africa II</td>
        <td className={classes.entypocheck}>Nigeria + India + Africa II + UAE</td>
        <td className={classes.entypocheck}>Nigeria + India + Africa II + UAE</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Provider Category</th>
        <td className={classes.entypocancel}>Beta</td>
        <td className={classes.entypocheck}> Beta</td>
        <td className={classes.entypocheck}>Beta</td>
        <td className={classes.entypocheck}>Gamma</td>
        <td className={classes.entypocheck}>Gamma</td>
        <td className={classes.entypocheck}>Delta</td>
        <td className={classes.entypocheck}>Zeta</td>
        <td className={classes.entypocheck}>Sigma</td>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Annual Benefit Limit</th>
        <td className={classes.entypocancel}>Unlimited</td>
        <td className={classes.entypocancel}>Unlimited</td>
        <td className={classes.entypocancel}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        <td className={classes.entypocheck}>Unlimited</td>
        
      </tr>
       
            <tr className={classes.tr} >
        <th className={classes.th}>Out Patient Care</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
        
        
        
        
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Gp-Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Specialist Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Rare Specialist Consultation</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>???</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Telemedicine Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        
              <tr className={classes.tr} >
        <th className={classes.th}>Prescribed Medications</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>      
              <tr className={classes.tr} >
        <th className={classes.th}>Basic Laboratory Investigations/X-Ray/Ultrasound</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
        
              <tr className={classes.tr} >
        <th className={classes.th}>IN PATIENT CARE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
   
        
              <tr className={classes.tr} >
        <th className={classes.th}>Admission and Feeding</th>
        <td className={classes.entypocancel}>Covered(Up to 15 days per annum)</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
        
              <tr className={classes.tr} >
        <th className={classes.th}>Room Type</th>
        <td className={classes.entypocancel}>Standard Ward</td>
        <td className={classes.entypocancel}>Standard Ward</td>
        <td className={classes.entypocancel}>Semi-Private room</td>
        <td className={classes.entypocancel}>Semi-Private Room</td>
        <td className={classes.entypocancel}>Private room</td>
        <td className={classes.entypocancel}>Private room</td>
        <td className={classes.entypocancel}>Private room</td>
        <td className={classes.entypocancel}>Private room</td>
        
      </tr>
        
              <tr className={classes.tr} >
        <th className={classes.th}>Telemedicine Consultation</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>

              <tr className={classes.tr} >
        <th className={classes.th}>Parental accommodation for infants in care</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered For 2 days</td>
        <td className={classes.entypocancel}>Covered for 2 days</td>
        <td className={classes.entypocancel}>Covered for 2 days</td>
        <td className={classes.entypocancel}>Covered for 3 days</td>
        <td className={classes.entypocancel}>Covered For 5 days</td>
        <td className={classes.entypocancel}>Covered For 7 days</td>
        
      </tr>
        
              <tr className={classes.tr} >
        <th className={classes.th}>Intensive Care Services</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      <tr className={classes.tr} >
        
              <tr className={classes.tr} >
        <th className={classes.th}>Subject to Plan Type Limit</th>
        <td className={classes.entypocancel}>24 hours</td>
        <td className={classes.entypocancel}>24 hours</td>
        <td className={classes.entypocancel}>2 Days</td>
        <td className={classes.entypocancel}>3 days</td>
        <td className={classes.entypocancel}>4 days</td>
        <td className={classes.entypocancel}>5 days</td>
        <td className={classes.entypocancel}>7 days</td>
        <td className={classes.entypocancel}>12 days</td>
        
      </tr>

              <tr className={classes.tr} >
        <th className={classes.th}>Accident And Emergency</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>

              <tr className={classes.tr} >
        <th className={classes.th}>Emergency Room Care</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
 
              <tr className={classes.tr} >
        <th className={classes.th}>Emergency Medical Transportation from Roadside to Hospital and Hospital to Hospital </th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
              <tr className={classes.tr} >
        <th className={classes.th}>Free Uber or Bolt ride home to hospital (Medical Emergencies Only)</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>

              <tr className={classes.tr} >
        <th className={classes.th}>Emergency Services - Resuscitation and Stabilization</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
              <tr className={classes.tr} >
        <th className={classes.th}>OBSTETRICS AND GYNAECOLOGY</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
    
              <tr className={classes.tr} >
        <th className={classes.th}>Antenatal Care</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
  
                     <tr className={classes.tr} >
        <th className={classes.th}>Induction of Labour and Normal Delivery</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>Assisted Delivery</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>Emeregency or Elective Caesarian Section</th>
        <td className={classes.entypocancel}>Subject To Surgical Limit</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
     
                     <tr className={classes.tr} >
        <th className={classes.th}>Epidural For Normal Delivery</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>40,000</td>
        <td className={classes.entypocancel}>40,000</td>
        
      </tr>
     
                     <tr className={classes.tr} >
        <th className={classes.th}>Post Natal Care (6 weeks)</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                     <tr className={classes.tr} >
        <th className={classes.th}>Family planning services (All Method)</th>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>NEONATAL CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
   
                     <tr className={classes.tr} >
        <th className={classes.th}>Special Baby Care Unit (Intensive care Unit-including life support, Phototherapy & Incubator care). limit per plan</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>24 Hours</td>
        <td className={classes.entypocancel}>3 Days</td>
        <td className={classes.entypocancel}>5 Days</td>
        <td className={classes.entypocancel}>7 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        <td className={classes.entypocancel}>12 Days</td>
        
      </tr>
    
                     <tr className={classes.tr} >
        <th className={classes.th}>Male Circumcision and Ear Piercing - Within first 6 weeks of life</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Congenital anomaly treatment (for children born on the plan). Limits per plan</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N200,000 per annum</td>
        <td className={classes.entypocancel}>N300,000 per annum</td>
        <td className={classes.entypocancel}>N400,000 per annum</td>
        <td className={classes.entypocancel}>N500,000 per annum</td>
        <td className={classes.entypocancel}>N850,000 per annum</td>
        <td className={classes.entypocancel}>N1,000,000 per annum</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>INFERTILITY MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
    
                             <tr className={classes.tr} >
        <th className={classes.th}>Consultation and Investigation</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N150,000</td>
        
      </tr>
     
                             <tr className={classes.tr} >
        <th className={classes.th}>PRIMARY IMMUNIZATIONS</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
    
                             <tr className={classes.tr} >
        <th className={classes.th}>BCG</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
     
                             <tr className={classes.tr} >
        <th className={classes.th}>OPV</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Pentavalent and NPV</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>HBV</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Vitamin A</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocheck}>Covered</td>
      </tr>
    
                             <tr className={classes.tr} >
        <th className={classes.th}>Measles</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
   
                             <tr className={classes.tr} >
        <th className={classes.th}>Pneumonoccoccal</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
  
                             <tr className={classes.tr} >
        <th className={classes.th}>Yelow Fever</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
    
                             <tr className={classes.tr} >
        <th className={classes.th}>SECONDARY IMMUNIZATION</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>RotaVirus</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Meningitis</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>MMR</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
              </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Hexaxim</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Typhoid</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Chicken Pox</th>
         <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>HPV</th>
  <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>N7,500</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        <td className={classes.entypocancel}>N70,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>SURGERY (Subject to Plan limit)</th>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>N200,000</td>
        <td className={classes.entypocancel}>N300,000</td>
        <td className={classes.entypocancel}>N500,000</td>
        <td className={classes.entypocancel}>N800,000</td>
        <td className={classes.entypocancel}>N1,500,000</td>
        <td className={classes.entypocancel}>N2,500,000</td>
        <td className={classes.entypocancel}>N3,500,000</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Ninor Surgery</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Intermediate Surgery</th>
               <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                                   <tr className={classes.tr} >
        <th className={classes.th}>Major Surgery</th>
               <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>Tertiary Surgery/Minimal Invasive Surgeries</th>
               <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
                                           <tr className={classes.tr} >
        <th className={classes.th}>ENT SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      
      <tr className={classes.tr} >
        <th className={classes.th}>Treatment for ENT Diseases</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
                                               <tr className={classes.tr} >
        <th className={classes.th}>ENT Surgery(Subject to overall Surgical limit)</th>
                <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>        
                                           <tr className={classes.tr} >
        <th className={classes.th}>DENTAL CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
  
                                            <tr className={classes.tr} >
        <th className={classes.th}>Primary Dental Care - Basic dental treatment, Simple Amalgam or composite filling ,Scaling and Polishing, Non-Surgical Extractions and Pain Therapy/ Relief</th>
        <td className={classes.entypocancel}>N5,000</td>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N60,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N150,000</td>
        <td className={classes.entypocancel}>N200,000</td>
        
      </tr>
     
                                           <tr className={classes.tr} >
        <th className={classes.th}>Secondary Dental Care - Surgical Tooth Extraction, Root Canal Treatment and Orthodontics</th>
              <td className={classes.entypocancel}>N5,000</td>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        <td className={classes.entypocancel}>N60,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N150,000</td>
        <td className={classes.entypocancel}>N200,000</td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>EYE CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>Primary Eye Care- Consultation, Examination, Primary Infections, and Medications</th>
                     <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>Eye Surgeries covered as part of over all surgical limit</th>
                      <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
       
                                           <tr className={classes.tr} >
        <th className={classes.th}>Lenses and Frames covered up to limit per plan (Once every 18 months)</th>
        <td className={classes.entypocancel}>N3000</td>
        <td className={classes.entypocancel}>N10,000</td>
        <td className={classes.entypocancel}>N15,000</td>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N25,000</td>
        <td className={classes.entypocancel}>N30,000</td>
        <td className={classes.entypocancel}>N35,000</td>
        <td className={classes.entypocancel}>N40,000</td>
        
      </tr>

      <tr className={classes.tr} >
        <th className={classes.th}>MAJOR DISEASE CARE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
     
                                           <tr className={classes.tr} >
        <th className={classes.th}>Cancer Treatment (Chemotherapy, Radiotherapy, Surgery), Major Organ Diseases- Kidney Dialysis, Organ transplants, Other major Organ diseases, Stroke, Rehabilitation Care. All drawn from major disease limits</th>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N100,000</td>
        <td className={classes.entypocancel}>N300,000</td>
        <td className={classes.entypocancel}>N500,000</td>
        <td className={classes.entypocancel}>N700,000</td>
        <td className={classes.entypocancel}>N1,000,000</td>
        <td className={classes.entypocancel}>N2,500,000</td>
        <td className={classes.entypocancel}>N3,500,000</td>
        
      </tr>   
                                           <tr className={classes.tr} >
        <th className={classes.th}>PHYSIOTHERAPY CARE SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>Telemedicine Consultation</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>Specialist Consultant & Treatment</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      <tr className={classes.tr} >
        
                                           <tr className={classes.tr} >
        <th className={classes.th}>PhysioTherapy Sessions</th>
        <td className={classes.entypocancel}>2 Sessions</td>
        <td className={classes.entypocancel}>3 Sessions</td>
        <td className={classes.entypocancel}>6 Sessions</td>
        <td className={classes.entypocancel}>12 Sessions</td>
        <td className={classes.entypocancel}>15 Sessions</td>
        <td className={classes.entypocancel}>20 Sessions</td>
        <td className={classes.entypocancel}>40 Sessions</td>
        <td className={classes.entypocancel}>40 Sessions</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>External Medical Devices & Appliances such as Crutches, Wheelchair, Neck Collars etc Limits are per incident. </th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered Up to N15,000</td>
        <td className={classes.entypocancel}>Covered up to N50,000</td>
        <td className={classes.entypocancel}>Covered Up to N75,000</td>
        <td className={classes.entypocancel}>Covered up to N100,000</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>DIAGNOSTIC SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Basic Radiological Studies e.g Plain x-ray, Contrast X-ray & Ultrasonography (Abdominal and Pelvic)</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Laboratory Services- Histopathology, Hematological Investigations, Microbiological Investigations , Serology& Clinical chemistry</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Spirometry , Electrocardiogram (ECG) - Rest & EEG-Electroencephalogram </th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Advanced and  Complex Laboratory and Radiological Investigations e.g Echocardiogram, CT scan, MRI,e.t.c.</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>1 per anuum</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>ANNUAL WELLNESS SCREENING ( PRINCIPAL & SPOUSE</th>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Physical Examination</th>
                <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Visual Acuity</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Blood Pressure</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
      <tr className={classes.tr} >
        <th className={classes.th}>Fasting Blood Sugar</th>
            <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Full Blood Count</th>
           <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Urinalysis</th>
           <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Lipid Profile</th>
              <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Liver Function Test</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>ECG</th>
             <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Kidney Function Test (E/U/Cr)</th>
               <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Breast scan every 2years for females older than 40years, Mammogram for every 2 years females older than 40 years , Pap smear every 2 years for females older than 35 years</th>
               <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>PSA for men above 40 years every 2 years</th>
              <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>PHARMACY BENEFIT AND CHRONIC DISEASE MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Chronic Medical Conditions (drug refill)</th>
        <td className={classes.entypocancel}>N20,000</td>
        <td className={classes.entypocancel}>N50,000</td>
        <td className={classes.entypocancel}>N80,000</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
            <tr className={classes.tr} >
        <th className={classes.th}>Drug Delivery and Pick up at Partner Pharmacies</th>
                 <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Chronic Disease Management Program</th>
                  <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>MENTAL HEALTH MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Specialist Consultations on Outpatient Cases Only</th>
        <td className={classes.entypocancel}>2 Weeks</td>
        <td className={classes.entypocancel}>5 Weeks</td>
        <td className={classes.entypocancel}>10 Weeks</td>
        <td className={classes.entypocancel}>10 Weeks</td>
        <td className={classes.entypocancel}>10 Weeks</td>
        <td className={classes.entypocancel}>12 Weeks</td>
        <td className={classes.entypocancel}>12 Weeks</td>
        <td className={classes.entypocancel}>12 Weeks</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Psychiatric Inpatient Cases</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}> 2 Days</td>
        <td className={classes.entypocancel}>5 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        <td className={classes.entypocancel}>10 Days</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Employee Assistance Program / Stress Management </th>
              <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>LIFESTYLE MANAGEMENT</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>Discount at Network GYM Centres</th>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        <td className={classes.entypocancel}>10%</td>
        
      </tr>
      
                  <tr className={classes.tr} >
        <th className={classes.th}>On-site Health Checks , Health Talks/ Education Forum or Wellness Fairs</th>
              <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>TELEMEDICINE AND E-HEALTH SERVICES</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Teleconsultation</th>
              <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>TRAVEL INSURANCE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Worldwide Cover For Principal Only</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>2 Weeks</td>
        <td className={classes.entypocancel}>2 Weeks</td>
        <td className={classes.entypocancel}>1 Month</td>
        <td className={classes.entypocancel}>1 Month</td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>EXPERT SECOND OPINION SEWRVICE</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Second Opinion SErvice By Experts</th>
              <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        <td className={classes.entypocancel}>Covered</td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>MORTUARY SERVICES FOR FAMILY</th>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        <td className={classes.entypocancel}></td>
        
      </tr>
      
                        <tr className={classes.tr} >
        <th className={classes.th}>Mortuary Service</th>
        <td className={classes.entypocancel}>Not Covered</td>
        <td className={classes.entypocancel}>Covered Up to N50,000</td>
        <td className={classes.entypocancel}>Covered up to N100,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        <td className={classes.entypocancel}>Covered Up to N150,000</td>
        
      </tr>
        
        <th className={classes.th}>Price</th>
        <td>1123,00$</td>
        <td>5813,00$</td>
        <td>2134,00$</td>
        <td>5589,00$</td>
        <td>1442,00$</td>
        <td>3337,00$</td>
        <td>7610,00$</td>
        <td>9871,00$</td>
        <td>5972,00$</td>
      </tr>      
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_1}>Details</button></td>
        <td><button className={classes.showme_2}>Details</button></td>
        <td><button className={classes.showme_3}>Details</button></td>
        <td><button className={classes.showme_4}>Details</button></td>
        <td><button className={classes.showme_5}>Details</button></td>
        <td><button className={classes.showme_6}>Details</button></td>
        <td><button className={classes.showme_7}>Details</button></td>
        <td><button className={classes.showme_8}>Details</button></td>
        <td><button className={classes.showme_9}>Details</button></td>
      </tr>
    </table>    
  </div>
<div className="responsive-tables">
  <div className={classes.little}active">
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 1</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>1123,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_1}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}activetwo">
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 2</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>5813,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_2}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 3</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        <td className={classes.entypocancel}></td>
      </tr>

      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr><tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>2134,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_3}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 4</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>5589,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_4}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 5</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>1442,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_5}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 6</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>3337,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_6}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 7</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>7610,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_7}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}>
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 8</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>9871,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_8}>Details</button></td>
      </tr>
    </table>
  </div>
  <div className={classes.little}last">
    <table className={classes.table}>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <th className={classes.th}>Paket 9</th>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 1</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 2</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 3</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 4</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 5</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 6</th>
        
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Service 7</th>
        <td className={classes.entypocancel}></td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>Price</th>
        <td>5972,00$</td>
      </tr>
      <tr className={classes.tr} >
        <th className={classes.th}>...</th>
        <td><button className={classes.showme_9}>Details</button></td>
      </tr>
    </table>
  </div>
  <button className="next-table entypo-right-dir"></button>
  <button className="prev-table entypo-left-dir"></button>

</div>
  <!-- The classes.backsideclasses. containers -->  
  <div className="classes.back firclasses.st">
    <h1>Paket 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 1
    </p>
    <button className="hideme_1"></button>
  </div>
  <div className="classes.back secclasses.ond">
    <h1>Paket 2</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, necessitatibus, dicta consequatur quas quis dolores sapiente ducimus incidunt veniam repellat veritatis reiciendis consequuntur corporis tempora harum perspiciatis explicabo perferendis sunt aliquam eius quae consectetur eos distinctio ea eaque voluptates mollitia.
    </p>
    <button className="hideme_2"></button>
  </div>
  <div className="classes.back thiclasses.rd">
    <h1>Paket 3</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 3
    </p>
    <button className="hideme_3"></button>
  </div>
  <div className="classes.back fouclasses.rth">
    <h1>Paket 4</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 4
    </p>
    <button className="hideme_4"></button>
  </div>
  <div className="classes.back fifclasses.th">
    <h1>Paket 5</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 5
    </p>
    <button className="hideme_5"></button>
  </div>              
  <div className="classes.back sixclasses.th">
    <h1>Paket 6</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 5
    </p>
    <button className="hideme_6"></button>
  </div>
  <div className="classes.back sevclasses.enth">
    <h1>Paket 7</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 5
    </p>
    <button className="hideme_7"></button>
  </div>  
  <div className="classes.back eigclasses.th">
    <h1>Paket 8</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 5
    </p>
    <button className="hideme_8"></button>
  </div>  
  <div className="classes.back ninclasses.th">
    <h1>Paket 9</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus labore dicta excepturi ab odit autem dolorem nulla neque sit laudantium sapiente aperiam magni nihil sed cupiditate asperiores at iure.<br /><br />No. 5
    </p>
    <button className="hideme_9"></button>
  </div>                                                                            
</div><!-- The end of the box -->  
  
</section><!-- END of section-wrap --> */}