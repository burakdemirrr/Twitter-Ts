import React from 'react'
import Modal from "react-modal"


const Login:React.FC  = () => {
  
  const customStyles:any = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:"25px",
  },
};
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      
      <main className='flex text-left' >
        <div className="bg-[url('https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png')] min-h-screen w-[46.7%] bg-cover bg-top flex flex-col items-center justify-center scale-105">
          <img src="https://i.imgur.com/3cXQ0bx.png" className='w-[360px] mt-10 ' alt="" />
        </div>

        <div className='p-10 flex flex-col pl-16'>
          <img src="https://www.iics.k12.tr/wp-content/uploads/2019/07/twitter-logo-png-twitter-logo.png" className="w-12" alt="" />
          <h3 className='text-7xl leading-[5.6rem] tracking-wide font-bold mt-10'>Şu anda olup <br /> bitenler</h3>

          <h6 className='text-4xl font-bold tracking-normal mt-10'>Twitter'a bugün katıl.</h6>

          <button className='flex items-center border-2 max-w-fit rounded-[24px] p-1 px-14 mt-10 hover:bg-slate-100'>
            <img className='w-7 mr-2' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
            Google ile kaydolun
            </button>
            <button className='flex items-center border-2 max-w-fit rounded-[24px] py-1.5 px-[65px] mt-3 hover:bg-slate-100'>
            <img className='w-5 mr-2' src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png" alt="" />
            Apple ile kaydolun
            </button>
            <p className='pl-[126px] mt-4'>veya</p>

            <button className='flex w-[295px] items-center justify-center bg-[#2b9be6] p-2  text-white  border-2 rounded-[24px]  mt-3 hover:bg-[#1a8cd8b5] transition-all duration-100'>
            Telefon numarası veya e-posta adre...
            </button>

            <p className='text-xs w-64 leading-tight mt-1'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>


            <h4 className='text-lg font-bold mt-12 ml-0'>Zaten bir hesabın var mı?</h4>


            <button className='flex w-[295px] items-center justify-center bg-white p-2  text-[#2b9be6] font-bold border-2 rounded-[24px]  mt-3 hover:bg-slate-100 transition-all duration-100'
            onClick={openModal}>
            Giriş Yap
            </button>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex flex-col  h-[600px] rounded-xl w-[550px] px-12'>
          <img className='w-8 mb-6' src="https://www.iics.k12.tr/wp-content/uploads/2019/07/twitter-logo-png-twitter-logo.png" alt="Twitter logo" />
          <h3 className='text-3xl mb-7 font-bold'>Twitter'a giriş yap</h3>

          <input type="text" className='h-14 border-2 border-gray-300 px-2 mt-2 rounded-md
           focus:outline-none focus:border-sky-500 focus:ring-5 focus:ring-sky-500 placeholder:text-slate-700
          ' placeholder='Kullanıcı Adı'  />

          <input type="password" className='h-14 border-2 border-gray-300  px-2 rounded-md mt-5  
           focus:outline-none focus:border-1 focus:border-sky-500 focus:ring-5 focus:ring-sky-500 placeholder:text-slate-700
          ' placeholder='Şifre' />
          <p className='mt-1  text-blue-700 text-[.8rem] cursor-pointer  hover:underline underline-offset-1 ml-2'>Şifreni mi Unuttun?</p>

          <button className='bg-gray-400 text-white font-bold
          h-14 rounded-3xl mt-48
          '>Giriş Yap</button>       

          <p className='mt-6 text-gray-500'>Henüz bir hesabın yok mu? <span className='text-blue-600 cursor-pointer'>Kaydol</span></p>   
        </div>
      </Modal>
      </main>
    </div>
  )
}
export default Login;
