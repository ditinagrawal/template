import { Link } from "next-view-transitions"
import Image from "next/image"
import { GithubButton } from "../components/github-button"

export const AuthView = () => {
  return (
    <section className="bg-muted h-full">
      <div className="grid h-full grid-cols-1 p-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white px-36 py-48">
          <div className="flex flex-col gap-8">
            <div>Logo</div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Welcome to XYZ</h2>
              <p className="text-muted-foreground text-sm">
                Please continue to access your account.
              </p>
            </div>
            <div className="my-4">
              <GithubButton />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">
                By continuing, you agree to our{" "}
                <Link href="/terms">Terms of Service</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/login-asset.svg"
            alt="Auth Assets"
            width={300}
            height={300}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
