import Image from "next/image";
import { IconPhoneCall, IconMapPin } from "@tabler/icons-react";

const Footer = ()=>{
    return(
        <section>

            <div className="w-full mt-20 bg-[orange] py-4 flex flex-col items-center justify-center">
            <Image
                    src="/logo/petLinkLogoBgYellow.png"
                    width={80}
                    height={80}
                    alt="petLink logo"
            />
            
            <div className="flex">
                <p><IconPhoneCall stroke={2}/></p>
                <p className="ml-1">3541330349</p>
            </div>
            </div>
            
            <div className="bg-grayLight flex justify-around w-full py-2 text-xs items-center ">
                    <p>@ Nicolás Soto</p>
                    <div className="flex items-center">
                        <IconMapPin width={10}/>
                        <p className="ml-[2px]">Cosquín, Córdoba, Argentina</p>
                    </div>
            </div>
            
        </section>
    )
}

export default Footer;
