import React from 'react';
import {modalState} from "../atom/moduleAtom";
import {useRecoilState} from "recoil";
import Modal from 'react-modal';

function UploadModal(props) {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>
            {open && (
                <Modal
                    className={"absolute max-w-lg w-[90%] h-[300px] top-56 left-[50%] translate-x-[-50%] bg-white border-2"}
                    isOpen={open}
                    onRequestClose={()=>setOpen(false)}
                >
                    <div className={"flex flex-col justify-center items-center w-full h-full"}>
                        <h1>Modal</h1>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default UploadModal;