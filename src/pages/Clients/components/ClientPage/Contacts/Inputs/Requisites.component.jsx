import React, {useMemo} from 'react';
import CardInput from "../../../../../../shared/Input/Card";
import MultiInputLabeled from "../../../../../../shared/Input/MultiLabeled/MultiLabeledInputs";
import {createRequisites} from "../../../../clients.mocks";

const RequisitesToValues = {
    INN:'ИНН',
    BankName:'Наименование банка',
    KPP:'КПП',
    OGRN:'ОГРН/ОГРНИП',
    RS:'Р/с №',
    BIK:'БИК банка',
}
const RequisitesOnSave={
    INN:'ИНН сохранен',
    BankName:'Наименование банка сохранено',
    KPP:'КПП сохранен ',
    OGRN:'ОГРН/ОГРНИП сохранено',
    RS:'Расчетный счт сохранен',
    BIK:'БИК сохарнен',
}

const RequisitesOnClose={
    INN:'ИНН восстановлен',
    BankName:'Наименование банка восстановлено',
    KPP:'КПП восстановлен',
    OGRN:'ОГРН/ОГРНИП восстановлено',
    RS:'Расчетный счт восстановлен',
    BIK:'БИК восстановлен',
}
const RequisitesComponent = ({label,contactData,onActions,onAdd}) => {
    const length = useMemo(()=>Object.keys(contactData?.requisites ?? {}).length,[contactData.requisites])

    return (
        <MultiInputLabeled label={label} onAdd={()=>onAdd(`contactData.requisites.${length}`,createRequisites({}))}>
            {Object.entries(contactData?.requisites ?? {}).map(([key, value], index) => {

                return Object.entries(value).map(([keyRequisites,valueRequisites],index)=>{
                    const actions = onActions( `contactData.requisites.${key}.${keyRequisites}`,RequisitesOnSave[keyRequisites],RequisitesOnClose[keyRequisites])
                    return <CardInput placeholder={`${RequisitesToValues[keyRequisites]}...`} multiple={true} labeled={true}
                                      label={RequisitesToValues[keyRequisites]} name={`contactData.requisites.${key}.${keyRequisites}`}
                                      type={'textarea'} value={valueRequisites}
                                      actions={actions}/>
                })
            })}
        </MultiInputLabeled>
    );
};

export default RequisitesComponent;