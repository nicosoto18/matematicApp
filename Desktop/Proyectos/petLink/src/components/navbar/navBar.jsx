import { IconAlertTriangle, IconPaw, IconUser } from "@tabler/icons-react";

const NavBar=({goToSection})=>{
    return(
        <section className="w-full my-10 flex justify-between pb-1 shadow-sm flex-wrap gap-4  ">
            
            <button className="flex justify-center items-center font-medium" onClick={()=>goToSection("aboutMe")}>
                <IconPaw stroke={2} height={18}/> <p>Sobre mi</p>
            </button>
            
            <button className="flex justify-center items-center font-medium" onClick={()=>goToSection("owner")}>
                <IconUser stroke={2} height={18}/> <p>Propietario</p>
            </button>

            <button className="flex justify-center items-center font-medium" onClick={()=>goToSection("important")}>
                <IconAlertTriangle stroke={2} height={18}/> <p>Importante</p>
            </button>

        </section>
    )
}

export default NavBar;