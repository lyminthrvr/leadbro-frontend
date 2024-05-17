import {useMemo} from 'react';

const useMappedObj = (object) => {
    return useMemo(() => Array.isArray(object) ? [object.map((el,index)=>[index,el])] : Object.entries(object??{}),[object])
};

export default useMappedObj;