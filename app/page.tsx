"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Eden } from "@/lib/eden"
import { useQuery } from "@tanstack/react-query"
import { Link } from "next-view-transitions"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function HomePage() {
  const { data: session } = authClient.useSession()
  const router = useRouter()
  const { data, isLoading } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => await Eden.message.get(),
  })
  const handleLogout = async () => {
    await authClient.signOut()
    toast.success("Logged out successfully")
    router.refresh()
  }
  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">Loading...</div>
    )
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h2>{data?.data}</h2>
      {session ? (
        <>
          <h2>
            Logged in as <strong>{session.user?.email}</strong>
          </h2>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <h2>Not logged in</h2>{" "}
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </>
      )}
    </div>
  )
}
