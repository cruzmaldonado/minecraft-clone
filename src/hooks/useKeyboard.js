import { useEffect, useState } from "react";
//? colocamos todas las acciones que podemos realizar con en teclado
const ACTIONS_KEYBOARD_MAP={
    KEYW: 'moveForward',
    KEYS: 'moveBackward',
    KEYA: 'moveLeft',
    KEYD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log'
}
//?aca realizamos el cambio de las distintas acciones que podemos realizar
export const useKeyboard=()=>{
    const [actions, setActions] = useState({
        moveForward:false,
        moveBackward:false,
        moveLeft:false,
        moveRight:false,
        jump:false,
        dirt:false,
        grass:false,
        glass:false,
        wood:false,
        log:false
    })

    //?aca decimos como se va a realizar la accion
    useEffect(()=>{
        const handleKeyDown=event =>{
            const {code}=event
            console.log(code)
        }
        //? para escuchar el evento del mouse y realizar acciones
        document.addEventListener('keydown',handleKeyDown)

        //? ahora removemos el evento 
        return()=>{
            document.removeEventListener('keydown',handleKeyDown)
        }
    },[])
    return actions
}