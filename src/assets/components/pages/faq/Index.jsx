import { FaqForm } from "./components/FaqForm"
import { FaqTable } from "./components/FaqTable";

export const Faq = () => {
   
    return (
        <>
            <div className={"conteiner"}>
                <FaqForm/>
            </div>
            <div className={"conteiner"}>
                <FaqTable/>
            </div>            
       </>
    );
};
