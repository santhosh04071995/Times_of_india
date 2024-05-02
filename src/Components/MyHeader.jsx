
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass,faFaceLaugh } from '@fortawesome/free-solid-svg-icons';
import styles from "./MyHeader.module.css";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MyContent from './MyContent';

export default function MyHero() {
    const[imag,setImag] = useState([]); 
    const [show, setShow] = useState(false);
    

    useEffect(()=> {
      async function myfunc() {
        let x= await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8e45de54b37048da91379d3a0b910d77');
        let y= await x.json();
               
        setImag(y.articles);
        console.log(imag);
       }
       myfunc();
    },[])

   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <div className="container-fluid ">
            <div className='bg-danger p-2'>
                 <div className={`${styles.menu_search1} d-flex justify-content-between`}>
                <button onClick={handleShow}><FontAwesomeIcon icon={faBars} size='2x'/></button>  
                <button><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></button>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
               <img src="/TOI.png" alt="" className={`${styles.logoimg} mt-2`} />       
                <div className={styles.mysearch}>  
               
                <button><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></button>
                </div> 

                </div>
                
                <>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Build On Progress</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <FontAwesomeIcon icon={faFaceLaugh} size='3x' />
                    </Offcanvas.Body>
                  </Offcanvas>
                </>
              </div>
            <div> {/* mycontent component */}
            <MyContent content={imag} />
            </div>

   


</div>
        
    )
}