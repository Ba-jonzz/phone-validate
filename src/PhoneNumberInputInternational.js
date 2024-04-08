import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleOnChange = (value, country) => {
    setPhone(value);  
    try {
      const phoneNumber = parsePhoneNumberFromString(value, country?.countryCode.toUpperCase());
      if (phoneNumber) {
        setIsValid(phoneNumber.isValid());
      } else {
        setIsValid(false);
      }
    } catch (error) {
      setIsValid(false);
    }
  };
  
  return (
    <div>
      <PhoneInput
        country="fr"
        value={phone}
        isValid={isValid}
        onChange={handleOnChange}
        inputStyle={{ width: '100%' }}
        dropdownStyle={{
         alignItems:"baseline",
         display: "flex",
         alignSelf: "self-end",
         flexDirection: "column"
        }}  
        
      />
      {!isValid && <p style={{ color: 'red' }}>Invalid phone number</p>}
    </div>
  );
};

export default PhoneInputComponent;
