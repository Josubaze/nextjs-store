import styles from './Description.module.sass'
import Image from 'next/image'

export const Descrition = () =>  {

    return (
        <section className={styles.Description}>
            <Image // variante de etiqueta img en NEXT que permite aplicaciones de dif filtros y mejor optimización
                src="/images/description.jpeg"
                alt="products marketplace"
                width={500}
                height={300} 
                priority={true} // viene por default en false para cargar de ultimo la imagen
                quality={50} 
            />
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}