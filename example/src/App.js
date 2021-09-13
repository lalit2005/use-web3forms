import React from 'react'

import { useMyHook } from 'use-web3forms'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
