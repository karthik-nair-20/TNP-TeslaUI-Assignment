import { Link } from "react-router-dom"

export default function Notfound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-bold tracking-tight text-primary">404</h1>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Oops, the page you were looking for doesnt exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-gray-900 text-white px-8 md:px-28 py-2 rounded-full text-sm"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}