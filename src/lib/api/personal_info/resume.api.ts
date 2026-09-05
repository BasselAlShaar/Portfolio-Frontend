import { api } from "../client";
import type {
    ResumesData,
    CreateResumeData,
    UpdateResumeData
} from "@/lib/types";

export const educationApi = {
    getActive: () => api.get<ResumesData[]>("/personal_info/resume"),

    list: () => api.get<ResumesData[]>("/admin/personal_info/resume"),

    get: (id: string) => api.get<ResumesData>(`/admin/personal_info/resume/${id}`),

    create: (data: CreateResumeData) => api.post<ResumesData>("/admin/personal_info/resume", data),

    update: (id:string, data: UpdateResumeData) => api.patch<ResumesData>(`/admin/personal_info/resume/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/personal_info/resume/${id}`),
}