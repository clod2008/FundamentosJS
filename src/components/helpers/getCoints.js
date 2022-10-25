
export const getCoints = async (endPoint) => {
    const resp = await fetch(endPoint);
    const data = await resp.json()

    // filtrado de datos
    const coints = data.map(coint => ({
        id: coint.id,
        name: coint.name,
        image: coint.image,
        price: coint.current_price
    }))

    return coints

}

