export const formatSum = (num) =>{
    const numStr = num.toString();
    const length = numStr.length;

    if (length <= 3) {
        return numStr;
    }

    let formattedNumber = "";
    let count = 0;

    for (let i = length - 1; i >= 0; i--) {
        formattedNumber = numStr[i] + formattedNumber;
        count++;

        if (count === 3 && i !== 0) {
            formattedNumber = " " + formattedNumber;
            count = 0;
        }
    }

    return formattedNumber;
}