import { api } from "../client";
import type {
    ExperienceResponsibilitiesData,
    CreateExperienceResponsibilitiesData,
    UpdateExperienceResponsibilitiesData
} from "@/lib/types";

export const educationApi = {
    list: () => api.get<ExperienceResponsibilitiesData[]>("/experience/responsibilities"),

    get: (id: string) => api.get<ExperienceResponsibilitiesData>(`/experience/responsibilities/${id}`),

    create: (data: CreateExperienceResponsibilitiesData) => api.post<ExperienceResponsibilitiesData>("/experience/responsibilities", data),

    update: (id:string, data: UpdateExperienceResponsibilitiesData) => api.patch<ExperienceResponsibilitiesData>(`/experience/responsibilities/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/experience/responsibilities/${id}`),
}