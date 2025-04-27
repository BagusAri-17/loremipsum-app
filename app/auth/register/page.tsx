import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Register() {
    return (
        <section className="h-screen flex items-center justify-center bg-[#F3F4F6]">
            <div className="container-main">
                <div className="px-[10px] py-6 md:bg-white md:max-w-sm md:py-10 md:px-4 md:rounded-xl mx-auto">
                    <div className="flex flex-col gap-6">
                        <Image className="mx-auto" width={134} height={24} src="/logo.png" alt="logo" />
                        <form action="" className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label className="text-slate-900 font-medium text-sm">Username</Label>
                                <Input type="text" placeholder="Username" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label className="text-slate-900 font-medium text-sm">Password</Label>
                                <Input type="password" placeholder="Password" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label className="text-slate-900 font-medium text-sm">Role</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="user">User</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="bg-blue-600 text-white w-full mt-3 hover:bg-blue-700 text-sm font-medium">Register</Button>
                        </form>
                        <p className="text-slate-600 mx-auto text-sm">Already have an account? <Link href="login" className="text-blue-600 hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}