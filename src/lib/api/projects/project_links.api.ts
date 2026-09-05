import { api } from "../client";
import type {
    ProjectLinksData,
    CreateProjectLinksData,
    UpdateProjectLinksData
} from "@/lib/types";

export const projectLinksApi = {
    list: (slug: string) => api.get<ProjectLinksData[]>(`/admin/projects/links/all/${slug}`),

    get: (id: string) => api.get<ProjectLinksData>(`/admin/projects/links${id}`),

    create: (data: CreateProjectLinksData) => api.post<ProjectLinksData>("/admin/projects/links", data),

    update: (id:string, data: UpdateProjectLinksData) => api.patch<ProjectLinksData>(`/admin/projects/links${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/projects/links${id}`),
}