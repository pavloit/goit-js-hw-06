const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageList = document.querySelector('.gallery');
const markup = images
  .map(({ url, alt }) =>
    `<li>
      <img src = "${url}" alt = "${alt}" class="img-style"  />
    </li>`)
  .join('');
const styles = 
`
<style>

.img-style {
  max-width: 100%;
  border-radius: 20px;
}

.wrapper {
  display: grid;
  grid-gap: 20px;
  list-style-type: none;
}

</style >
`

imageList.classList.add("wrapper");
imageList.insertAdjacentHTML('beforeend', styles + markup);