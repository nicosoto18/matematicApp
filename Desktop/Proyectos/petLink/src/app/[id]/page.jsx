"use client";
import { useParams } from "next/navigation";
import data from "../../data/pets.json"
import NavBar from "@/components/navbar/navBar";
import CardPet from "@/components/card-pet/card-pet";
import DefaultAlertPoster from "@/components/default-alert-poster/defaultAlertPoster";
import OwnerInformation from "@/components/owner-information/ownerInformation";
import { useRef } from "react";

export default function PetPage() {
    
    const params = useParams();
    const pet = data.find((m) => m.id == params.id);
    
    if (!pet) return <h1>No encontrada</h1>;
    
    const sectionRef = {
      aboutMe : useRef(null),
      owner: useRef(null),
      important: useRef(null)
    }

    const goToSection=(section)=>{
      sectionRef[section]?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return (
      <>
        
        <section className="lg:hidden">
            <NavBar goToSection={goToSection}/>
        </section>   
        
        <section className="lg:mt-10 lg:flex lg:items-start">
              
              <div className="lg:w-[50%]">
                  <CardPet petParam={pet} sectionRef={sectionRef}/>
              </div>
              
              <div className="lg:mx-auto lg:w-[50%]">
                <DefaultAlertPoster sectionRef={sectionRef} />
                <OwnerInformation petParam={pet} sectionRef={sectionRef}/>
              </div>
              
        </section> 
      
      </>
    );
  }
