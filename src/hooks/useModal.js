import { useEffect, useState } from "react"

const useModal = () => {
    const [visible, setVisible] = useState(false);

    const show = () => {
        console.log("called show")
        setVisible(true)};
    const close = () => {
        console.log("called close")
        setVisible(false)};

    useEffect(()=>{console.log("PPP",visible)},[visible])
 return {visible, show, close}
}

export default useModal;