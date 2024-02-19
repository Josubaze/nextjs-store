import styles from './Description.module.sass'
import Image from 'next/image'

const PLACEHOLDER_IMAGE = 'data:image/webp;base64,UklGRjgEAABXRUJQVlA4WAoAAAAgAAAAiAAAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggSgIAANAWAJ0BKokAiQA+bS6SRrs0rKEr1VyLYA2JZwaD5tiuzjuyYIKdRslduhDUFBfGlxXMsGMgGDRYOS9zeX7O/iuFbNUfuy/spDdux+7rgOZ/fVrJW6doCYoFj3VIVYRRo/02Nk62pOsxr+CUSlA7lRzSKjjrRAG/LkuJ6+4jWHG95g+CijHL2N96XMbPDR+otOizUvjiCp4NETicMsGQKSGH33xuJyQptXWSs8RCka4vsJzC6YOy0l//R/Z50poAAP7xr9xjnW+1wuvDro9OT+i5RAMTagzIPGvp/9E6XyMW14THBY3xqOkU/gvUxrOvmzv2PFilqe/bfAVR/51QEjn0ODmHBbipgFxGDYmuFS1qr/5+/utJquNJk25rf2lr5ZIyhm0PSo0jsB5e4MNEARlqpk0qoCD9DFvzl/EegV9hL0j4S1OpIIqupbyRByzZpQbasRu5fpmlNNDuq3nXJQeVAJVgFnwglljqbneVeWiINf5Z96QzRtOpHhXaFYBCOW2M+o6ynRoQhknZc8WKxcp4Q6Y1q/dlvAgxEq1ELS7L3p3PQ4P1WOvqqKqyqsHi8vI5BmVz/E4ELYOUxm/IWdQN/ONVRjP6blqz6e9ketqPs7Cbx+JLDeZjcA8uoig3/sUMv5hjSnGC59YzYyImtKIaNGGmHQLj3twefbJtme0tb0sH6quuROh+crrV1NCzcbPqrq9xaUgMHiAC8M0XpmcpGfZ9kVjGuybxV5X4gUD7Cq/QyV+/CRNZd+MIIGL4a+0ZlkxbBxGAAAA='

export const Descrition = () =>  {

    return (
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
                <Image // variante de etiqueta img en NEXT que permite aplicaciones de dif filtros y mejor optimización
                    src="/images/description.jpeg"
                    alt="products marketplace"
                    fill
                    placeholder='blur'
                    blurDataURL= {PLACEHOLDER_IMAGE}
                />
            </div>

            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}