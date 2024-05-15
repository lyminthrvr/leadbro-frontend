import React, {useMemo, useState} from 'react';
import MultiInputLabeled from "../../../../../../shared/Input/MultiLabeled/MultiLabeledInputs";
import CardInput from "../../../../../../shared/Input/Card";

const MultiInputPasswords = ({onAdd,passwordData,label,onActions,param,index}) => {
    const length = useMemo(()=>Object.keys(passwordData?.values??{}).length,[passwordData])
    const createNewPass = (prevId) => {
        return {
            id:prevId+1,
            name:'',
            values:[]
        }
    }
    return (
        <MultiInputLabeled label={label} onAdd={()=>onAdd(`passwords.${index}.${param}.${length}`,createNewPass(length))}>
            {Object.entries(passwordData[param] ?? {}).map(([key,value], i) => {
                const actions = onActions( `passwords.${index}.${param}.${key}`)
                return <CardInput placeholder={label} multiple={true}
                                  label={label} name={`passwords.${index}.${param}.${key}`}
                                  type={'password'} value={value}
                                  actions={{...actions,see:true}}/>
            })}
        </MultiInputLabeled>
    );
};

export default MultiInputPasswords;