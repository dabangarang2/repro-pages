import { TestComponent } from "@/components/test-component";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <TestComponent />
      <Link
        href="/page2"
        className="mt-4 px-4 py-2 text-lg rounded-md bg-blue-500"
      >
        Go to another page
      </Link>
    </main>
  );
}
