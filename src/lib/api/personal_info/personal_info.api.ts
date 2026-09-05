import { api } from "../client";
import type {
    PersonalInfoData,
    UpdatePersonalInfoData
} from "@/lib/types";

export const educationApi = {
    get: () => api.get<PersonalInfoData[]>("/personal_info"),

    update: (data: UpdatePersonalInfoData) => api.patch<PersonalInfoData>(`/personal_info`, data),
}