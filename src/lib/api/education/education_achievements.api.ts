import { api } from "../client";
import type {
    EducationAchievementsData,
    CreateEducationAchievementsData,
    UpdateEducationAchievementsData
} from "@/lib/types";

export const educationApi = {
    list: () => api.get<EducationAchievementsData[]>("/admin/education/achievements"),

    get: (id: string) => api.get<EducationAchievementsData>(`/admin/education/achievements/${id}`),

    create: (data: CreateEducationAchievementsData) => api.post<EducationAchievementsData>("/admin/education/achievements", data),

    update: (id:string, data: UpdateEducationAchievementsData) => api.patch<EducationAchievementsData>(`/admin/education/achievements/${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/education/achievements/${id}`),
}