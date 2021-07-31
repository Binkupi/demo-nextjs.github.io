import React,{useEffect} from 'react';
type ModalProps={
    isVisible?:boolean;
    onOk?:()=>void;
    onCancel?:()=>void;
    title?:string;
    isRenderHeader?:boolean;
    isRenderFooter?:boolean;
}

const Modal:React.FC<ModalProps>=({
    isVisible,
    onOk,
    onCancel,
    children,
    title,
    isRenderHeader,
    isRenderFooter
    })=>{

    useEffect(()=>{
        if(isVisible){
            document.querySelector('body').classList.add('tcl-modal__open');
        }else{
            document.querySelector('body').classList.remove('tcl-modal__open');
        }
    },[isVisible])

    return (
        <div className={`tcl-modal__wrapper ${isVisible&&' show'}`}>
            <div className="tcl-mask" ></div>
            <div className="tcl-dialog ">
                <div className="tcl-modal__content">
                    {    
                        isRenderHeader&&
                        <div className="tcl-modal__header">
                                {title}
                                <button 
                                    className="tcl-modal__close" onClick={onCancel}>X</button>

                        </div>
                    }
                    <div className="tcl-modal__body">
                       {children} 
                    </div>
                    {
                        isRenderFooter&&
                        <div className="tcl-modal__footer">
                            <button className="tcl-modal__cancel" onClick={onCancel}>Cancel</button>
                            <button className="tcl-modal__ok"  onClick={onOk}>Ok</button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default Modal;