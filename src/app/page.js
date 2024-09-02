"use client";
import Nav from '@/component/main/nav'; // Make sure this path is correct

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav /> {/* Use the correct component name */}
      Main page
    </main>
  );
}
