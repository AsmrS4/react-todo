import { Priorities } from "./enum/Priority";

export const priorityRegex = /!(1|2|3|4)/g;
export const dateRegex = /!before\s*(\d{1,2}[-\/.]\d{1,2}[-\/.]\d{4})/;

export const priorityMapping: Record<Priorities, string> = {
  [Priorities.Critical]: '1',
  [Priorities.High]: '2',
  [Priorities.Medium]: '3',
  [Priorities.Low]: '4'
};

export const ERROR_400 = 'Некорректные данные';
export const ERROR_500 = 'Не удалось обработать запрос';

