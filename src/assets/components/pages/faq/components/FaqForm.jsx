import { useCallback, useState } from "react";
import { Button } from "../../../form/Button";
import { Input } from "../../../form/input";
import { Textarea } from "../../../form/Textarea";
import { collection, addDoc } from "firebase/firestore";
import { db } from './../../../../../../firebase';


export const FaqForm = () => {

    const defaultFormData = {
        name: '', 
        email: '',
        message: '',
    }

    const [formData, setFormData] = useState(defaultFormData)
    
    function handleInputChange(event, setFormData){
        const { target } = event
        const { name, type, checked, value } = target
        const newValue = type === "checkbox" ? checked : value
        return setFormData(prev => ({ ...prev, [name]: newValue }));
    }
    // useCallback is a React Hook that lets you cache a function definition between re-renders.
    // [setFormData] - depth kuris nusako kad pokyciai turetu buti limituoti tik siame objekte, t.y.
    // taip isvengiant infinite loop ir errors
    const handleChange = useCallback((event) => handleInputChange(event, setFormData), [setFormData])

    const sendFormData = async (e) => {
        // event.preventDefault(); - neleidzia ivykti html'o standartiniam veiksmui, tam kad galetu
        // paleisti savo koda, siuo atveju forma nebus submit'inta per html'a bet bus submit'inama per
        // react zemiau esancia func 
        e.preventDefault();  

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
   
    return (
    <form onSubmit={sendFormData}>
      <Input 
        type={"text"} 
        id={"name"} 
        name={"name"} 
        label={"Name"}
        value={formData.name}
        onChange={handleChange}/>
      <Input 
        type={"email"} 
        id={"email"} 
        name={"email"} 
        label={"Email"}
        value={formData.email}
        onChange={handleChange}/>
      <Textarea 
        id={"message"} 
        name={"message"} 
        label={"Message"}
        value={formData.message}
        onChange={handleChange}/>
      <Button type={"submit"} label={"Submit"}/>
    </form>
    );
};
