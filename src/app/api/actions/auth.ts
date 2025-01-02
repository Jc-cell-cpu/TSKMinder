"use server";

import { cookies } from "next/headers";

export async function signIn(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:4100/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to sign in");
    }

    // Store the token in an HTTP-only cookie
    (
      await // Store the token in an HTTP-only cookie
      cookies()
    ).set("token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return { success: true, message: data.message };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
