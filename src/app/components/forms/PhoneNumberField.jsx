"use client";

import PhoneInput from 'react-phone-number-input';
import { useState, useEffect } from "react";

export const PhoneNumberField = ({setPhone}) => {
  const [value, setValue] = useState('');

  useEffect(()=>{
    setPhone(value);
  },[value]);

  return (
    <div className="phoneNumberField">
      <label>Numéro de téléphone :</label>
      <PhoneInput
        defaultCountry="FR"
        placeholder="Entrez votre numéro"
        value={value}
        onChange={setValue}
        international
      />
      <p>Valeur actuelle : {value}</p>
    </div>
  );
};

