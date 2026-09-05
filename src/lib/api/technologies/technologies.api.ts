import { api } from "../client";
import type {
    TechnologiesData,
    CreateTechnologiesData,
    UpdateTechnologiesData
} from "@/lib/types";

export const technologiesApi = {
    list: () => api.get<TechnologiesData[]>(`/admin/technologies`),

    get: (id: string) => api.get<TechnologiesData>(`/admin/technologies${id}`),

    create: (data: CreateTechnologiesData) => api.post<TechnologiesData>("/admin/technologies", data),

    update: (id:string, data: UpdateTechnologiesData) => api.patch<TechnologiesData>(`/admin/technologies${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/technologies${id}`),
}