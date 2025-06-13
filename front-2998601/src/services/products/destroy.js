async function destroy(id) {
    const response = await fetch(`http://localhost:8000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })

    const data = await response.json()
    return data.data
}

export default destroy