import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, username, password, role } = await req.json();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError || !signUpData.user) {
        return NextResponse.json({ error: signUpError?.message }, { status: 400 });
    }

    const { error: profileError } = await supabase.from("profiles").insert({
        id: signUpData.user.id,
        email,
        username,
        role,
    });

    if (profileError) {
        return NextResponse.json({ error: profileError.message }, { status: 400 });
    }

    return NextResponse.json({ message: "User registered successfully" });
}