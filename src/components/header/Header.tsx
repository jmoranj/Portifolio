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
        <a href="https://docs.google.com/document/d/17s88sP1SHfg6f6-1ybz21yWiAB2EQFII4JZAuORyB04/edit?usp=sharing" className="cursor-pointer hover:text-gray-500">Resume</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="https://github.com/jmoranj?tab=repositories" className="cursor-pointer hover:text-gray-500">Projects</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="linkedin.com/in/joaomorandim/" className="cursor-pointer hover:text-gray-500">Linkedin</a>
      </div>
    </div>
  );
}
