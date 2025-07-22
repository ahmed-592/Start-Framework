import style from './Footer.module.css'
export default function Footer() {
  return <>
<div className={`${style.bgLightt} py-5`}>
  <div className="container py-5">
    <div className="row text-light g-5">
      <div className="col-sm-4">
        <div className="text-center">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="text-center d-flex align-items-center flex-column">
          <h3>AROUND THE WEB</h3>
         <ul className="list-unstyled d-flex justify-content-evenly w-50 px-2">
          <li className={`p-2 rounded-circle border border-1 border-light ${style.icons} d-flex justify-content-center align-items-center`}><i className="text-light fa-brands fa-facebook"></i></li>
          <li className={`p-2 rounded-circle border border-1 border-light ${style.icons} d-flex justify-content-center align-items-center`}><i className="text-light fa-brands fa-twitter"></i></li>
          <li className={`p-2 rounded-circle border border-1 border-light ${style.icons} d-flex justify-content-center align-items-center`}><i className="text-light fa-brands fa-linkedin-in"></i></li>
          <li className={`p-2 rounded-circle border border-1 border-light ${style.icons} d-flex justify-content-center align-items-center`}><i className="text-light fa-solid fa-globe"></i></li>
         </ul>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="text-center">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
         
        </div>
      </div>
    </div>
  </div>
</div>

<div className={`${style.bgDark} p-4`}>
<p className='text-center text-light'>Copyright © Your Website 2021</p>
</div>

  </>
}


  