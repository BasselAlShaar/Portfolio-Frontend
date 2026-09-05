import { api } from "../client";
import type {
    SocialLinksData,
    CreateSocialLinksData,
    UpdateSocialLinksData
} from "@/lib/types";

export const educationApi = {
    listPublic: () => api.get<SocialLinksData[]>("/projects"),

    getPublic: (id: string) => api.get<SocialLinksData>(`/projects${id}`),

    list: () => api.get<SocialLinksData[]>("/admin/projects"),

    get: (id: string) => api.get<SocialLinksData>(`/admin/projects${id}`),

    create: (data: CreateSocialLinksData) => api.post<SocialLinksData>("/admin/projects", data),

    update: (id:string, data: UpdateSocialLinksData) => api.patch<SocialLinksData>(`/admin/projects${id}`, data),

    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/projects${id}`),
}