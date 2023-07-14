const getImgSrc = (file) => {
  if (typeof file !== 'string') return 'error'
  const fullPathAndFilename = getFullPathAndFilename(file)

  const fullPath = fullPathAndFilename[0];
  const filename = fullPathAndFilename[1];


  const modules =
    import.meta.globEager(`${fullPath}/*`)
  return modules[`${fullPath}/${filename}`] ?.default;
}


function getFullPathAndFilename(file) {
  const dirs = file.split("/");
  let path = "/src/assets/";
  let filename = dirs.pop();

  path += dirs.join("/")

  return [path, filename];
}

export default getImgSrc





// const getImgSrc = (file) => {
//   if (typeof file !== 'string') return 'error'
//   const path = `/src/assets/images/home/news/single-news-page/${file}.png`
//   const modules = import.meta.globEager('/src/assets/images/home/news/single-news-page/*.png')
//   return modules[path]?.default
// }




// const getImgSrc = (name) => {
//     if (typeof name === 'undefined') return 'error.png'
//     const path = `/src/assets/${name}.png`
//     const modules = import.meta.globEager('/src/assets/*')
//     return modules[path]?.default
// }






// images/home/news/single-news-page/singlenewthree.png
// icons/tanuki.svg
// characters/boy/tanuki.svg
// decorations/tanuki.svg
// logo/tanuki.svg