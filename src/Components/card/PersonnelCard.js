import React from 'react';

class PersonnelCard extends React.Component{

	render(){
		return(
			<div className='my-5 lg:my-0 bg-white rounded-lg' data-testid='card-personnel'	>
				<div className='flex justify-between p-2 text-font border-b border-gray_more'>
					<p className='text-xs whitespace-nowrap">'>Personnel ID: <span className='text-green'>{this.props.id}</span></p>
					<img src='/image/more.svg' alt='more' className='w-5' />
				</div>

				<div className='flex lg:block items-center'>
					<div className='m-5'>
						<img src={this.props.pict} alt='personnel' className='flex justify-center items-center border border-gray_more rounded-full w-max-40 h-max-40 mx-auto' />
					</div>


					<div className='p-2 text-heading'>
						<h5 className='text-xs font-bold'>Name</h5>
						<p className='text-sm text-font'>{this.props.name}</p>
						<h5 className='text-xs font-bold'>Telephone</h5>
						<p className='text-sm text-font'>{this.props.phone}</p>
						<h5 className='text-xs font-bold'>Birtdays</h5>
						<p className='text-sm text-font'>{this.props.date}</p>
						<h5 className='text-xs font-bold'>Email</h5>
						<p className='text-sm text-font'>{this.props.email}</p>
					</div>
				</div>

			</div>
			)
	}
}

export default PersonnelCard;