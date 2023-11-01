import React, { useState } from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap';



const Calculator = () => {
    const [input, setInput] = useState('');
   
    const handleButtonClick = (value) => {
        setInput(input + value);
    }

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    }

    const handleClear = () => {
        setInput('');
    }
    const handleBackspace = () => {
        setInput(input.slice(0, -1));
      };


    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center   flex-column ">

                
                <div className=" w-50 p-1">
              <Row className='p-2'><span style={{height:"50px",border:"solid 2px ",borderRadius:'4px',fontSize:"30px"}}  ><p  >{input}</p></span></Row>
                    <Row>
                            <Col> 
                            <button  className=' d-flex justify-content-center align-items-center  btn border-black w-100 mt-2 fw-bold  '  onClick={handleClear}>C</button>
        
                            </Col>
                            <Col>
                            <button className='   btn border-black w-100 mt-2 fw-bold ' onClick={() => handleBackspace('')}><i class="fa-solid fa-delete-left"></i></button>
    
                            </Col>
                            <Col>
                            <button className='    btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('%')}>%</button>
    
        
                            </Col>
                            <Col>
                                <button className=' text-center  btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('/')}> ÷</button>
        
                            </Col>
                        </Row>
                    <Row>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('7')}>7</button>
        
                            </Col>
                            <Col>
                                <button className=' btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('8')}>8</button>
        
                            </Col>
                            <Col>
                                <button className='  btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('9')}>9</button>
        
                            </Col>
                            <Col>
                                <button className=' btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('*')}>  x</button>
        
                            </Col>
                        </Row>
                      
                        <Row>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold   ' onClick={() => handleButtonClick('4')}>4</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold  ' onClick={() => handleButtonClick('5')}>5</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold ' onClick={() => handleButtonClick('6')}>6</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold  ' onClick={() => handleButtonClick('-')}>-</button>
        
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold   ' onClick={() => handleButtonClick('1')}>1</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold   ' onClick={() => handleButtonClick('2')}>2</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold   ' onClick={() => handleButtonClick('3')}>3</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold   ' onClick={() => handleButtonClick('+')}>+</button>
        
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold  ' onClick={() => handleButtonClick('.')}>.</button>
        
                            </Col>
                            <Col>
                                <button className='btn border-black w-100 mt-2 fw-bold   ' onClick={() => handleButtonClick('0')}>0</button>
        
                            </Col>
                            <Col className=''>
                            <button  className='btn border-black w-100 mt-2 fw-bolder  '  onClick={handleCalculate}>=</button>
        
                            </Col>
                        </Row>
                      
               </div>
                
               
                
            </div>
          
            
          
    );
}
export default Calculator;
