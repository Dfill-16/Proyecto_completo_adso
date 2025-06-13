async function update(product, id) {
    const response = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify(product)
    })

    const data = await response.json()
    return data
}

export default update