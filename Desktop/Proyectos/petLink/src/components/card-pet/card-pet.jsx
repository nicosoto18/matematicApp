import Image from "next/image";
import { IconAlertTriangle } from "@tabler/icons-react";
import { getAgeFn } from "@/lib/getAgeFn";

const CardPet = ({petParam, sectionRef})=>{
    
    const getAge = (dateOfB)=>{
        if(dateOfB == "No especifica"){
            return "No especifica"
        } else{
            return getAgeFn(dateOfB)
        }
    }

    const petName = petParam.pet.petName || false;
    const locality = petParam.pet.locality || false;
    const neighborhood = petParam.pet.neighborhood || false;
    const approximateAddress = petParam.pet.approximateAddress || false;
    const age = getAge(petParam.pet.dateOfBirth);
    const importantInfoToHighLight = petParam.pet.importantInfoToHighlight || false;
    const photoProfile = petParam.pet.photoProfile || false;
    

    return(
        <section className="w-full lg:w-auto bg-grayLight rounded-xl p-6" ref={sectionRef.aboutMe}>

            {
                petName && locality && neighborhood && age && photoProfile &&
                (   
                    <>  

                        {/* foto de perfil */}
                        <div className="flex mx-auto items-center justify center w-40 h-40 relative mb-4">
                        <Image
                            src= {photoProfile}
                            alt="Imagen de la mascota"
                            fill
                            className="object-cover rounded-full"

                        />
                        </div>

                        
                        {/* datos obligatorios: nombre, localidad, barrio, direcc aprox, edad*/}
                        <div className="lg:w-[70%] lg:mx-auto">

                            <div className="text-center lg:mt-4 lg:text-left lg:flex lg:items-center">
                                <p className="text-sm lg:mr-auto lg:w-1/2">Nombre:</p>
                                <p className="font-bold lg:w-1/2">{petName}</p>
                            </div>

                            <div className="text-center mt-1 lg:mt-4 lg:text-left lg:flex lg:items-center">
                                <p className="text-sm lg:mr-auto lg:w-1/2">Localidad:</p>
                                <p className="font-bold lg:w-1/2">{locality}</p>
                            </div>

                            <div className="text-center mt-1 lg:mt-4 lg:text-left lg:flex lg:items-center">
                                <p className="text-sm lg:mr-auto lg:w-1/2">Barrio:</p>
                                <p className="font-bold lg:w-1/2">{neighborhood}</p>
                            </div>

                            <div className="text-center mt-1 lg:mt-4 lg:text-left lg:flex lg:items-center">
                                <p className="text-sm lg:mr-auto lg:w-1/2">Direcccion aprox:</p>
                                <p className="font-bold lg:w-1/2">{approximateAddress}</p>
                            </div>

                            <div className="text-center mt-1 lg:mt-4 lg:text-left lg:flex lg:items-center">
                                <p className="text-sm lg:mr-auto lg:w-1/2">Edad</p>
                                <p className="font-bold lg:w-1/2">{age}</p>
                            </div>

                        </div>       
                    </>
                )
            }
            
            {/* la informacion importante no es obligatoria */}
            {
                importantInfoToHighLight && (
                    <div className="bg-[orange] mx-auto mt-6 max-w-[90%] lg:max-w-[70%] flex flex-col items-center justify-center p-3 rounded-xl text-center">
                        <IconAlertTriangle />
                        <p className="mt-2">{importantInfoToHighLight}</p>
                        
                    </div>
                )
            }
            
        </section>
    )
};

export default CardPet;