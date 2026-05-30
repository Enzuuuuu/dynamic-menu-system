// images.js
const images = import.meta.glob('./*.png', {
  eager: true,
  import: 'default'
})

export const getImage = (name) => images[`./${name}`]