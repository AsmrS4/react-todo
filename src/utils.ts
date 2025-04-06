export class DateUtils {
    
    public static transformDate = (date: string) : string =>{
        return date.slice(0,10)
        .split('-')
        .reverse()
        .join('/');
    }

    public static transformToJSON = (date:string):string => {
        return date
        .split('.')
        .reverse()
        .join('-');
    }

    public static transformToPicker = (date:string):string=> {
        return date
        .split('-')
        .reverse()
        .join('.');
    }

    public static transformDateToISO = (date:string) : string =>{
        return date.split('/')
        .reverse()
        .join('-');
    }

    private static transformDateToMillis =(dateStr: string) : number => {
        let str = DateUtils.transformDateToISO(dateStr);
        let date = Date.parse(str);
        return date;
    }

    private static getToday = () : string=> {
        let today = new Date();
        return DateUtils.transformDate(today.toISOString());
    }

    public static isLateTask = (deadline: string): boolean => {
        let now = DateUtils.getToday();
        return DateUtils.transformDateToMillis(deadline) - DateUtils.transformDateToMillis(now) < 0;
    }

    public static isOverduedTask = (deadline: string): boolean => {
        let now = DateUtils.getToday();
        return DateUtils.transformDateToMillis(deadline) - DateUtils.transformDateToMillis(now) <=  259200000 && DateUtils.transformDateToMillis(deadline) - DateUtils.transformDateToMillis(now) >= 0;
    }
}