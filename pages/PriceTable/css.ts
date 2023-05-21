import { createUseStyles } from 'react-jss';

export default createUseStyles({
  sectiontext: {
    textAlign: 'center',
    padding: '0 25%',
  },

  heading: {
    font: 'italic 600 2.2rem/1 "Open Sans", sans-serif',
    color: '#222',
  },

  paragraph: {
    font: '400 1.4rem "Open Sans", sans-serif',
    color: '#222',
  },

  button: {
    margin: '20px',
    border: 'none',
    display: 'block',
    background: '#D33536',
    color: '#fff',
    textTransform: 'uppercase',
    font: '300 1.2rem "Open Sans", sans-serif',
    padding: '7px 15px',
    borderRadius: '5px',
    transition: '0.1s',
    '&:focus': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:active': {
      boxShadow: '0px 3px 6px 0px #bc1414 inset',
    },
    '&:hover': {
      borderRadius: '10px',
    },
  },

  table: {
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    border: 'none',
    borderSpacing: 0,
    font: '400 1.4rem "Open Sans", sans-serif',
    transition: 'width 0.2s height 0.2s',
    '& th, & td': {
      borderRight: '1px solid brown',
      borderBottom: '1px solid brown',
      textAlign: 'center',
    },
    '& th:last-child, & td:last-child': {
      borderRight: 'none',
    },
    '& tr:last-child td, & tr:last-child th': {
      borderBottom: 'none',
    },
    th: {
      background: 'black',
      font: '600 1.4rem "Open Sans", sans-serif',
    },
  },

  box: {
    position: 'relative',
    margin: '3% auto 0',
    width: '85%',
    border: '1px solid brown',   
    height: '493rem',
    borderRadius:'15px',
    perspective: '10000',
    transformStyle: 'preserve-3d',
    minWidth: '950px',
    overflow: 'visible',
    transition: 'width 0.2s height 0.2s',
  },

  front: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.7s',
    transformOrigin: '50% 50%',
    background: '#fff',
    borderRadius: '5px',
  },
  entypocheck:{
    color:'green',
    textAlign:'center',
    paddingLeft:'.3rem',
    paddingRight:'.3rem',
    width:'13rem',
    borderBottom:'1px solid brown',
    borderRight:'1px solid brown',


  },
  entypocancel:{
    color:'green',
    textAlign:'center',
    paddingLeft:'.3rem',
    paddingRight:'.3rem',
    fontSize:'.9rem',

    borderBottom:'1px solid brown',
    borderRight:'1px solid brown',

  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.7s',
    transformOrigin: '50% 50%',
    background: '#fff',
    borderRadius: '5px',
    padding: '5%',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },

  responsivetables: {
    display: 'none',
    width: '100%',
    height: '100%',
  },

  little: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s, opacity 0.0s 0.4s',
    opacity: 0,
    transform: 'rotateY(0deg) translateX(250%)',
    transformOrigin: '0 0',
  },

  th:{
      paddingTop:'1rem',
      width:'15rem',
      display:"flex",
      padding:'.3rem',
      fontSize:'.9rem',
      justifyContent:'center',
      alignItems:'center',
      
      borderRight:'1px solid brown',

  },
  tr:{
    borderBottom:'1px solid brown'
  },
  thp:{
    paddingTop:'1rem',
    width:'15rem',
    padding:'.3rem',
    fontSize:'1.1rem',
    backgroundColor:'brown',
    color:'white',


},

  pakete:{
    color: '#000',
    fontWeight: 'bold',
    background: 'white',
    borderBottom: '2px solid #3ca02a',
    padding: '0px 7px',
    lineHeight: '1.8',
    
  },

  active: {
    transform: 'rotateY(0) translateX(0)',
    transition: 'transform 0.6s',
    opacity: 1,
  },

  activetwo: {
    transform: 'rotateY(0) translateX(106%)',
    transition: 'transform 0.6s',
    opacity: 1,
  },

  last: {
    transform: 'rotateY(0) translateX(-110%)',
    transition: 'transform 0.6s opacity 0.0s 0.4s',
    opacity: 0,
  },

  flip1: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    $little1: {
      transform: 'rotateY(-180deg)',
    },
    '& $back.first': {
      transform: 'rotateY(0deg)',
    },
  },

  flip2: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little2: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.second': {
      transform: 'rotateY(0deg)',
    },
  },

  flip3: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little3: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.third': {
      transform: 'rotateY(0deg)',
    },
  },

  flip4: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little4: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.fourth': {
      transform: 'rotateY(0deg)',
    },
  },

  flip5: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little5: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.fifth': {
      transform: 'rotateY(0deg)',
    },
  },

  flip6: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little6: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.sixth': {
      transform: 'rotateY(0deg)',
    },
  },

  flip7: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little7: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.seventh': {
      transform: 'rotateY(0deg)',
    },
  },

  flip8: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little8: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.eighth': {
      transform: 'rotateY(0deg)',
    },
  },

  flip9: {
    front: {
      transform: 'rotateY(-180deg)',
    },
    little9: {
      transform: 'rotateY(-180deg) translateX(0)',
    },
    '& $back.ninth': {
      transform: 'rotateY(0deg)',
    },
  },

  back1: {
    '& img': {
      float: 'left',
      width: '120px',
      marginTop: '80px',
    },
    '& p': {
      paddingLeft: '40px',
      marginLeft: '120px',
    },
  },

  price: {
    font: '600 1.4rem Open Sans, sans-serif',
    paddingLeft: '40px',
  },

  h2: {
    marginTop: '40px',
  },


    nexttable: {
      position: 'absolute',
      right: '-3%',
      top: '50%',
      width: '60px',
      height: '80px',
      marginTop: '-25px',
      background: '#D43536',
      border: 'none',
      color: '#fff',
      fontSize: '2.5rem',
      padding: '0',
      zIndex: '99',
      borderRadius: '50% 0 0 50%',
    },
    prevtable: {
      position: 'absolute',
      left: '-3%',
      top: '50%',
      width: '60px',
      height: '80px',
      marginTop: '-25px',
      background: '#D43536',
      border: 'none',
      color: '#fff',
      fontSize: '2.5rem',
      padding: '0',
      zIndex: '99',
      borderRadius: '0 50% 50% 0',
    },
 

  'box[class*="flip"]': {
    '& $responsive-tables button.next-table, & $responsive-tables button.prev-table': {
      background: '#d6b8b8',
      pointerEvents: 'none',
    },
  },

  button1: {
    border: 'none',
    borderRadius: '5px',
    background: '#D43536',
    padding: '10px 25px',
    color: '#fff',
    transition: 'box-shadow 0.1s, border-radius 0.3s',
    font: '300 1.2rem Open Sans, sans-serif',
    cursor: 'pointer',
    '&:focus': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:active': {
      boxShadow: '0px 3px 6px 0px #bc1414 inset',
    },
    '&:hover': {
      borderRadius: '10px',
    },
  },

  hideme_1: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },

  hideme_2: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_3: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_4: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_5: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_6: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_7: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_8: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },
  hideme_9: {
    width: '0px !important',
    height: '0px !important',
    padding: '0px !important',
    background: 'transparent !important',
    borderRadius: '100% !important',
    borderTop: '40px solid transparent !important',
    borderBottom: '40px solid transparent !important',
    borderLeft: '40px solid #f66f6f !important',
    borderRight: '40px solid transparent !important',
    display: 'block',
    position: 'absolute',
    right: '-41px',
    top: '-41px',
    transform: 'rotate(315deg)',
    cursor: 'pointer',
    '&:before': {
      // content: '"\232b"',
      // font: '1.4rem entypo, sans-serif',
      // position: 'absolute',
      // top: '-8px',
      // left: '-32px',
      // color: '#ffd8d8',
      // display: 'block',
      // transition: '0.3s',
    },
    '&:hover:before': {
      color: '#fff',
    },
  },


  '@media only screen and (max-width: 1024px)': {
    pakete : {
      position: 'relative',
      margin: '3% auto 0',
      width: '70%',
      height: '500px',
      perspective: '10000',
      transformStyle: 'preserve-3d',
      minWidth: '0px',
      overflow: 'hidden',
      transition: 'width 0.2s height 0.2s',
      box:{
        position: 'relative',
        margin: '3% auto 0',
        width: '70%',
        height: '500px',
        perspective: '10000',
        transformStyle: 'preserve-3d',
        minWidth: '0px',
        overflow: 'hidden',
        transition: 'width 0.2s height 0.2s',
      }
    },
    '#pakete .box .front, #pakete .box .back, #pakete .box .responsive-tables [class*="little"]': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.7s',
      transformOrigin: '50% 50%',
      background: '#fff',
      borderRadius: '5px',
    },
    '#pakete .box .responsive-tables [class*="little"]': {
      width: '47%',
    },
    '#pakete .box .responsive-tables': {
      display: 'block',
      width: '100%',
      height: '100%',
    },
    '#pakete .front': {
      display: 'none',
    },

    '#pakete .box [class*="little"].active': {
      transform: 'rotateY(0) translateX(0)',
      transition: 'transform 0.6s',
      opacity: '1',
    },
    '#pakete .box [class*="little"].activetwo': {
      transform: 'rotateY(0) translateX(112.7659574%)',
      transition: 'transform 0.6s',
      opacity: '1',
    },
    '#pakete .box [class*="little"].last': {
      transform: 'rotateY(0) translateX(-110%)',
      transition: 'transform 0.6s opacity 0.0s 0.4s',
      opacity: '0.0',
    },
  },

  '@media only screen and (max-width: 768px)': {
    '#pakete .box': {
      width: '90%',
      minWidth: '0px',
    },
  },
  
  '@media only screen and (max-width: 533px)': {
    '#pakete .box': {
      position: 'relative',
      margin: '3% auto 0',
      width: '80%',
      height: '400px',
      perspective: '10000',
      transformStyle: 'preserve-3d',
      minWidth: '0px',
      overflow: 'hidden',
      transition: 'width 0.2s height 0.2s',
    },
    '#pakete .box .front, #pakete .box .back, #pakete .box .responsive-tables [class*="little"]': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.7s',
      transformOrigin: '50% 50%',
      background: '#fff',
      borderRadius: '5px',
    },
    '#pakete .box .responsive-tables': {
      display: 'block',
    },
    '#pakete .front': {
      display: 'none',
    },
    '#pakete .box .responsive-tables [class*="little"]': {
      transform: 'rotateY(0deg) translateX(150%)',
      transformOrigin: '0 0',
      transition: 'transform 0.6s, opacity 0.0s 0.4s',
      opacity: '0.0',
    },
    '#pakete .box [class*="little"].active': {
      transform: 'rotateY(0) translateX(0)',
      transition: 'transform 0.6s',
      opacity: '1',
    },
    '#pakete .box [class*="little"].activetwo': {
      transform: 'rotateY(0) translateX(110%)',
      transition: 'transform 0.6s',
      opacity: '1',
    },
    '#pakete .box [class*="little"].last': {
      transform: 'rotateY(0) translateX(-110%)',
      transition: 'transform 0.6s opacity 0.0s 0.4s',
      opacity: '0.0',
    },
  },
},
);
