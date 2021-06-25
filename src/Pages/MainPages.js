import React from 'react';
import { get } from './../Lib/axios';
import Loading from './../Components/Loading';

import CardPersonnel from './../Components/card/PersonnelCard';

class MainPages extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			page: 1,
			all_personnel:[],
			show_personnel: [],
			isLoading: false,
		}
	}

	getPersonnelApi = async () => {

		this.setState({isLoading : true});

		await get(`https://randomuser.me/api/?results=28`)
				.then(res => {
					this.setState({
						all_personnel: res.data.results,
						show_personnel: res.data.results.slice(0,4),
					});
				}).catch(err => console.log(err));

		this.setState({isLoading: false});
	}

	_btnPersonnel = async (type) => {

		if (type === 'next' && this.state.page < this.state.all_personnel.length/4){
			// jika posisi page = 1 dan click btn makan akan return 4
			// state page personnel updated dislice 4-8 untuk page 2
			let first_personnel = (this.state.page + 1) * 4 - 4;

			await this.setState({
				page: this.state.page + 1,
				show_personnel: this.state.all_personnel.slice(first_personnel, first_personnel + 4),
			})
		} else if(type === 'previos' && this.state.page > 1) {

			let first_personnel = (this.state.page - 1) * 4 - 4;

			await this.setState({
				page: this.state.page - 1,
				show_personnel: this.state.all_personnel.slice(first_personnel, first_personnel + 4),
			})
		}

	}

	componentDidMount(){
		this.getPersonnelApi();
	}

	render(){
		return(
			<>

				{/* head main */}
				<div className='grid lg:grid-cols-2 bg-white p-5	'>

					<div>
						<h1 className='text-3xl font-bold text-green'>Personnel List</h1>
						<p className='text-font'>List of all personnel</p>
					</div>
					<div className='lg:flex lg:p-2 justify-end '>
						<button className='flex items-center mx-1 bg-transparent border border-gray_more p-2 w-full my-2 lg:my-0 lg:w-max'>
							<svg className='w-4 mr-2 fill-current text-green' viewBox="0 0 492 492" xmlns="http://www.w3.org/2000/svg"><path d="M318.75 280.5h-20.4l-7.649-7.65c25.5-28.05 40.8-66.3 40.8-107.1C331.5 73.95 257.55 0 165.75 0S0 73.95 0 165.75 73.95 331.5 165.75 331.5c40.8 0 79.05-15.3 107.1-40.8l7.65 7.649v20.4L408 446.25 446.25 408l-127.5-127.5zm-153 0C102 280.5 51 229.5 51 165.75S102 51 165.75 51 280.5 102 280.5 165.75s-51 114.75-114.75 114.75z"/></svg>
							<span className='text-sm text-font'>Find Personnels</span>
						</button>
						<button className='flex items-center mx-1 bg-green p-2 w-full lg:w-max my-2 lg:my-0'>
							<span className='text-sm text-white font-bold'>ADD PERSONNEL</span>
							<svg className='w-4 ml-1 fill-current text-white' viewBox="0 0 426.667 426.667" xmlns="http://www.w3.org/2000/svg"><path d="M405.332 192H234.668V21.332C234.668 9.559 225.109 0 213.332 0 201.559 0 192 9.559 192 21.332V192H21.332C9.559 192 0 201.559 0 213.332c0 11.777 9.559 21.336 21.332 21.336H192v170.664c0 11.777 9.559 21.336 21.332 21.336 11.777 0 21.336-9.559 21.336-21.336V234.668h170.664c11.777 0 21.336-9.559 21.336-21.336 0-11.773-9.559-21.332-21.336-21.332zm0 0"/></svg>
						</button>
					</div>

				</div>

				{/* card personnel */}
				{this.state.isLoading ? <Loading /> : (
					<>
						<div className='lg:grid lg:grid-cols-4 gap-7 my-16'>
							{this.state.show_personnel.map((val, idx) => (
								<CardPersonnel
									key={idx}
									id={val.id.value}
									pict={val.picture.large}
									name={val.name.first + ' ' + val.name.last}
									phone={val.phone}
									date={val.date}
									email={val.email}
								/>
							))}
						</div>
					</>
					)}



				<div className='flex justify-center'>

					<button
						className={this.state.page === 1 ? 'flex items-center mx-3 fill-current text-font cursor-default focus:outline-none' : 'flex items-center mx-3 focus:outline-none'}
						onClick={() => this._btnPersonnel('previos')}>
							<svg className='w-3 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.6 246.1L382.67 62.04a26.68 26.68 0 007.86-19.02 26.7 26.7 0 00-7.86-19.04L366.54 7.86C361.48 2.8 354.7 0 347.5 0s-13.96 2.8-19.02 7.86L109.33 227.01a26.69 26.69 0 00-7.85 19.08 26.69 26.69 0 007.85 19.11l218.94 218.94A26.7 26.7 0 00347.3 492c7.21 0 13.97-2.8 19.04-7.86l16.12-16.12a26.95 26.95 0 000-38.06L198.61 246.1z"/></svg>
							<span>Previos Page</span>
					</button>
					<button
						className={this.state.page === this.state.all_personnel.length/4 ? 'flex items-center mx-3 fill-current text-font cursor-default focus:outline-none' : 'flex items-center mx-3 focus:outline-none'}
						onClick={() => this._btnPersonnel('next')}>
						<span>Next Page</span>
						<svg className='w-3 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M382.68 226.8L163.73 7.86C158.67 2.79 151.91 0 144.7 0s-13.97 2.8-19.03 7.86l-16.13 16.12a26.95 26.95 0 000 38.06L293.4 245.9 109.34 429.96a26.74 26.74 0 00-7.86 19.03c0 7.21 2.8 13.97 7.86 19.04l16.12 16.11c5.07 5.07 11.83 7.86 19.03 7.86s13.97-2.79 19.04-7.86L382.68 265a26.76 26.76 0 007.85-19.09 26.75 26.75 0 00-7.85-19.1z"/></svg>
					</button>
				</div>

				<div className='flex justify-center text-font my-2'>
					<p>Page {this.state.page} of {this.state.all_personnel.length/4}</p>
				</div>

			</>
			)
	}
}

export default MainPages;