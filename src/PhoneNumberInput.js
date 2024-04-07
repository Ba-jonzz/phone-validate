import React, { useState } from 'react';

import PhoneInput from 'react-phone-number-input';

function PhoneNumberInput() {
  const [value, setValue] = useState(); // `value` will be the parsed phone number in E.164 format

  return (
<>
<PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      
    />
    <button onClick={(e)=>{
       console.log("value",value);
    }}>Click</button></>
  );
}

export default PhoneNumberInput;
