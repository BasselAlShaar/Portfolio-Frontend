import { api } from "../client";
import type {
    ExperienceData,
    CreateExperienceData,
    UpdateExperienceData
} from "@/lib/types";

export const educationApi = {
    list: () => api.get<ExperienceData[]>("/experience"),

    get: (id: string) => api.get<ExperienceData>(`/experience/${id}`),

    create: (data: CreateExperienceData) => api.post<ExperienceData>("/experience", data),

    update: (id:string, data: UpdateExperienceData) => api.patch<ExperienceData>(`/experience/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/experience/${id}`),
}