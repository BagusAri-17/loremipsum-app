import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
    return (
        <section className="h-screen flex items-center justify-center bg-[#F3F4F6]">
            <div className="container-main">
                <div className="px-[10px] py-6 md:bg-white md:max-w-sm md:py-10 md:px-4 md:rounded-xl mx-auto">
                    <div className="flex flex-col gap-6">
                        <Image className="mx-auto" width={134} height={24} src="/logo.png" alt="logo" />
                        <form action="" className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label className="text-slate-900 font-medium text-sm">Username</Label>
                                <Input className="text-sm" type="text" placeholder="Username" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label className="text-slate-900 font-medium text-sm">Password</Label>
                                <Input className="text-sm" type="password" placeholder="Password" />
                            </div>
                            <Button className="bg-blue-600 text-white w-full mt-3 hover:bg-blue-700 text-sm font-medium">Login</Button>
                        </form>
                        <p className="text-slate-600 mx-auto text-sm">Don’t have an account? <Link href="register" className="text-blue-600 hover:underline">Register</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}