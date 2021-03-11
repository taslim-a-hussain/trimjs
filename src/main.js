const trimjs = (str='', format=0) => {
    const fullyTrimed = str.trim().replace(/\s+/g, ' ');
    switch (format) {
        case 1:
            return  fullyTrimed.charAt(0).toUpperCase() + fullyTrimed.slice(1);
        case 2:
                let string = fullyTrimed.split(" ");
                for (let i = 0, x = string.length; i < x; i++) {
                    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
            
                }
                return string.join(" ");
        default:
            return  fullyTrimed;
    }
};



export default trimjs;