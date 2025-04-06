export interface TodoDto {
    title: string;
    text?: string;
    priority: string;
    deadline?: string | null;
}