"use client"

import { Eden } from "@/lib/eden"
import { useQuery } from "@tanstack/react-query"

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => await Eden.message.get(),
  })
  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">Loading...</div>
    )
  return (
    <div className="flex h-full items-center justify-center">{data?.data}</div>
  )
}
