function handleInputChange(event, setFormData){
        const { target } = event
        const { name, type, checked, value } = target
        // tikrinam ar input type yra checkbox'as - if true - paimam checked reiksme, kitu atveju paimam value reikmse
        const newValue = type === "checkbox" ? checked : value

        // settinam form data paimdami ankstesne ir pakeiciam tik nauja irasa, taip isvengiam null/nudefined reiksmiu
        return setFormData(prev => ({ ...prev, [name]: newValue }));
    }

export {handleInputChange}