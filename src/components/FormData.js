import React, { useReducer } from 'react';
import './Stylesheet.css'
import TitleHeader from './TitleHeader';
import { Link } from "react-router-dom";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function FormData(props) {
    const [formData, setFormData] = useReducer(formReducer, {});
    const selectedFile = props.location.selectedFile;

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <div className="page">
            <TitleHeader />

            <form className="dataForm">
                <h3>Inserisci i tuoi dati</h3>

                <div className="formEntry">
                    <label className="formLabel">Nome: </label>
                    <input type="text" className="formInput" name="Nome" onChange={handleChange} />
                </div>

                <div className="formEntry">
                    <label className="formLabel">Cognome: </label>
                    <input type="text" className="formInput" name="Cognome" onChange={handleChange} />
                </div>

                <div className="formEntry">
                    <label className="formLabel">Data di Nascita: </label>
                    <input type="date" className="formInput" name="Data di Nascita" onChange={handleChange} />
                </div>

                <Link to={{ pathname: "/SignDocument", selectedFile, formData }}>
                    <input type="submit" value="PROSEGUI" disabled={!(formData.Nome && formData.Cognome && formData['Data di Nascita'])} />
                </Link>
            </form>
        </div>
    )
}

export default FormData;