import { api } from "../client";
import type {
    SocialLinksData,
    CreateSocialLinksData,
    UpdateSocialLinksData
} from "@/lib/types";

export const socialLinksApi = {
    list: () => api.get<SocialLinksData[]>("/admin/personal_info/links"),

    get: (id: string) => api.get<SocialLinksData>(`/admin/personal_info/links${id}`),

    create: (data: CreateSocialLinksData) => api.post<SocialLinksData>("/admin/personal_info/links", data),

    update: (id:string, data: UpdateSocialLinksData) => api.patch<SocialLinksData>(`/admin/personal_info/links${id}`, data),
    
    delete: (id: string) => api.delete<{ id: string | null }>(`/admin/personal_info/links${id}`),
}