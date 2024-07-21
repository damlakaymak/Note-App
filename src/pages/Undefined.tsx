import React from 'react'
import { Link } from 'react-router-dom'

const Undefined = () => {
  return (
    <div className='container mx-auto py-5 min-vh-100 d-flex justify-content-center  align-items-center flex-column gap-5'>
  <h1 className='text-danger'>404</h1>
  <p>Üzgünüz aradığınız sayfa bulunamadı</p>

  <p>Buradan devam edebilirsiniz
  <Link to="/">Anasayfa</Link> </p>

  <p>
  Not oluşturmak isterseniz <Link to={"/new"}>Oluştur</Link>                
  </p>
    </div>
  )
}

export default Undefined
