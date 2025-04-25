import {toast} from 'react-toastify';
import { dateRegex, priorityMapping, priorityRegex } from './constant';
import { TodoDto } from './dto/todo/TodoDto';
import { Priorities } from './enum/Priority';

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

export class Parser {
    public static parseTitle(title: string): TodoDto {
        const parsedData: TodoDto = { title };
        const prioritiesFound: Array<string> = [];
        let match;

        while ((match = priorityRegex.exec(title))) {
            const matchedPriority = match[0];
            prioritiesFound.push(priorityMapping[matchedPriority as Priorities]);
        }

        if (prioritiesFound.length > 0) {
            parsedData.priority = prioritiesFound[prioritiesFound.length - 1];
        }

        prioritiesFound.forEach(priority => {
            const macroname = `!${priority}`
            title = title.replace(macroname, '').trim();
        });

        parsedData.title = title

        const dateMatch = title.match(dateRegex);
        if (dateMatch?.length) {
            try {
                const cleanedDate = dateMatch[1].replace(/[-\/\.]/g, '/'); 
                if (!isNaN(new Date(cleanedDate).getTime())) {
                    parsedData.deadline = cleanedDate;
                    parsedData.title = title.replace(dateMatch[0], '').trim();
                }
            } catch (err) {
                console.error("Ошибка парсинга даты:", err);
            }
        } else {
            parsedData.title = title.replace('!before', '').trim();
        }
        
        return parsedData;
    }
}






