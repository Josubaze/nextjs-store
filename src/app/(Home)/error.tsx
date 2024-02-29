"use client"
import Image from 'next/image'
import style from 'src/sass/global-error.module.sass'

export default function Error(props: ErrorPageProps){
    return (
      <div
          className={style.Error}
        >
        <Image
            src="/images/error.png"
            alt="Error"
            width={250}
            height={250}
        />
  
        <p
          className={style.Error__message}
        >
          Ha ocurrido un error
        </p>
        <button
          className={style.Error__button}
          onClick={props.reset}
        >
          Intentar de nuevo
        </button>
      </div>
        
    )
}