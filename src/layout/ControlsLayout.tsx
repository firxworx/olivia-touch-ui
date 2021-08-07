const ControlsHeader: React.FC = () => {
  return (
    <header className="bg-gray-800 border-y-2 border-gray-700">
      <div className="container mx-auto text-center p-4">
        <span className="text-sm leading-none text-gray-300">OLIVIA PARTY TOUCH</span>
      </div>
    </header>
  )
}

const ControlsFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-y-2 border-gray-700">
      <div className="container mx-auto text-center p-4">
        <span className="text-sm leading-none text-gray-300">OLIVIA PARTY TOUCH</span>
      </div>
    </footer>
  )
}

export const ControlsLayout: React.FC = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <ControlsHeader />
      <div className="flex-1 z-0 h-full w-full">{children}</div>
      <ControlsFooter />
    </div>
  )
}
