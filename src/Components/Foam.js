import React, { useState } from 'react';
import axios from 'axios';
import FoamHeader from './Foam-header';

function InputForm() {
    const [formData, setFormData] = useState({

    });

    const handleSubmit = e => {
        e.preventDefault();
            axios.post('http://127.0.0.1:8000/api/Foam', formData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>

        <div style={{padding : '20px'}}>
            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Nombor Rujukan Utiliti </label>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="text" id="ref_num" name="ref_num" value={formData.ref_num}
                        onChange={handleChange} />
                </div>
            </div>

            

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Jenis Permohonan </label>
                </div>
                <div className='col-md-4'>
                    <label className='control-label'>KURANG DARI 200 METER</label>
                </div>
            </div>


            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Nama Division</label>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="text" id="application_type" name="application_type"
                        value={formData.application_type} onChange={handleChange} />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Nama Division </label>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="text" id="digout_area" name="digout_area"
                        value={formData.digout_area} onChange={handleChange} />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Nama Pemohon</label>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="text" id="name_of_applicant" name="name_of_applicant"
                        value={formData.name_of_applicant} onChange={handleChange} />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Nama Syarikat </label>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="text" id="company_name" name="company_name"
                        value={formData.company_name} onChange={handleChange} />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> No Telefon </label>
                </div>
                <div className='col-md-4'>
                    <input className='form-control' type="number" id="telephone_no" name="telephone_no"
                        value={formData.telephone_no} onChange={handleChange} />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Alamat Pemohon </label>
                </div>
                <div className='col-md-7'>
                    <input className='form-control' style={{marginBottom:'15px'}} type="text" id="address" name="address" value={formData.address}
                        onChange={handleChange} />
                        <input className='form-control'  style={{marginBottom:'15px'}} type="text" id="address" name="addreess" value={formData.addrsess}
                        onChange={handleChange} />
                        <div className='row'> 
                        <div className='col-md-3'>
                        <input className='form-control'   style={{marginBottom:'15px'}} type="text" id="address" name="adderess" value={formData.addsress}
                        onChange={handleChange} />
                        </div>
                        <div className='col-md-3'>
                        <input className='form-control' type="text" id="address" name="addreess" value={formData.addsress}
                        onChange={handleChange} />
                        </div>
                        <div className='col-md-3'>
                        <input className='form-control' type="text" id="address" name="addreess" value={formData.addsress}
                        onChange={handleChange} />
                        </div>
                        </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Parlimen* </label>
                </div>
                <div className='col-md-8'>
                    <input className='foam-control' type="text" style={{display:'none'}} id="parlimen" name="parlimen" value={formData.parlimen}
                        onChange={handleChange} />


                        <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Bukit Bintang</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Bandar Tun Razak</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Setiawangsa</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Wangsa Maju</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Seputeh</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Titiwangsa</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Batu</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Segambut</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Lembah Pantai</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Cheras</span><br/>

                      <input
                        type="checkbox"
                        name="checkbox1"
                        id="checkbox1"
                      /><span> Kepong</span><br/>


                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <label className='control-label'> Senarai Jalan Yang Terlibat </label>
                </div>
                <div className='col-md-4'>

               
                    <textarea className='form-control'  style={{marginTop:'15px',backgroundColor:'#F2F2F2'}} rows="5" type="text"  id="road_involved" name="road_involved"
                        value={formData.road_involved} onChange={handleChange} />
                </div>
            </div>


            <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default InputForm;
