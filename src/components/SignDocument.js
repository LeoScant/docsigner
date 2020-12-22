import React, { useState, useEffect } from 'react';
import './Stylesheet.css';
import TitleHeader from './TitleHeader';
import Draggable from 'react-draggable';

function SignDocument(props) {
    const [text, setText] = useState();

    useEffect(() => {
        showFile();
    }, [props.location.selectedFile]);

    const showFile = () => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setText(e.target.result);
            console.log(text);
        };
        if (props.location.selectedFile) reader.readAsText(props.location.selectedFile)
    }

    return (
        <div className="document">
            <TitleHeader />
            <div className="textForm">
                <div className="labels">
                    <h2>Campi</h2>
                    {props.location.formData && (
                        Object.entries(props.location.formData).map(([name, value]) => (
                            <div className="listElement">
                                <p key={name}><strong>{name}</strong>:</p>
                                <Draggable bounds>
                                    <div className="dragLabel">
                                        {value.toString()}
                                    </div>
                                </Draggable>
                            </div>
                        ))
                    )}

                </div>
                <div className="textFile">
                    {text && (
                        text.split("\n").map((item, key) => {
                            return <span key={key}>{item}<br /></span>;
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default SignDocument;