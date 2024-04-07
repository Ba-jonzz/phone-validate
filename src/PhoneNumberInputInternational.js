import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const App = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>

      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        forceDialCode
        
      />
      <button onClick={()=>{
        const regix = /^\d{9}$/
          console.log("phone",phone,);
      }}>
        click
      </button>
    </div>
  );
};
export default App