import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, signinSchema } from "@/lib/schema";
import * as z from "zod";
import { useRouter } from "expo-router";

type FormData = z.infer<typeof signinSchema>;

export function useSigninForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signinSchema),
  });

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onSubmit = async (data: FormData) => {
    setError(undefined);
    setIsPending(true);

    try {
      console.log("Attempting to sign up with data:", data);

      const response = await fetch("http://localhost:8080/api/v1/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle server-side validation or errors
        setError(result.error || "An error occurred during signup. Please try again.");
      } else if (result.success) {
        router.push("/(tabs)/home"); // Adjust route as needed
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An error occurred during signup. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    isPending,
    error,
  };
}
