"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { GithubIcon, Loader2Icon } from "lucide-react"
import { useTransition } from "react"
import toast from "react-hot-toast"

export const GithubButton = () => {
  const [isPending, startTransition] = useTransition()
  const handleSignIn = async () => {
    startTransition(async () => {
      await authClient.signIn.social(
        {
          provider: "github",
          callbackURL: "/",
        },
        {
          onSuccess: () => {
            toast.success("Redirecting. Please wait...")
          },
          onError: () => {
            toast.error("Failed to sign in")
          },
        },
      )
    })
  }
  return (
    <Button
      size="lg"
      className="w-full cursor-pointer"
      onClick={handleSignIn}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <>
          <GithubIcon className="size-4" /> Continue with Github
        </>
      )}
    </Button>
  )
}
