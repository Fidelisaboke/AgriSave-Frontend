import { Button } from "@/components/ui/button"
import React, { useState } from "react"


const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => setCount((prev) => prev + 1)}>Click me</Button>
      <div>The count is {count}</div>
    </div>
  )
}

export default Home