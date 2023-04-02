
const About = () => {
  return (
    <div className='bg-gray-100 min-h-screen mt-20 bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
      {/* <div className="max-w-[1200px] bg-white mx-auto flex flex-col md:flex-row mt-10 shadow-2xl p-10 my-12 dark:bg-transparent"> */}
      <div className="max-w-[1200px] bg-white mx-auto grid md:grid-cols-12 grid-cols-1 mt-10 shadow-2xl p-10 my-12 dark:bg-transparent gap-6 ">
        {/* about section */}
        <div className=" -order-last px-5 md:col-span-8">
          <h1 className="lg:text-5xl md:text-3xl text-2xl  font-bold mb-14 dark:text-white">I’m Sanaullah Mobini. I live in Afghanistan, where I design the future.</h1>
          <p className="lg:text-xl sm:text-base  text-base -tracking-wider font-normal dark:text-gray-300 leading-5">I’ve loved making things for as long as I can remember, and wrote my first program when I was 16 years old, just two months after my brother brought home the brand new Lenavo Laptop that I taught myself to type on</p>
          <p className="lg:text-xl sm:text-base leading-loose text-base -tracking-wider font-normal dark:text-gray-300">
          The only thing I loved more than computers as a kid was football. When I was 8, I started learning football
          but after while I found that working with computer is not just fun or just a work.
          it is kind of live for me 
          </p>
          <p className="lg:text-xl sm:text-base leading-loose text-base -tracking-wider font-normal dark:text-gray-300">
          after few month of working with computer I learned how to write code I learned Python as my first programming language
          then I created my first desktop application with tkinter I created a student managment system for my school with python tkinter and nosql databse that gives me more energy.
          </p>
          <p className="lg:text-xl sm:text-base leading-loose text-base -tracking-wider font-normal dark:text-gray-300">
          I'm very happy that I found my passion very soon in life working on programs web applications mobile applications are very exciting every day I am learning something new
          </p>
          <p className="lg:text-xl sm:text-base leading-loose text-base -tracking-wider font-normal dark:text-gray-300">Currently I am learning MERN technalogies I worked with them but I want to Sharp my Skills</p>
        </div>
        <div className="col-span-4">
          <img className="w-96 h-96" src=".\assets\img1.jpg" alt="" />
        </div>
        {/* end of about container */}
      </div>
    </div>
  )
}

export default About