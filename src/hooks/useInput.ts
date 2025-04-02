import { useState } from "react";
import { useValidation } from "./useValidation.ts";

export const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue);
    const valid = useValidation(value, validations);
    const onChange = (e: any) => {
        setValue(e.target.value);
    };
    
    return { value, onChange, setValue,...valid };
};