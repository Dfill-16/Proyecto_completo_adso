async function getAll() {
    const response = await fetch('http://localhost:8000/api/products/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })

    const data = await response.json()
    return data
}

export default getAll