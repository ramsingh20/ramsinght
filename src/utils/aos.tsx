'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    useEffect(() => {
        // We dynamically import AOS *inside* the useEffect. 
        // This hides the library completely from the Next.js build server!
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