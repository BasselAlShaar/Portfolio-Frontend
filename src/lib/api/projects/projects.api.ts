import { api } from "../client";
import type {
    ProjectData,
    CreateProjectData,
    UpdateProjectData
} from "@/lib/types";

export const projectsApi = {
    listPublic: () => api.get<ProjectData[]>("/projects"),

    getPublic: (slug: string) => api.get<ProjectData>(`/projects${slug}`),

    list: () => api.get<ProjectData[]>("/admin/projects"),

    get: (slug: string) => api.get<ProjectData>(`/admin/projects${slug}`),

    create: (data: CreateProjectData) => api.post<ProjectData>("/admin/projects", data),

    update: (slug:string, data: UpdateProjectData) => api.patch<ProjectData>(`/admin/projects${slug}`, data),

    delete: (slug: string) => api.delete<{ slug: string | null }>(`/admin/projects${slug}`),
}