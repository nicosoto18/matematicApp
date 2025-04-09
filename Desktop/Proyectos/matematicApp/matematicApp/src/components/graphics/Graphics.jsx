import style from "./Graphics.module.css"


export const UnionGraphic = ()=>{
    return(
        <>
            <section className="flex items-center justify-center mx-auto relative">
                <div className={style.unionCircle1}></div>
                <div className={style.unionCircle2}></div>
            </section>
        </>

    )
}

export const IntersectionGraphic = ()=>{
    return(
        <>
            <section className="flex items-center justify-center mx-auto relative">
                <div className={style.intersectionCircle1}></div>
                <div className={style.intersectionCircle2}></div>
                <div class={style.intersectionCenter}></div>
            </section>
        </>

    )
}


export const SubtractionGraphic = ()=>{
    return(
        <>
            <section className="flex items-center justify-center mx-auto relative">
                <div className={style.subtractionCircle1}></div>
                <div className={style.subtractionCircle2}></div>
            </section>
        </>

    )
}

export const SimetricDiferenceGraphic = ()=>{
    return(
        <>
            <section className="flex items-center justify-center mx-auto relative">
                <div className={style.simetricDiferenceCircle1}></div>
                <div className={style.simetricDiferenceCircle2}></div>
                <div className={style.simetricDiferenceCircle3}></div>
            </section>
        </>

    )
}

export const ComplementGraphic = ()=>{
    return(
        <>
            <section className="flex items-center justify-center mx-auto relative">
                <div className={style.complementUniverse}></div>
                <div className={style.complementCircle1}></div>
                <div className={style.complementCircle2}></div>
            </section>
        </>

    )
}