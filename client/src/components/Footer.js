const Footer = () => {
  return (
    <footer className="bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 bg-gray-200">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row text-white justify-between py-10 md:pl-0 pl-5">
        <div>
          <h1 className="sm:text-2xl md:text-3xl text-xl text-gray-900 dark:text-sky-400 mb-7">Blog Name</h1>
          <p className="sm:text-base md:text-xl text-sm text-gray-900 dark:text-gray-300">Programming Hero is a fun, interactive,</p>
          <p className="sm:text-base md:text-xl text-sm text-gray-900 dark:text-gray-300">visual, and frindly way to learn programming</p>
        </div>
        <div>
          <h1 className=" sm:text-2xl md:text-3xl text-xl text-gray-900 dark:text-sky-400 mb-7">Quick Links</h1>
          <ul>
            <li className="my-1 sm:text-base md:text-xl text-sm text-gray-900 dark:text-gray-300">Home</li>
            <li className="my-1 sm:text-base md:text-xl text-sm text-gray-900 dark:text-gray-300">About</li>
            <li className="my-1 sm:text-base md:text-xl text-sm text-gray-900 dark:text-gray-300">Contact</li>
          </ul>
        </div>
        <div>
          <h1 className=" sm:text-2xl md:text-3xl text-xl text-gray-900 dark:text-sky-400 mb-7">Recent Post</h1>
          <p className="sm:text-base md:text-xl text-sm text-gray-900 dark:text-gray-300">
            How to become Programmer
          </p>
        </div>

      </div>
        <hr />
      <div className="max-w-[1200px] mx-auto dark:text-white my-3 pl-5 sm:pl-0">
        <p className="md:text-xl sm:text-base text-black dark:text-gray-400">&copy; 2023 blog name. All Right Reservied.</p>
      </div>
    </footer>
  )
}

export default Footer