import { IconPhoneCall, IconBrandWhatsapp, IconBrandInstagram, IconBrandFacebook  } from "@tabler/icons-react";

const OwnerInformation = ({petParam, sectionRef})=>{

    const name = petParam.owner.ownerName || false;
    const lastName = petParam.owner.ownerLastName || false;
    const phoneNumber = petParam.owner.phoneNumber || false;
    const altPhoneNumber = petParam.owner.alternativePhoneNumber || false;
    const whatsApp = petParam.owner.whatsApp
    const instagram = petParam.owner.instagram || false;
    const facebook = petParam.owner.facebook || false;
     
    return(
        <section ref={sectionRef.owner} className="max-w-96 mx-auto">

            <div className="bg-grayLight w-full p-3 rounded-xl text-center">
                {/* nombre y apellido del propietario/a */}
                <p className="text-sm">Propietario/a</p>
                { name && lastName && <p className="font-bold"> {name} {lastName} </p> }
                
                {/* Metodos directos de contactos del propietario */}
                <div className="flex justify-center mt-3">
                    
                    {
                        phoneNumber && (
                            <button className="mx-4">
                                <a href={`tel: ${phoneNumber}`}><IconPhoneCall/></a>
                            </button>
                        )
                    }

                    {
                        whatsApp && (
                            <button className="mx-4">
                                <a href={`https://api.whatsapp.com/send?phone=${whatsApp}`}><IconBrandWhatsapp/></a>
                            </button>
                        )
                        
                    }

                    {
                        facebook && (
                            <button className="mx-4">
                                <a href={`https://www.facebook.com/${facebook}`}><IconBrandFacebook/></a>
                            </button>                            
                        )
                    }

                </div>
            </div>

            <div className="w-[75%] mx-auto mt-4">
                
                {
                    phoneNumber && (
                        <div className="flex justify-between  shadow-sm">
                            <p>Teléfono</p>
                            <p className="font-bold">{phoneNumber}</p>
                        </div>
                    )
                }

                {
                    altPhoneNumber && (
                        <div className="flex justify-between  shadow-sm mt-3">
                            <p>Tel alternativo</p>
                            <p className="font-bold">{phoneNumber}</p>
                        </div>
                    )
                }

            </div>

        </section>
    )
}

export default OwnerInformation;