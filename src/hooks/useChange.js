import { useState } from "react";

const useChange = () => {

    const inicialData = {
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: ""
    };
        
  const [formValues, setFormValues] = useState(inicialData);

  const handleChange = (formRef) => {
    const formData = new FormData(formRef.current);
    const data = {
      firstName: formData?.get("first-name"),
      lastName: formData?.get("last-name"),
      company: formData.get("company"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setFormValues(data);
  };

  return {
    handleChange,
    formValues,
    setFormValues,
    inicialData
  };
};

export default useChange;
