import { api } from "../client";
import type {
    ExperienceData,
    CreateExperienceData,
    UpdateExperienceData
} from "@/lib/types";

export const experienceApi = {
    list: () => api.get<ExperienceData[]>("/experience"),

    get: (id: string) => api.get<ExperienceData>(`/admin/experience/${id}`),

    create: (data: CreateExperienceData) => api.post<ExperienceData>("/admin/experience", data),

    update: (id:string, data: UpdateExperienceData) => api.patch<ExperienceData>(`/admin/experience/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/experience/${id}`),
}