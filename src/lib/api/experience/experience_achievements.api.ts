import { api } from "../client";
import type {
    ExperienceAchievementsData,
    CreateExperienceAchievementsData,
    UpdateExperienceAchievementsData
} from "@/lib/types";

export const experienceAchievementsApi = {
    list: () => api.get<ExperienceAchievementsData[]>("/admin/experience/achievements"),

    get: (id: string) => api.get<ExperienceAchievementsData>(`/admin/experience/achievements/${id}`),

    create: (data: CreateExperienceAchievementsData) => api.post<ExperienceAchievementsData>("/admin/experience/achievements", data),

    update: (id:string, data: UpdateExperienceAchievementsData) => api.patch<ExperienceAchievementsData>(`/admin/experience/achievements/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/experience/achievements/${id}`),
}