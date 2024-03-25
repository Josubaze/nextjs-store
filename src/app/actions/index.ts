"use server" // Server Actions , evita que se renderice en el cliente

export const handlerCreateServer = (formData) => {
    console.log("handlerCreateServer", formData);
}   