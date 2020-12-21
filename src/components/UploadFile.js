import React,{ useState } from 'react';
import './Stylesheet.css';
import TitleHeader from './TitleHeader'
import {Link} from "react-router-dom";

function UploadFile() {
    const[selectedFile,setSelectedFile] = useState();

    const onChangeHandler=event => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const printFile = () => {
        console.log("File");
        console.log(selectedFile);
    }
    return (
        <div>
            <TitleHeader />
            <div class="form-group files">
                <input type="file" name="file" accept=".txt" onChange={onChangeHandler}/>
                <Link to={{pathname: "/FormData", selectedFile}}><button onClick= {printFile}>PROSEGUI</button></Link>
            </div>
        </div>
    )

}

export default UploadFile;