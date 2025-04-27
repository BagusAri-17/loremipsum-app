import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { username, password } = await req.json();

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("email")
        .eq("username", username)
        .single();

    if (profileError || !profile) {
        return NextResponse.json({ error: "Username not found" }, { status: 400 });
    }

    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email: profile.email,
        password,
    });

    if (loginError) {
        return NextResponse.json({ error: loginError.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Login success" });
}