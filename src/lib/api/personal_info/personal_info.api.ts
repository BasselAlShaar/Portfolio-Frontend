import { api } from "../client";
import type {
    PersonalInfoData,
    UpdatePersonalInfoData
} from "@/lib/types";

export const personalInfoApi = {
    getPublic: () => api.get<PersonalInfoData[]>("/personal_info"),

    get: () => api.get<PersonalInfoData[]>("/admin/personal_info"),

    update: (data: UpdatePersonalInfoData) => api.patch<PersonalInfoData>(`/admin/personal_info`, data),
}