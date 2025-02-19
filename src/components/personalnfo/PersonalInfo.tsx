import Image from 'next/image'

export default function PersonalInfo() {
  return (
    <div className="flex items-center justify-center gap-10 max-w-4xl mx-auto mt-32">
      <div className="relative aspect-square w-96 h-96 border-4 rounded-full animate-pulse-border hover:animate-spin border-red-700">
        <a href="https://www.instagram.com/jmorangus/"><Image 
          src="/coverPhoto.jpeg" 
          alt="Profile Picture" 
          fill
          className="rounded-full object-cover"
          priority
        /></a>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">João Morandim</h1>
        <h2 className="text-xl text-gray-700">little bit about me</h2>
        <h3 className="text-lg text-gray-600">A young man who always seeks to learn and improve, pationate about music and always looking for new challenges.</h3>
      </div>
    </div>
  );
}
