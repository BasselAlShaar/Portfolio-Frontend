import { api } from "../client";
import type {
    ExperienceAchievementsData,
    CreateExperienceAchievementsData,
    UpdateExperienceAchievementsData
} from "@/lib/types";

export const educationApi = {
    list: () => api.get<ExperienceAchievementsData[]>("/experience/achievements"),

    get: (id: string) => api.get<ExperienceAchievementsData>(`/experience/achievements/${id}`),

    create: (data: CreateExperienceAchievementsData) => api.post<ExperienceAchievementsData>("/experience/achievements", data),

    update: (id:string, data: UpdateExperienceAchievementsData) => api.patch<ExperienceAchievementsData>(`/experience/achievements/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/experience/achievements/${id}`),
}