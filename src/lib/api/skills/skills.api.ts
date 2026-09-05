import { api } from "../client";
import type {
    SkillsData,
    CreateSkillsData,
    UpdateSkillsData
} from "@/lib/types";

export const skillsApi = {
    list: () => api.get<SkillsData[]>("/admin/projects/skills"),

    get: (id: string) => api.get<SkillsData>(`/admin/skills${id}`),

    create: (data: CreateSkillsData) => api.post<SkillsData>("/admin/skills", data),

    update: (id:string, data: UpdateSkillsData) => api.patch<SkillsData>(`/admin/skills${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/skills${id}`),
}