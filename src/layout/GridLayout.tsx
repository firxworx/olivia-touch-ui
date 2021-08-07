export const GridLayout: React.FC<{}> = ({ children }) => {
  // remember to consider a permanent header + footer, e.g. grid-cols-3 + grid-rows-3
  return (
    <main className="grid grid-cols-1 grid-rows-1 min-h-screen min-w-max bg-gray-500 justify-center items-center overflow-hidden">
      {children}
    </main>
  )
}
