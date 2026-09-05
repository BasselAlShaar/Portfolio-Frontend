import { api } from "../client";
import type {
    ProjectChallengesData,
    CreateProjectChallengesData,
    UpdateProjectChallengesData
} from "@/lib/types";

export const projectChallengesApi = {
    list: (slug: string) => api.get<ProjectChallengesData[]>(`/admin/projects/challenges/all/${slug}`),

    get: (id: string) => api.get<ProjectChallengesData>(`/admin/projects/challenges${id}`),

    create: (data: CreateProjectChallengesData) => api.post<ProjectChallengesData>("/admin/projects/challenges", data),

    update: (id:string, data: UpdateProjectChallengesData) => api.patch<ProjectChallengesData>(`/admin/projects/challenges${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/projects/challenges${id}`),
}