import React from 'react';

class Navbar extends React.Component{

	render(){

		var listNav = [
			{ img: '/image/home.svg', name: 'Beranda' },
			{ img: '/image/user-group.svg', name: 'Personal List', active:true},
			{ img: '/image/tasks.svg', name: 'Daily Attendance' },
		];

		return(
			<div className='px-5' data-testid='navbar'>
				{listNav.map((val, idx) => (
					<a href='#none' data-testid='link-navbar' key={idx} className={val.active ? 'flex py-1 fill-current text-green' : 'flex py-1' } >
						<img src={val.img} alt='' className='w-5 mr-2' />
						<span>{val.name}</span>
					</a>
					))}
			</div>
			)
	}
}

export default Navbar;