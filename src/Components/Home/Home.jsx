
import style from './Home.module.css'
import image from '../../assets/avataaars.svg'

export default function Home() {
  return <>
  <div className={`${style.Home} text-light bg-lightt`}>
    <div className='d-flex flex-column justify-content-md-center align-items-center'>
        <img src={image} alt="" className='mb-5' />
        <h2 className='text-uppercase text-light'>start Framework</h2>
        <div className='d-flex align-items-center'>
            <div className={`divLayout bg-light`}></div>
            <i class="fa-solid fa-star mx-3 text-light"></i>
            <div className={`divLayout bg-light`}></div>
        </div>
        <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  </>
}
