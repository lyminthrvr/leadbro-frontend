import React, {useMemo, useState} from 'react';
import MultiInputLabeled from "../../../../../../shared/Input/MultiLabeled/MultiLabeledInputs";
import CardInput from "../../../../../../shared/Input/Card";

const MultiInputPasswords = ({onAdd,passwordData,label,onActions,param,index}) => {
    const length = useMemo(()=>Object.keys(passwordData?.values??{}).length,[passwordData])

    return (
        <MultiInputLabeled label={label} onAdd={()=>onAdd(`passwords.${index}.${param}.${length}`,'')}>
            {Object.entries(passwordData[param] ?? {}).map(([key,value], i) => {
                const actions = onActions( `passwords.${index}.${param}.${key}`)
                return <CardInput placeholder={'Пароль...'} multiple={true}
                                  label={label} name={`passwords.${index}.${param}.${key}`}
                                  type={'password'} value={value}
                                  actions={{...actions,see:true}}/>
            })}
        </MultiInputLabeled>
    );
};

export default MultiInputPasswords;