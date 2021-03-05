import React from 'react'
import s from './Header.module.css';
import Button from '@material-ui/core/Button';


const Header = ({setCurrentType,currentType,setCurrentRule,currentRule,setOpen}) => {

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
                    <Button variant={currentRule === 2 ? "contained" : "outlined"}  style={currentRule === 2 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(2)}}>Лицензирование</Button>
                    <Button variant={currentRule === 3 ? "contained" : "outlined"} style={currentRule === 3 ? {fontWeight:600} : {fontWeight:400}}  onClick={()=>{handleClickRule(3)}}>Обмен информацией</Button>
                    <Button variant={currentRule === 4 ? "contained" : "outlined"} style={currentRule === 4 ? {fontWeight:600} : {fontWeight:400}}  onClick={()=>{handleClickRule(4)}}>Уголовная ответственность</Button>
                    <Button variant={currentRule === 5 ? "contained" : "outlined"} style={currentRule === 5 ? {fontWeight:600} : {fontWeight:400}} onClick={()=>{handleClickRule(5)}}>Гражданский кодекс РФ</Button>

                    </>
                }
           
            </div>
        </div>
    )
}

export default Header