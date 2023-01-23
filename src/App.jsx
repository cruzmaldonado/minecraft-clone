import {Canvas} from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { FPV } from "./components/FPV"
import { Player } from "./components/Player"

function App() {


  return (
   
      <Canvas>
    <Sky sunPosition={[100,100,20]}/>
    <ambientLight intensity={0.5}/>
    <FPV/>
    //! entiendase fisica las leyes de la fisica, por ende todos los elementos que
    //! seran afectados por las leyes de la fisica
    <Physics>
        <Ground/>
        <Player/>
    </Physics>
      </Canvas>
    
  )
}

export default App
