import style from './Portfolio.module.css'
import image1 from '../../assets/poert1.png'
import image2 from '../../assets/port2.png'
import image3 from '../../assets/port3.png'

export default function Portfolio() {
  return <>
  <div className={`d-flex flex-column justify-content-center align-items-center`}>
      <h2 className="text-uppercase pt-5">portfolio component</h2>
      <div className='d-flex align-items-center'>
                  <div className='divLayout divLayoutColor'></div>
                  <i class="fa-solid fa-star mx-3"></i>
                  <div className='divLayout divLayoutColor'></div>
              </div>

              <div className="container py-4">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.inner} position-relative`}>
                             <img src={image1} alt="" className={`w-100 rounded-3`} />
                             <div className={`cursor-pointer position-absolute top-0 start-0 end-0 bottom-0 rounded-3 d-flex justify-content-md-center align-items-center ${style.layer}`}>
                                <i class="fa-solid fa-plus fa-6x text-light"></i>
                             </div>
                        </div>
                      
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.inner} position-relative`}>
                             <img src={image2} alt="" className={`w-100 rounded-3`} />
                             <div className={`cursor-pointer position-absolute top-0 start-0 end-0 bottom-0 rounded-3 d-flex justify-content-md-center align-items-center ${style.layer}`}>
                                <i class="fa-solid fa-plus fa-6x text-light"></i>
                             </div>
                        </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                        <div className={`${style.inner} position-relative`}>
                             <img src={image3} alt="" className={`w-100 rounded-3`} />
                             <div className={`cursor-pointer position-absolute top-0 start-0 end-0 bottom-0 rounded-3 d-flex justify-content-md-center align-items-center ${style.layer}`}>
                                <i class="fa-solid fa-plus fa-6x text-light"></i>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.inner} position-relative`}>
                             <img src={image1} alt="" className={`w-100 rounded-3`} />
                             <div className={`cursor-pointer position-absolute top-0 start-0 end-0 bottom-0 rounded-3 d-flex justify-content-md-center align-items-center ${style.layer}`}>
                                <i class="fa-solid fa-plus fa-6x text-light"></i>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.inner} position-relative`}>
                             <img src={image2} alt="" className={`w-100 rounded-3`} />
                             <div className={`cursor-pointer position-absolute top-0 start-0 end-0 bottom-0 rounded-3 d-flex justify-content-md-center align-items-center ${style.layer}`}>
                                <i class="fa-solid fa-plus fa-6x text-light"></i>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`${style.inner} position-relative`}>
                             <img src={image3} alt="" className={`w-100 rounded-3`} />
                             <div className={`cursor-pointer position-absolute top-0 start-0 end-0 bottom-0 rounded-3 d-flex justify-content-md-center align-items-center ${style.layer}`}>
                                <i class="fa-solid fa-plus fa-6x text-light"></i>
                             </div>
                        </div>
                    </div>
                </div>
              </div>
             
    </div>
  
  </>
}
