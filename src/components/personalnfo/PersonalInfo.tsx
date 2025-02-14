import Image from 'next/image'

export default function PersonalInfo() {
  return (
    <div className="flex items-center justify-center gap-8 max-w-4xl mx-auto py-12">
      <div className="relative aspect-square w-96 h-96">
        <Image 
          src="/joao.jpeg" 
          alt="Profile Picture" 
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">João Morandim</h1>
        <h2 className="text-xl text-gray-700">little bit about me</h2>
        <h3 className="text-lg text-gray-600">A young man who always seeks to learn and improve, pationate about technology and always looking for new challenges.</h3>
      </div>
    </div>
  );
}
