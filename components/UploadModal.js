import React from 'react';
import {modalState} from "../atom/moduleAtom";
import {useRecoilState} from "recoil";

function UploadModal(props) {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>
            <h1>Upload Modal</h1>
            {open && (
                <h1>the modal is open</h1>
            )}
        </div>
    );
}

export default UploadModal;