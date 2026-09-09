import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center space-y-6">
      <Image
        src="/mathbridge-logo.png"
        alt="MathBridge Logo"
        width={90}
        height={20}
        priority
        className="h-8 w-auto object-contain"
      />
      <h1 className="text-4xl font-bold tracking-tight text-primaryBlue">MathBridge</h1>
      <p className="max-w-xl text-lg text-gray/80">
        An education and EdTech platform focused on making learning more accessible, engaging, and personalized.
      </p>
    </main>
  );
}



