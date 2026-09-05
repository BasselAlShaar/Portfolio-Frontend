import { api } from "../client";
import type {
    SkillsCategoryData,
    CreateSkillsCategoryData,
    UpdateSkillsCategoryData
} from "@/lib/types";

export const skillCategoriesApi = {
    list: () => api.get<SkillsCategoryData[]>(`/admin/skills/categories`),

    get: (id: string) => api.get<SkillsCategoryData>(`/admin/skills/categories${id}`),

    create: (data: CreateSkillsCategoryData) => api.post<SkillsCategoryData>("/admin/skills/categories", data),

    update: (id:string, data: UpdateSkillsCategoryData) => api.patch<SkillsCategoryData>(`/admin/skills/categories${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/skills/categories${id}`),
}