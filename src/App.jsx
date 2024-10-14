import {lazy , Suspense} from 'react'

function App() {

  function hehe () {
    return (
      <div className='flex h-screen justify-center items-center text-2xl bg-teal-950 text-white'>
        LAZY LOADING ..... <br/>CONTENT IS LOADING...............
      </div>
    )
}

  const Flightdetails = lazy(()=>import('./Components/Flightdetails'))

  return (
    <div>
      <Suspense fallback={hehe()}>
      <Flightdetails/>
      </Suspense>
    </div>
  )
}

export default App
