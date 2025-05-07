import React from 'react';

const Navbar = () => {
    return (
        <div className='w-screen h-16 bg-zinc-900 flex items-center px-6 text-white mt-1 '>
            <h1 className="text-xl font-bold">AppAuth</h1>
            <div className="ml-auto flex gap-4">
                <a href="#" className="hover:text-zinc-300"> <p>Home</p> </a>
                <a href="/About" className="hover:text-zinc-300"><p>About</p></a>
                <a href="#" className="hover:text-zinc-300"><p>Contact</p></a>
            </div>
        </div>
    );
};

export default Navbar;