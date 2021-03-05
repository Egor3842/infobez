import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import s from './Content.module.css'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ReactMarkdown from 'react-markdown'

import { data } from '../data'



const Content = ({ currentRule, currentType,setOpen, open }) => {
   
    const currentLayor = data.find((elem) => elem.id === currentType);
    const currentForRender = currentLayor.info.find(elem => elem.id === currentRule)

    const handleClick = (id) => {
        if (open === id){
            setOpen(-1)
        }
        else {
            setOpen(id)
        }
    }
    return (
        <div className={s.container}>
            <div className={s.title}>Основные законы и статьи</div>
            {currentForRender.data.map((elem) => {
                return (
                    <List>
                        <ListItem button onClick={() => handleClick(elem.id)}>
                            <ListItemText primary={<div className={elem.id===open && s.bold}>{elem.title}</div>} />
                            {open === elem.id ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open === elem.id} timeout="auto" unmountOnExit>
                            <List className={s.list} disablePadding>
                                <ListItem>
                                    <ListItemText primary={<>
                                    <div className={s.decsription}><ReactMarkdown >{elem.decsription}</ReactMarkdown></div>
                                    {elem.url && <div style={{marginTop:'10px', fontSize:'16px'}}>Полная информация по данному закону <a target="_blank" rel="noopener noreferrer" href={elem.url}> тут</a></div>}
                                    </>} />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                )
            })}
        </div>
    )
}

export default Content