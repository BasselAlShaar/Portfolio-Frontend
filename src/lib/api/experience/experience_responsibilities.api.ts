import { api } from "../client";
import type {
    ExperienceResponsibilitiesData,
    CreateExperienceResponsibilitiesData,
    UpdateExperienceResponsibilitiesData
} from "@/lib/types";

export const experienceResponsibilitiesApi = {
    list: () => api.get<ExperienceResponsibilitiesData[]>("/admin/experience/responsibilities"),

    get: (id: string) => api.get<ExperienceResponsibilitiesData>(`/admin/experience/responsibilities/${id}`),

    create: (data: CreateExperienceResponsibilitiesData) => api.post<ExperienceResponsibilitiesData>("/admin/experience/responsibilities", data),

    update: (id:string, data: UpdateExperienceResponsibilitiesData) => api.patch<ExperienceResponsibilitiesData>(`/admin/experience/responsibilities/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/experience/responsibilities/${id}`),
}