import React from 'react'
import s from './Header.module.css';
import Button from '@material-ui/core/Button';


const Header = ({setCurrentType,currentType,setCurrentRule,currentRule,setOpen,currentLaba, setCurrentLaba,setCurrentDocs, currentDocs}) => {

    const handleClickLaba = (id) => {
        setOpen(-1);
        setCurrentLaba(id)
    }

    const handleClick = (id) => {
        setCurrentType(id)
        setCurrentRule(0)
        setOpen(-1)
    }
    const handleClickRule = (id) => {
        setOpen(-1);
        setCurrentRule(id)
    }


    return (
        <div className={s.container}>
            <div style={{display:'flex', justifyContent:'space-evenly', padding:'100px'}}>
             <Button variant={currentLaba === 0 ? "contained" : "outlined"} style={currentLaba === 0 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickLaba(0)}}>Правовые аспекты(лабораторная 2)</Button>
            <Button variant={currentLaba === 1 ? "contained" : "outlined"} style={currentLaba === 1 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickLaba(1)}} >Основные документы(лабораторная 4)</Button>
            </div>
            {currentLaba === 0 ? 
            <>
            <div className={s.title}>Основные правовые аспекты в области информационной безопасности</div>
            <div  className={s.btns}>
            <Button variant={currentType === 0 ? "contained" : "outlined"} style={currentType === 0 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClick(0)}}>Физическое лицо</Button>
            <Button variant={currentType === 1 ? "contained" : "outlined"} style={currentType === 1 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClick(1)}} >Юридическое лицо</Button>
            </div>
            <div  className={currentType ? s.btnsBig :s.btnsSec }>
                {
                    currentType === 0 ?
                    <>
                    <Button variant={currentRule === 0 ? "contained" : "outlined"} style={currentRule === 0 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(0)}}>Конституция</Button>
                    <Button variant={currentRule === 1 ? "contained" : "outlined"} style={currentRule === 1 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(1)}}>Уголовный кодекс РФ</Button>
                    <Button variant={currentRule === 2 ? "contained" : "outlined"} style={currentRule === 2 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(2)}}>Гражданский кодекс РФ</Button>
                    <Button variant={currentRule === 3 ? "contained" : "outlined"} style={currentRule === 3 ? {fontWeight:600} : {fontWeight:400}}onClick={()=>{handleClickRule(3)}}>Законы РФ</Button>
                    </>
                    :
                    <>
                    <Button variant={currentRule === 0 ? "contained" : "outlined"} style={currentRule === 0 ? {fontWeight:600} : {fontWeight:400}}  onClick={()=>{handleClickRule(0)}}>Государственная тайна</Button>
                    <Button variant={currentRule === 1 ? "contained" : "outlined"} style={currentRule === 1 ? {fontWeight:600} : {fontWeight:400}}  onClick={()=>{handleClickRule(1)}}>Защита информации</Button>
                    <Button variant={currentRule === 2 ? "contained" : "outlined"} style={currentRule === 2 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(2)}}>Лицензирование</Button>
                    <Button variant={currentRule === 3 ? "contained" : "outlined"} style={currentRule === 3 ? {fontWeight:600} : {fontWeight:400}}  onClick={()=>{handleClickRule(3)}}>Обмен информацией</Button>
                    <Button variant={currentRule === 4 ? "contained" : "outlined"} style={currentRule === 4 ? {fontWeight:600} : {fontWeight:400}}  onClick={()=>{handleClickRule(4)}}>Уголовная ответственность</Button>
                    <Button variant={currentRule === 5 ? "contained" : "outlined"} style={currentRule === 5 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(5)}}>Гражданский кодекс РФ</Button>

                    </>
                }
           
            </div>
            </>
                  : <div>
                        <Button variant={currentDocs === 0 ? "contained" : "outlined"} style={currentDocs === 0 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{setCurrentDocs(0)}}>Заявление о приеме на работу</Button>
                        <Button variant={currentDocs === 1 ? "contained" : "outlined"} style={currentDocs === 1 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{setCurrentDocs(1)}}>Заявление на уволнение</Button>
                        <Button variant={currentDocs === 2 ? "contained" : "outlined"} style={currentDocs === 2 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{setCurrentDocs(2)}}>Приказ на уволнение</Button>
                        <Button variant={currentDocs === 3 ? "contained" : "outlined"} style={currentDocs === 3 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{setCurrentDocs(3)}}>Заявление на отпуск</Button>
                        <Button variant={currentDocs === 4 ? "contained" : "outlined"} style={currentDocs === 4 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{setCurrentDocs(4)}}>Заявление о переводе на другую работу</Button>
                  </div>  }
        </div>
    )
}

export default Header