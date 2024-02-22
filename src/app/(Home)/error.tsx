"use client"
import Image from 'next/image'
interface ErrorProps {
    error: Error;
    
    reset: () => void;

}
export default function Error(props: ErrorProps){
    return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
    <Image
        src="/images/robot-error.webp"
        alt="Descripción de la imagen"
        width={150}
        height={150}
    />
 
      <p
        style={{
          fontSize: "1.5rem",
          color: "#fff", // Color del texto (puedes cambiarlo)
        }}
      >
        Ha ocurrido un error
      </p>
      <button
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          color: "#fff", // Color del texto del botón (puedes cambiarlo)
          background: "linear-gradient(270deg, #4f56ff, #ff4980)", // Color de fondo del botón (puedes cambiarlo)
          border: "1px solid #ff4980", // Borde del botón (puedes cambiarlo)
          borderRadius: "4px", // Borde redondeado del botón (puedes cambiarlo)
          cursor: "pointer",
          marginTop: "1rem",
        }}
      onClick={props.reset}>
        Intentar de nuevo
      </button>
    </div>
        
    )
}