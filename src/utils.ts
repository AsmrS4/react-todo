import {toast} from 'react-toastify';

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
        return DateUtils.transformDateToMillis(deadline) - DateUtils.transformDateToMillis(now) <= 0;
    }

    public static isCompletedBeforeDeadline = (deadlineDate: string, lastModifiedDate: string) => {
        return DateUtils.transformDateToMillis(lastModifiedDate) - DateUtils.transformDateToMillis(deadlineDate) < 0;
    }

    public static isOverduedTask = (deadline: string): boolean => {
        let now = DateUtils.getToday();
        return DateUtils.transformDateToMillis(deadline) - DateUtils.transformDateToMillis(now) <=  259200000 && DateUtils.transformDateToMillis(deadline) - DateUtils.transformDateToMillis(now) > 0;
    }
}

export class ToastUtils {
    public static getSuccessToast = (message:string) => {
        return toast.success(`${message}`, {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored'
        });
    }

    public static getErrorToast = (message:string) => {
        return toast.error(`${message}`, {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored'
        });
    }

    public static getWarningToast = (message:string) => {
        return toast.warning(`${message}`, {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored'
        });
    }
}







