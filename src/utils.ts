screenTop
export const transformDate = (date: string) => {
    return date.slice(0,10)
    .split('-')
    .reverse()
    .join('/');
}

export const transformDateToISO = (date:string) => {
    return date.split('/')
    .reverse()
    .join('-');
}


export const getDate =(dateStr:string) => {
    let str = transformDateToISO(dateStr);
    let date = Date.parse(str);
    return date;
}
export const getToday = () => {
    let today = new Date();
    return transformDate(today.toISOString());
}

export const getOverduedDate = () => {
    let today = new Date();
    today.setDate(today.getDate() + 3);
    return transformDate(today.toISOString());
}

export const isOverduedTask = (date:string) => {
    let now = getToday();

}