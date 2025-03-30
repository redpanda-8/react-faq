import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import styles from "./FaqTable.module.css";

export const FaqTable  = () => {

    const [faqData, setFaqData] = useState([]);

    const fetchData = async () => {

        await getDocs(collection(db, "faq-form"))
            .then((querySnapshot) => {              
                // newData - laikinas kintamasis sitai func 
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setFaqData(newData);                
            })

    }
    // useEffect is a React Hook that lets you synchronize a component with an external system.
    // suderina func veikima taip kad jos btu kontroliuojamos ir neissautu infinite kartu
    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <td className={styles.td}>Name</td>
                    <td className={styles.td}>Message</td>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                { faqData.map((item) => (
                    <tr className={styles.tr} key={ item.id }>
                        <td className={styles.td}>{ item.data.name }</td>
                        <td className={styles.td}>{ item.data.message }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}