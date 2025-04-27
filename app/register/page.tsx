'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "../api/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Register() {
    const router = useRouter();

    const formSchema = z.object({
        email: z.string().email({ message: "Email must valid"}),
        username: z.string().min(2, { message: "Username must be at least 2 characters." }),
        password: z.string().min(8, { message: "Password must be at least 8 characters" }),
        role: z.string()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            role: "user"
        },
    });

    async function onSubmit (values: z.infer<typeof formSchema>) {
        try {
            await register(values.email, values.username, values.password, values.role);
            alert("Register successful!");
            router.push("/dashboard");
        } catch (error: any) {
            alert(error.response?.data?.error || "Register failed");
        }
    }

    return (
        <section className="h-screen flex items-center justify-center bg-[#F3F4F6]">
            <div className="container-main">
                <div className="px-[10px] py-6 md:bg-white md:max-w-sm md:py-10 md:px-4 md:rounded-xl mx-auto">
                    <div className="flex flex-col gap-6">
                        <Image className="mx-auto" width={134} height={24} src="/logo.png" alt="logo" />
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-900 font-medium text-sm">Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="email" placeholder="Email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-1">
                                            <FormLabel className="text-slate-900 font-medium text-sm">Username</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="username" placeholder="Username" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-1">
                                            <FormLabel className="text-slate-900 font-medium text-sm">Password</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="password" placeholder="Password" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-1">
                                            <FormLabel className="text-slate-900 font-medium text-sm">Role</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select Role" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="user">User</SelectItem>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="bg-blue-600 text-white w-full mt-3 hover:bg-blue-700 text-sm font-medium">Register</Button>
                            </form>
                        </Form>
                        <p className="text-slate-600 mx-auto text-sm">Already have an account? <Link href="login" className="text-blue-600 hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}