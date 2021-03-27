import React, { useState } from 'react';

function Form() {
  const [inputs, setInputs] = useState({
    fName: '',
    lName: '',
    gender: 'male',
    address: '',
    age: '',
    maritalStatus: 'single',
    childrenCount: '',
    termsCondition: false,
  });
  const [fNameError, SetFNameError] = useState(false);
  const [lNameError, SetLNameError] = useState(false);
  const [addressError, SetAddressError] = useState(false);
  const [ageError, SetAgeError] = useState(false);

  const { fName, lName, gender, address, age, maritalStatus, childrenCount, termsCondition, } = inputs;

  function handleFormData(e) {
    let { name, value } = e.target;
      switch (name) {
        case 'fName':
            var result = new RegExp(/^[A-Za-z]+$/).test(value);
            if (!result) {
                value = value.replace(value.charAt(value.length - 1), '');
            }
            setInputs((inputs) => ({ ...inputs, [name]: value }));
            if(value.length > 0 ){
                SetFNameError(false)
            }else{
                SetFNameError(true)
            }
            break;
        case 'lName':
            setInputs((inputs) => ({ ...inputs, [name]: value }));
            var lnameResult = new RegExp(/^[A-Za-z]+$/).test(value);
            if (!lnameResult) {
            value = value.replace(value.charAt(value.length - 1), '');
            }
            if(value.length > 0 ){
                SetLNameError(false)
            }else{
                SetLNameError(true)
            }
            break;
        case 'address':
            setInputs((inputs) => ({ ...inputs, [name]: value }));
            if(value.length > 0 ){
                SetAddressError(false)
            }else{
                SetAddressError(true)
            }
            break;
        case 'age':
            setInputs((inputs) => ({ ...inputs, [name]: value }));
            if(Number(value) > 15 ){
                SetAgeError(false)
            }else{
                SetAgeError(true)
            }
            break;
        case 'termsCondition':
        setInputs((inputs) => ({ ...inputs, "termsCondition": !termsCondition }));
        break;
        default:
            setInputs((inputs) => ({ ...inputs, [name]: value }));
      }
  }

  function HandleOnSubmit(){
    if(inputs.fName ===''){
        SetFNameError(true)
        return;
    }
    if(inputs.lName === ''){
        SetLNameError(true)
        return;
    }
    if(inputs.address === ''){
        SetAddressError(true)
        return;
    }
    if(inputs.age < 15 ){
        SetAgeError(true)
        return;
    }
    if(termsCondition === false){
        alert('Agree our Terms & Conditions before submit')
        return;
    }
    const parsedDetails = JSON.stringify(inputs);
    alert(parsedDetails);
    setInputs({
        fName: '',
        lName: '',
        gender: 'male',
        address: '',
        age: '',
        maritalStatus: 'single',
        childrenCount: '',
        termsCondition: false,
    });
  }
  
  return (
    <div className="container col-lg-8">
        <h2>Application form</h2>
        <hr></hr>
        <form>
            <div className="d-flex">
                <div className="form-group pl-0 col-lg-6">
                    <span className="text-danger">* </span><label htmlFor="fName">First Name:</label>
                    {fNameError && <div className="pb-1 text-danger">First name required</div>}
                    <input type="text" className="form-control" id="fName" placeholder="Enter first name" name="fName" value={fName} onChange={handleFormData} required/>
                </div>
                <div className="form-group col-lg-5">
                    <span className="text-danger">* </span><label htmlFor="lName">Last Name:</label>
                    {lNameError && <div className="pb-1 text-danger">Last name required</div>}
                    <input type="text" className="form-control" id="lName" placeholder="Enter last name" name="lName" value={lName} onChange={handleFormData} required/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <div className='d-flex'>
                    <div className="form-check mr-4">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="gender" value="male" checked={gender === 'male'} onChange={handleFormData}/>Male
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="gender" value="female" checked={gender === 'female'} onChange={handleFormData}/>Female
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <span className="text-danger">* </span>
                <label htmlFor="address">Address:</label>
                {addressError && <div className="pb-1 text-danger">Address required</div>}
                <textarea className="form-control" rows="2" id="address" name="address" value={address} placeholder="Enter full address" onChange={handleFormData} required></textarea>
            </div>
            <div className="form-group">
                <span className="text-danger">* </span>
                <label htmlFor="age">Age:</label>
                {ageError && <div className="pb-1 text-danger">Age must be above 15</div>}
                <input type="number" className="form-control" id="age" placeholder="Enter age" name="age" value={age} onChange={handleFormData} required/>
            </div>
            <div className="form-group">
                <label htmlFor="materialStatus">Marital status:</label>
                <div className='d-flex'>
                    <div className="form-check mr-4">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="maritalStatus" value="single" checked={maritalStatus === 'single'} onChange={handleFormData}/>Single
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="maritalStatus" value="married" checked={maritalStatus === 'married'} onChange={handleFormData}/>Married
                        </label>
                    </div>
                </div>
            </div>
            {maritalStatus === 'married' && <div className="form-group">
                <label htmlFor="children">Children :</label>
                <input type="number" className="form-control" id="children" name="children" value={childrenCount} placeholder="Enter how many children" name="children" onChange={handleFormData}/>
            </div>
            }
            <div className="form-group form-check">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="termsCondition" checked={termsCondition} onChange={handleFormData}/> I Agree Terms & Conditions
                </label>
            </div>
        </form>
        <button className="btn btn-primary" onClick={HandleOnSubmit}>Submit</button>
  </div>
   );
}

export default Form;

