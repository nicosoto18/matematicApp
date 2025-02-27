import { IconAlertTriangle } from "@tabler/icons-react";


const DefaultAlertPoster = ({sectionRef})=>{
    return(
        <section 
        className="w-auto lg:max-w-96 bg-orangeLight flex flex-col items-center justify-center text-center p-3 rounded-xl my-10 mx-auto border-2 border-grayLight h-auto"
        ref={sectionRef.important}
        >
            
            <div><IconAlertTriangle/></div>
            <p className="mt-2">
                Si me encontrás lejos de mi dirección y me ves perdido, por favor, contactá a mi 
                dueño. ¡Gracias por ayudarme!
            </p>

        </section>
    )
}

export default DefaultAlertPoster;