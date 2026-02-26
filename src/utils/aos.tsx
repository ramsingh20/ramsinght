'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    useEffect(() => {
        // Dynamically import AOS only when the component mounts in the browser
        import("aos").then((AOS) => {
            AOS.default.init({
                duration: 800,
                once: false,
            });
        });
    }, [])
    
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo;