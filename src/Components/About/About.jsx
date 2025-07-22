import style from './About.module.css'
export default function About() {
  return <>
  <div className={`bg-lightt text-light d-flex flex-column justify-content-center align-items-center ${style.about}`}>
    <h2 className="text-uppercase text-light">about component</h2>
    <div className='d-flex align-items-center'>
                <div className='divLayout bg-light'></div>
                <i class="fa-solid fa-star mx-3 text-light"></i>
                <div className='divLayout bg-light'></div>
            </div>
            <div className="row mt-3 mx-0">
                <p className="col-md-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="col-md-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
  </div>
  </>
}
