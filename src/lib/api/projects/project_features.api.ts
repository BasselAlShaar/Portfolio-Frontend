import { api } from "../client";
import type {
    ProjectFeaturesData,
    CreateProjectFeaturesData,
    UpdateProjectFeaturesData
} from "@/lib/types";

export const educationApi = {
    list: (slug: string) => api.get<ProjectFeaturesData[]>(`/admin/projects/features/all/${slug}`),

    get: (id: string) => api.get<ProjectFeaturesData>(`/admin/projects/features${id}`),

    create: (data: CreateProjectFeaturesData) => api.post<ProjectFeaturesData>("/admin/projects/features", data),

    update: (id:string, data: UpdateProjectFeaturesData) => api.patch<ProjectFeaturesData>(`/admin/projects/features${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/projects/features${id}`),
}