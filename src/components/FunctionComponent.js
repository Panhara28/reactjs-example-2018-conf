import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { LocaleContext, DefaultThemeContext } from '../lib/context';

export function FunctionComponent(props){ 
  const name = useFormInput('Mary')
  const surname = useFormInput('Oudom')
  const defaultTheme = useContext(DefaultThemeContext);
  const locale = useContext(LocaleContext);
  const width = useWindowWidth();

  useDocumentTitle(name.value, surname.value)

  
  return(
    <section className={defaultTheme}>
      <h1>Function Component</h1>
      <Row label="Name">
        <input {...name}/>
      </Row>
      <Row label="Surname">
        <input {...surname}/>
      </Row>
      <Row label="Language">
        <span className="language">
          {
            locale
          }
        </span>

      </Row>
      <Row label="Width">
          {
            width
          }
      </Row>
    </section>
  )
}

function useFormInput(initialValue){
  const [value, setValue] = useState(initialValue)
  function handleChange(e){
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(name, surname){
  useEffect(() => {
    document.title = name + ' ' + surname
  })
}

//Custome Hook by convention custom hook is start with use
function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    //useEffect Optionaly Return a function
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}