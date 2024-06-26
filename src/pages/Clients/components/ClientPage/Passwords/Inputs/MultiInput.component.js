import React, {useMemo, useState} from 'react';
import MultiInputLabeled from "../../../../../../shared/Input/MultiLabeled/MultiLabeledInputs";
import CardInput from "../../../../../../shared/Input/Card";
import styles from '../Passwords.module.sass'

const credentialsLabels={
    "login":'Логин',
    "password":'Пароль'
}

const createEmptyCredentials = () => ({
    login:'',
    password:''
})

const MultiInputPasswords = ({onAdd,passwordData,label,onActions,param,index}) => {
    const length = useMemo(()=>Object.keys(passwordData?.values??{}).length,[passwordData])

    return (
        <MultiInputLabeled actions={{...onActions( `passwords.${index}.name`,`passwords.${index}`),copy:null}} isInput={true} name={`passwords.${index}.name`} label={label} onAdd={()=>{
            onAdd(`passwords.${index}.${param}.${length}`,createEmptyCredentials())}}>
            {Object.entries(passwordData[param] ?? {}).map(([key,value], i) => {
                const actions = onActions( `passwords.${index}.${param}.${key}`)
                return Object.entries(value??{}).map(([keyCredential,valueCredential])=>{
                    return <CardInput placeholder={`${credentialsLabels[keyCredential]}...`} multiple={true}
                                      label={credentialsLabels[keyCredential]} name={`passwords.${index}.${param}.${key}.${keyCredential}`}
                                      labeled={true}
                                      type={keyCredential === 'password'? 'password' : "text"} value={valueCredential}
                                      actions={{...actions,see:keyCredential === 'password'}}/>
                })
            })}
        </MultiInputLabeled>
    );
};

export default MultiInputPasswords;