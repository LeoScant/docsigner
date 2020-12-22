import React, { useState } from 'react';
import './Stylesheet.css';
import TitleHeader from './TitleHeader'
import { Link } from "react-router-dom";

function UploadFile() {
    const [selectedFile, setSelectedFile] = useState();

    const onChangeHandler = event => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }


    return (
        <div>
            <TitleHeader />
            <div className="form-group files">
                <input type="file" name="file" accept=".txt" onChange={onChangeHandler} />
                <Link to={{ pathname: selectedFile ? "/FormData" : '#', selectedFile }}>
                    <button disabled={!selectedFile}>PROSEGUI</button>
                </Link>
            </div>
        </div>
    )

}

export default UploadFile;