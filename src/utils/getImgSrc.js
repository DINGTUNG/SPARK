const getImgSrc = (name) => {
    if (typeof name === 'undefined') return 'error.png'
    const path = `/src/assets/images/${name}.png`
    const modules = import.meta.globEager('/src/assets/images/*')
    return modules[path]?.default
}

export default getImgSrc