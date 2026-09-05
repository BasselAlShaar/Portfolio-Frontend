import { api } from "../client";
import type {
    ProjectImagesData,
    CreateProjectImagesData,
    UpdateProjectImagesData
} from "@/lib/types";

export const educationApi = {
    list: (slug: string) => api.get<ProjectImagesData[]>(`/admin/projects/images/all/${slug}`),

    get: (id: string) => api.get<ProjectImagesData>(`/admin/projects/images${id}`),

    create: (data: CreateProjectImagesData) => api.post<ProjectImagesData>("/admin/projects/images", data),

    update: (id:string, data: UpdateProjectImagesData) => api.patch<ProjectImagesData>(`/admin/projects/images${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/projects/images${id}`),
}