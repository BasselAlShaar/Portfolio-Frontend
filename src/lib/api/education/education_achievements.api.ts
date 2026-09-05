import { api } from "../client";
import type {
    EducationAchievementsData,
    CreateEducationAchievementsData,
    UpdateEducationAchievementsData
} from "@/lib/types";

export const educationApi = {
    list: () => api.get<EducationAchievementsData[]>("/education/achievements"),

    get: (id: string) => api.get<EducationAchievementsData>(`/education/achievements/${id}`),

    create: (data: CreateEducationAchievementsData) => api.post<EducationAchievementsData>("/education/achievements", data),

    update: (id:string, data: UpdateEducationAchievementsData) => api.patch<EducationAchievementsData>(`/education/achievements/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/education/achievements/${id}`),
}