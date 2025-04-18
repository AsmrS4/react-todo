export interface TodoDto {
    title: string;
    text?: string;
    priority: string;
    deadline?: string | null;
}

export interface TodoProps {
    id: string;
    title: string;
    text?: string;
    deadline_at?: string;
    created_at: string;
    modified_at: string;
    status: string;
    priority: number;
    completed: boolean;
    index: number;
}
