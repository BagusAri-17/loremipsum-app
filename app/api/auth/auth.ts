// lib/api/auth.ts
import { axiosInstance } from "@/lib/axios";

export async function login(username: string, password: string) {
    return axiosInstance.post("/auth/login", { username, password });
}

export async function register(email:string, username: string, password: string, role: string) {
    return axiosInstance.post("/auth/register", { email, username, password, role });
}

// export async function logout() {
//     return axiosInstance.post("/auth/logout");
// }
