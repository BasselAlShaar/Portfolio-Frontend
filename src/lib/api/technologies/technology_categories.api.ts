import { api } from "../client";
import type {
    TechnologiesCategoryData,
    CreateTechnologiesCategoryData,
    UpdateTechnologiesCategoryData
} from "@/lib/types";

export const technologyCategoriesApi = {
    list: () => api.get<TechnologiesCategoryData[]>(`/admin/technologies/categories`),

    get: (id: string) => api.get<TechnologiesCategoryData>(`/admin/technologies/categories${id}`),

    create: (data: CreateTechnologiesCategoryData) => api.post<TechnologiesCategoryData>("/admin/technologies/categories", data),

    update: (id:string, data: UpdateTechnologiesCategoryData) => api.patch<TechnologiesCategoryData>(`/admin/technologies/categories${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/technologies/categories${id}`),
}