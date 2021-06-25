import React from 'react';

class Header extends React.Component{

	render(){
		return(
			<div className='grid grid-cols-2 gap-2 px-5 py-7 items-center' data-testid='header'>
				<div className='flex items-center'>
					<svg className='w-5 lg:w-0 mr-2' viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg"><path d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/></svg>
					<h1 className='text-4xl text-green font-bold font-title'>Gadjian</h1>
				</div>
				<div className='flex justify-end items-center'>
					<p className='hidden lg:block mx-2'>Hallo, <span className='text-green'>Gadjian user</span></p>
					<div className='flex justify-center items-center border border-gray-400 rounded-full h-10 w-10'>
						<p className='text-xs'>photo</p>
					</div>
				</div>
			</div>
			)
	}

}

export default Header;