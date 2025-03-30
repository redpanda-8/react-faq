import { useCallback, useState } from "react";
import { Button } from "../../../form/Button";
import { Input } from "../../../form/Input";
import { Textarea } from "../../../form/Textarea";
import { collection, addDoc } from "firebase/firestore";
import { db } from './../../../../../../firebase';
import { handleInputChange } from "../../../../functions/formHandlers";
import { validateFormData } from "../../../../functions/formValidation";
import { Select } from "../../../form/Select";

export const FaqForm = () => {

    const defaultFormData = {
        name: '', 
        email: '',
        message: '',
        country: [],
    }

    // formos duomenu valdymas naudojant react state
    const [formData, setFormData] = useState(defaultFormData)
    const [formErrors, setFormErrors] = useState({})
    
    
    // useCallback is a React Hook that lets you cache a function definition between re-renders.
    // [setFormData] - depth kuris nusako kad pokyciai turetu buti limituoti tik siame objekte, t.y.
    // taip isvengiant infinite loop ir errors
    const handleChange = useCallback((event) => handleInputChange(event, setFormData), [setFormData])

    const sendFormData = async (e) => {
      // event.preventDefault(); - neleidzia ivykti html'o standartiniam veiksmui, tam kad galetu
      // paleisti savo koda, siuo atveju forma nebus submit'inta per html'a bet bus submit'inama per
      // react zemiau esancia func 
      e.preventDefault();  

      const errors = validateFormData(formData);
      setFormErrors(errors);

      // Stop if there are any validation errors
      // length patikrina objekto vaiku kieki, siuo atveju tikrinam ar obj yra tuscias kad suzinotume ar yra klaidu ar ne
      if (Object.keys(errors).length > 0) {
        return;
      }

      // try - bandysim veiksmus ir po kol viduje esantys veiksmai nebus is'resolvinti - nepabaigsim func
      try {
          // naudodami firestore config jungiames prie db ir paduodam duomenis i lentele faq-form
          const docRef = await addDoc(collection(db, "faq-form"), {
              // siunciamo paketo body - data yra objekto kuri siunciam pavadinimas
              // formData - yra musu surinkti formos duomenys naudojant state'a
            data: formData,    
          });
          // sekmingai ivykus operacijai - ismes console.log'a
          console.log("Document written with ID: ", docRef.id);
          setFormData(defaultFormData);
          // catch - yra try func dalis kuri pagauna klaidas ir tada galima jas isklausyti
        } catch (e) {
          // consoleloginam klaida is backend'o
          console.error("Error adding document: ", e);
        }
    }

    const countryOptions = [
      { label: "Lithuania", value: "lithuania" },
      { label: "Estonia", value: "estonia" },
      { label: "Latvia", value: "latvia" },
      { label: "Finland", value: "finland" },
      { label: "Sweden", value: "sweden" },
      { label: "Norway", value: "norway" },
      { label: "Denmark", value: "denmark" },
      { label: "Poland", value: "poland" },
      { label: "Germany", value: "germany" },
      { label: "Ukraine", value: "ukraine" },
      { label: "Slovakia", value: "slovakia" },
      { label: "Hungary", value: "hungary" },
      { label: "Moldova", value: "moldova" }
    ];
   
    return (
    <form onSubmit={sendFormData} noValidate>
      <Input 
        type={"text"} 
        id={"name"} 
        name={"name"} 
        label={"Name"}
        required={true}
        value={formData.name}
        error={formErrors.name}
        onChange={handleChange}/>
      <Input 
        type={"email"} 
        id={"email"} 
        name={"email"} 
        label={"Email"}
        placeholder={"e-mail@mail.com"}
        info={"We'll never share yor email with anyone else :)"}
        required={true}
        value={formData.email}
        error={formErrors.email}
        onChange={handleChange}/>
        <Select
         id={"country"} 
         name={"country"} 
         label={"Country"}
         required={true}
         options={countryOptions}
         value={formData.country}
         error={formErrors.country}
         onChange={handleChange}/>
      <Textarea 
        id={"message"} 
        name={"message"} 
        label={"Message"}
        placeholder={"Plese leave your feedback..."}
        required={true}
        value={formData.message}
        error={formErrors.message}
        onChange={handleChange}/>
      <Button type={"submit"} label={"Submit"}/>
    </form>
    );
};
