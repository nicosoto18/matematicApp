import Image from "next/image";


const Header = ()=>{
    return(
        <div className="w-full h-16 bg-[orange]">
            <div className="ml-10">
                <Image
                    src="/logo/petLinkLogoBgYellow.png"
                    alt="PetLink Logo"
                    width={60}
                    height={60}
                    />
            </div>
        
        </div>
    )
}

export default Header;