import { api } from "../client";
import type { EducationData, CreateEducationData, UpdateEducationData } from "@/lib/types";

export const educationApi = {
    list: () => api.get<EducationData[]>("/education"),

    get: (id: string) => api.get<EducationData>(`/admin/education/${id}`),

    create: (data: CreateEducationData) => api.post<EducationData>("/admin/education", data),

    update: (id:string, data: UpdateEducationData) => api.patch<EducationData>(`/admin/education/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/education/${id}`),
}