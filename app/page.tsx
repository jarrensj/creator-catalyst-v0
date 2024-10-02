import ConfettiClick from '@/components/ConfettiClick';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-indigo-800 text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Creator Catalyst
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center">
        Coming Soon
      </p>
      <ConfettiClick />
    </div>
  )
}
