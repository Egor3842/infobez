import React from 'react'
import cl from './ForGoToJob.module.css'

const AnotherJob = () => {
    return (
        <div className={cl.container}>
        <div className={cl.header}>
          <div style={{marginRight:'170px'}}>КОМУ: </div>
        Генеральному директору <br/>
        ООО IT-Технологии<br/>
        Алексенко Е.В.<br/>
        ОТ КОГО: <input/> <br/> <input/>
        </div>
        <div className={cl.content}>
            <div className={cl.title}>ЗАЯВЛЕНИЕ.</div>
            <div style={{marginTop:'50px'}}>Прошу перевести меня в отдел Разработка на должность старшего разработчика с <input/> 2021г.</div>
            <div>С условиями работы ознакомлен с ними согласен.</div>
        </div>
        <div className={cl.footer}>
            <input/> / <input/> <br/><br/>
            <input/> 2020г

        </div>
    </div>
    )
}

export default AnotherJob