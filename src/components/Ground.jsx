import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";

export function Ground(){
    // el onjeto debe tener rotacion y position
    const [ref]  = usePlane(()=>({
        // ?-Math.PI/2 es para que la esfera de la camara este a 90 grados
        // ? De esta manera en  conjunto con la position pareciera que estubieramos parado en el suelo
        rotation:[-Math.PI/2,0,0],
        position:[0,-0.5,0]


    }))
    groundTexture.repeat.set(100,100)
    return(
        <mesh ref={ref}>
            {/* mesh necesita geometria (circulo cuadrano plano etc  ) y material */}
            <planeBufferGeometry attach= "geometry" args={[100,100]}/>
            <meshStandardMaterial attach="material" map={groundTexture}/>
        </mesh>
    )
}