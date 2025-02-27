
export const getAgeFn = (dateOfBirth) =>{
    const today = new Date();
    const dateOfBirthN = new Date(dateOfBirth);
    let age = today.getFullYear() - dateOfBirthN.getFullYear();
    const monthDif = today.getMonth() - dateOfBirthN.getMonth();
    
    if(monthDif < 0 || (monthDif === 0 && today.getDate() < dateOfBirthN.getDate())){
        age = age - 1;
    } 

    return age + " años";
}
