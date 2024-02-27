"use client"

import style  from './../sass/global-error.module.sass';
import Image from 'next/image';

export default function GlobalError({ reset }: ErrorPageProps) {
    return (
        <main className={style.Error}>
            <h1 className={style.Error__title}>Ha ocurrido un error!</h1>
            <Image
                src='/images/error.png'
                width={500}
                height={500}
                alt='Error'
            ></Image>
            <p className={style.Error__message}>Al parecer ha ocurrido un error, has click en el boton solucionar</p>
            <button onClick={ reset } className={style.Error__button}>Solucionar</button>
        </main>
    )
}