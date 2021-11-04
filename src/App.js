import React from 'react'
import {useState,useRef,useEffect} from 'react'
import './App.css'

let b = '';
let dotPresent = false;

export default function App() {
    
    const[result,setResult] = useState('0')
    const [themeOne,setThemeOne] = useState(true);
    const [themeTwo,setThemeTwo] = useState(false);
    const [themeThree,setThemeThree] = useState(false);
    // const Element = useRef('0')
    
    

    const handleClick = e => {
        

            if(e.target.name === '.' && !dotPresent){dotPresent = true}
            else if(e.target.name === '.' && dotPresent){       
                return;}
        
        b+=e.target.name
        // console.log(b)
        setResult(b) 
    }
    // useEffect(() => window.addEventListener('click', e => {if(e.target.name === '+'){Element.current = result}}),[result])
    
    
    const handleOperations = (e) => {
        dotPresent = false
        b+=e.target.name
        // console.log(b)
        setResult(b) ;
    }
    const clear = () => {
        setResult('0')

        b = ''
        dotPresent=false
        Element.current = '0'  }

    const del = () => {
        b = ''
        dotPresent=false
        setResult(result.slice(0,-1))}

    const calc = () => {
        b = '' 
        dotPresent=false
        try{
            setResult(eval(result).toString())
        }catch(err)
        {
            setResult('error')
        }
    }

     
    function ThemeOne(){
        
        setThemeOne(true);
        setThemeTwo(false)
        setThemeThree(false);
    }

    function ThemeTwo(){
        setThemeOne(false);
        setThemeTwo(true)
        setThemeThree(false);
    }

    function ThemeThree(){
        setThemeOne(false);
        setThemeTwo(false)
        setThemeThree(true);
    }

    // const changeButton = () => {
    //     if(themeOne){
    //         return 'buttons'
    //     }
    //     if(themeTwo){
    //         return 'buttons themetwo'
    //     }
    //     if(themeThree){
    //         return 'buttons themethree'
    //     }
    // }
    
    const changeDifferent = () => 
    {    
        if(themeOne){
            return 'different-color different-color:hover'
        }
        else if(themeTwo){
            return 'different-color themetwo different-color:hover themetwo'
        }
        else if(themeThree){
            return 'different-color different-color:hover themethree'
        }
        else{
            return 'different-color different-color:hover'
        }
    
    }

    const changeContainer = () => 
    {
        if(themeOne){
            return 'container'
        }
        else if(themeTwo){
            return 'container themetwo'
        }
        else if(themeThree){
            return 'container themethree'
        }
        else{
            return 'container'
        }
    }
    

    const changeMain = () => 
    {
        if(themeOne){
            return 'main'
        }
        if(themeTwo){
            return 'main themetwo'
        }
        if(themeThree){
            return 'main themethree'
        }
    }

    const changeRed = () => 
    {   
        if(themeOne){
            return 'equal equal:hover'
        }
        else if(themeTwo){
            return 'equal themetwo equal:hover themetwo'
        }
        else if(themeThree){
            return 'equal themethree equal:hover themethree'
        }
        else{
            return 'equal equal:hover'
        }
        
    }

    const changeToggle = () => 
    {
        if(themeOne){
            return 'toggle'
        }
        else if(themeTwo){
            return 'toggle themetwo'
        }
        else if(themeThree){
            return 'toggle themethree'
        }
        else{
            return 'toggle'
        }
    }

    const changeKeys = () => 
    {
        if(themeOne){
            return 'keys'
        }
        else if(themeTwo){
            return 'keys themetwo'
        }
        else if(themeThree){
            return 'keys themethree'
        }
        else{
            return 'keys'
        }
    }
     
    return (
        <div className={changeContainer()} >
          <div  className='heading' >
            <h1>calc</h1>
            <div className='lab'>

            <span style={{marginTop:'40px'}} >THEME</span>
            <div className='numtog'>
                <div className='number' style={{marginBottom:'15px'}}><p>&nbsp; 1 &nbsp; 2 &nbsp; 3 </p></div>
              <div className={changeToggle()} >
                 <input  className='switch-1' name='toggle' type='radio' value='1' id= 'switch-1'/>
                 <label data-theme='dark-blue' for='switch-1' id='label-1' onClick={ThemeOne} >&nbsp;</label>

                 <input  className='switch-2' name='toggle' type='radio' value='2' id='switch-2'/>
                 <label data-theme='light' for='switch-2' id='label-2' onClick={ThemeTwo}  >&nbsp;</label>

                 <input className='switch-3' name='toggle' type='radio' value='3' id='switch-3'/>
                 <label data-theme='purple' for='switch-3' id='label-3' onClick={ThemeThree}  >&nbsp;</label>
                 <div className='selector'>&nbsp;</div>
              </div>
            </div> 
              
                 </div>
              
              </div>
            
          
            <div className={changeMain()}>
                 {/* <div className='top-display'  style={{textAlign:'right'}}>{Element.current}</div> */}
                <div className='main-display' style={{textAlign:'right',marginTop:'30px',fontSize:'18px'}}>{result}</div>
                {/* <div className='temp-result' style={{bottom:'0', position:'absolute'}}>{result}</div> */}
            </div>
            <div className={changeKeys()} >
            <div className='parent'>
                <button name='7'   onClick={handleClick}>7</button>
                <button name='8'   onClick={handleClick}>8</button>
                <button name='9'   onClick={handleClick}>9</button>
                <button id='delete' className={changeDifferent()}  onClick={del}>Del</button>
            </div>
            <div className='parent'>
                <button name='4'   onClick={handleClick}>4</button>
                <button name='5'   onClick={handleClick}>5</button>
                <button name='6'   onClick={handleClick}>6</button>
                <button name='+'   onClick={handleOperations}>+</button>
            </div>
            <div className='parent'>
                <button name='1'   onClick={handleClick}>1</button>
                <button name='2'   onClick={handleClick}>2</button>
                <button name='3'   onClick={handleClick}>3</button>
                <button name='-'   onClick={handleOperations}>-</button>
            </div>
            <div className='parent'>
                <button name='.'   onClick={handleClick}>.</button>
                <button name='0'   onClick={handleClick}>0</button>
                <button name='/'   onClick={handleOperations}>/</button>
                <button name='*'   onClick={handleOperations}>x</button>
            </div>
            <div className='parent-1'>
                <button name='' id='clear' className={changeDifferent()} onClick={clear}>Reset</button>
                <button name='=' className={changeRed()}  onClick={calc}>=</button>
            </div> 
            </div>
        </div>
    )
}
