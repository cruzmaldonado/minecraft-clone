// esto va a ser una camara en primera persona

import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function FPV () {
    const {camara,gl}=useThree()


    return (
        <PointerLockControls
            args={[camara, gl.domElement]}
        />
    )
}