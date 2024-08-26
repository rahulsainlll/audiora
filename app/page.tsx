import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 ">Welcome to Audiora</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/podcasts"
          className="p-4 border rounded-lg hover:bg-gray-100"
        >
          <h2 className="text-xl font-semibold">Podcasts</h2>
          <p>Search and listen to your favorite podcasts while reading</p>
        </Link>
        
        <Link href="/blog" className="p-4 border rounded-lg hover:bg-gray-100">
          <h2 className="text-xl font-semibold">Blog</h2>
          <p>Read our latest articles</p>
        </Link>
      </div>
    </div>
  );
}
