import React from 'react'
import cl from './ForGoToJob.module.css'


const ForGoToJob = () => {
    return(
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
                <div style={{marginTop:'50px'}}>Прошу принять меня на постоянную работу в качестве старшего разработчика
с <input/> по <input/> 2021 г. с испытательным сроком <input/> месяца и окладом <input/> рублей.</div>
            </div>
            <div className={cl.footer}>
                <input/> / <input/> <br/><br/>
                <input/> 2020г

            </div>
        </div>
    )
}

export default ForGoToJob