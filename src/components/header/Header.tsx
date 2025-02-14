export default function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-red-500"></div>
        <div className="flex items-baseline gap-2">
          <h1 className="font-bold text-lg m-0">João Morandim</h1>
          <h2 className="text-gray-500 text-base m-0">Fullstack Developer</h2>
        </div>
      </div>
      <div className="flex items-center">
        <span className="cursor-pointer hover:text-gray-500">Resume</span>
        <span className="mx-2 text-gray-400">|</span>
        <span className="cursor-pointer hover:text-gray-500">Projects</span>
        <span className="mx-2 text-gray-400">|</span>
        <span className="cursor-pointer hover:text-gray-500">Blog</span>
        <span className="mx-2 text-gray-400">|</span>
        <span className="cursor-pointer hover:text-gray-500">Contact</span>
      </div>
    </div>
  );
}
