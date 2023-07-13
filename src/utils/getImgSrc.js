const getImgSrc = (name) => {
  // if ( name === 'undefined') return 'error'
  const path = `/src/assets/${name}`;

  const modules = import.meta.globEager('/src/assets/images/*.(jpg|JPG|png|PNG|svg)', { as: "url", eager: true });
  
  return modules[path]?.default
}

export default getImgSrc