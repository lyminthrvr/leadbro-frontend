import {isId} from "./is.type";

export function updateObjectRecursively(draft, oldObject, newObject) {
    if (draft === oldObject) {
        return newObject;
    }

    if (Array.isArray(draft)) {
        return draft.map(item =>
            updateObjectRecursively(item, oldObject, newObject)
        );
    }

    if (typeof draft === "object" && draft !== null) {
        const updatedDraft = { ...draft };
        for (const key in updatedDraft) {
            updatedDraft[key] = updateObjectRecursively(
                updatedDraft[key],
                oldObject,
                newObject
            );
        }
        return updatedDraft;
    }

    return draft;
}

export function updateDraftObject(id,store, oldDraft, newDraft) {
    const draft = store.drafts[id];
    store.drafts = {
        ...store.drafts,
        [id]: updateObjectRecursively(draft, oldDraft, newDraft),
    };
}

export const changeDraft = (store,id,object, path, value,withId) => {
    // const pathParts = path.split('.');
    // let currentValue = object;
    //
    // for (let i = 0; i < pathParts.length - 1; i++) {
    //     const part = pathParts[i];
    //     if (Array.isArray(currentValue) && isId(part)) {
    //         const index = Number(part);
    //         const nextValue = currentValue.find(x => x.id === index);
    //         if (!nextValue) {
    //             const newValue = [...currentValue, { id: index }];
    //             currentValue = newValue;
    //         } else {
    //             currentValue = nextValue;
    //         }
    //     } else {
    //         if (!currentValue[part]) {
    //             currentValue = { ...currentValue, [part]: {} };
    //         }
    //         currentValue = currentValue[part];
    //     }
    // }
    //
    // const lastPart = pathParts[pathParts.length - 1];
    // return { ...currentValue, [lastPart]: value };
    const pathParts = path.split('.');
    let currentDraft = store.drafts[id];

    // Обновляем вложенные объекты в черновике
    for (let i = 0; i < pathParts.length - 1; i++) {
        const part = pathParts[i];
        if (Array.isArray(currentDraft) && isId(part)) {
            const index = Number(part);
            const nextDraft = currentDraft.find(x => x.id === index);
            if (!nextDraft) {
                const newDraft = [...currentDraft, { id: index }];
                updateDraftObject(id,store, currentDraft, newDraft);
                currentDraft = newDraft.find(x => x.id === index);
            } else {
                currentDraft = nextDraft;
            }
        } else {
            if (!currentDraft[part]) {
                const newDraft = { ...currentDraft, [part]: {} };
                updateDraftObject(id,store, currentDraft, newDraft);
                currentDraft = newDraft[part];
            } else {
                currentDraft = currentDraft[part];
            }
        }
    }
    const lastPart = pathParts[pathParts.length - 1];
    const newDraft = withId ?  { ...currentDraft, [lastPart]: value } : [...currentDraft,value];
    updateDraftObject(id,store, currentDraft, newDraft);
};

export function resetDraft(store,id,object, path){
    const client = object
    if (!client) return;

    // const pathParts = path.split('.');
    // let currentValue = client;

    // for (let i = 0; i < pathParts.length; i++) {
    //     const part = pathParts[i];
    //     if (Array.isArray(currentValue)) {
    //         if (!isId(part)) return;
    //         const index = Number(part);
    //         currentValue = currentValue.find(x => x.id === index);
    //         if (!currentValue) return;
    //     } else if (typeof currentValue === "object" && currentValue !== null) {
    //         if (!currentValue.hasOwnProperty(part)) return;
    //         currentValue = currentValue[part];
    //     } else {
    //         return;
    //     }
    // }

    // const lastPart = pathParts[pathParts.length - 1];
    const newDraft = client ;
    // delete newDraft[lastPart];

    updateDraftObject(id, store, store.drafts[id], newDraft);
}

export const removeDraft = (store, id, path) => {
    const pathParts = path.split('.');
    let currentDraft = store.drafts[id];

    // Обновляем вложенные объекты в черновике
    for (let i = 0; i < pathParts.length - 1; i++) {
        const part = pathParts[i];
        if (Array.isArray(currentDraft) && isId(part)) {
            const index = Number(part);
            const nextDraft = currentDraft.find(x => x.id === index);
            if (!nextDraft) return; // Если элемент массива не найден, выходим
            currentDraft = nextDraft;
        } else {
            if (!currentDraft[part]) return; // Если свойство не существует, выходим
            currentDraft = currentDraft[part];
        }
    }

    // Удаляем последнее свойство из черновика
    const lastPart = pathParts[pathParts.length - 1];
    const newDraft = { ...currentDraft };
    delete newDraft[lastPart];
    updateDraftObject(id, store, currentDraft, newDraft);
};