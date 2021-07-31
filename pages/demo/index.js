import React,{useState} from 'react';
import Modal from '../../components/modal'
import { useDispatch, useSelector } from 'react-redux'
export default function Test(){
    const [openModal,setOpenModal]=useState(false);
    const onHandleClick=()=>{
        setOpenModal(true);
    }
    const status=useSelector(state => state.status);
    const sort=useSelector(state => state.sort);
    const dispatch=useDispatch();
    const onClickOk=()=>{
        console.log('Ok');
        setOpenModal(false);
    }
    const onClickCancel=()=>{
        console.log('Cancel');
        setOpenModal(false);
    }
    const onToggleStatus=(status)=>{
        console.log('action-status',status);
        dispatch({
                    type:'TOGGLE_STATUS',
                    status:status?false:true
                })
    }
    const onSort=(sort)=>{
        console.log('action-sort',sort);
        dispatch({
                    type:'SORT',
                    sort:-sort
                })
    }
    console.log('status',status);
    console.log('sort',sort);
    return (
        
            <div className="container">
                <Modal
                isVisible={openModal}
                onOk={onClickOk}
                onCancel={onClickCancel}
                title={'Thông báo'}
                isRenderHeader={true}
                isRenderFooter={true}
                >
                    Xin chào các cậu
                </Modal>
                <button onClick={onHandleClick}>Open modal</button>
                <button onClick={()=>onToggleStatus(status)}>Change status</button>
                <button onClick={()=>onSort(sort)}>sort</button>
            </div>
        )
        
}