import Link from "next/link";

export default function Page2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/" className="px-4 py-2 text-lg rounded-md bg-blue-500">
        Go back
      </Link>
    </main>
  );
}
