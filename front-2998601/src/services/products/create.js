async function create(product) {
    const response = await fetch('http://localhost:8000/api/products/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify(product)
    })

    const data = await response.json()
    return data
}

export default create