import React from 'react'
import cl from './ForGoToJob.module.css'

const ApplicationForFire = () => {
    return(
        <div className={cl.container}>
            <div style={{fontSize:'14px', textAlign:'right'}}>
            Унифицированная форма № Т-8 <br/>
Утверждена Постановлением Госкомстата России от 05.01.04 № 1
            </div>
            <div className={cl.form}>
                <div style={{ width:'70%'}}><div style={{borderBottom:'1px solid black'}}>ООО IT-Технологии</div></div>
                <div>
                    <table>
                        <tr>
                            <td></td>
                            <td>Код</td>
                        </tr>
                        <tr>
                            <td>Форма по ОКУД</td>
                            <td>03010006</td>
                        </tr>
                        <tr>
                            <td>по ОКПО</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div style={{marginTop:'100px', display:'flex', justifyContent:'center'}}>
                <div style={{fontWeight:700, fontSize:'20px'}}>Приказ   </div>
                    <table>
                    <tr>
                        <td>Номер документа</td>
                        <td>Дата составления</td>
                        </tr>
                        <tr>
                        <td style={{height:'30px'}}></td>
                        <td style={{height:'30px'}}></td>
                        </tr>
                    </table></div>
                    <div style={{fontWeight:700, fontSize:'20px', marginTop:'20px'}}>о прекращении (расторжении) трудового договора с работником (увольнении)</div>
            <div style={{fontWeight:700, fontSize:'20px', marginTop:'20px'}}>Прекратить действие трудового договора от <input/> 2021г. № <input/> ,<br/>

уволить <input/> 2021г.</div>
        <div style={{marginTop:'30px', textAlign:'left'}}>
            <span>Фамилия, имя, отчество</span><input style={{width:'70%'}}/> <br/>
            <span>Структурное подразделение</span><input style={{width:'70%'}}/> <br/>
            <span>Должность (специальность, профессия), разряд, класс (категория) квалификации</span><input/> <br/>
            <input style={{width:'100%'}}/> <br/>
            <span>Основание прекращения (расторжения) трудового договора (увольнения)</span><input/> <br/>
            <input style={{width:'100%'}}/><br/>
        </div>
        <div style={{marginTop:'30px', textAlign:'left'}}>
            <span  style={{fontWeight:700, fontSize:'20px'}}>Руководитель организации</span> <span style={{borderBottom:'1px solid black', textAlign:'center', marginLeft:'30px'}}>Генеральный директор</span><input placeholder={'Подпись'} style={{marginLeft:'30px'}}/> <br/>
            <span style={{fontWeight:700, fontSize:'20px'}}>С приказом (распоряжением) работник ознакомлен</span> <input placeholder={'Подпись'}/> <input placeholder={'Дата'}/> 2021г
        </div>
        </div>
    )
}

export default ApplicationForFire