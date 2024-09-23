import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='mt-28 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto'>
			<p className='text-3xl sm:text-4xl lg:text-5xl text-center font-medium'>
				Register
			</p>
			<hr className='my-5' />
			<form action='' className='w-full md:w-2/3 lg:w-1/3 mx-auto'>
				<div className='flex flex-col space-y-2 mb-5'>
					<label htmlFor='fullname'>Full Name</label>
					<input
						type='text'
						placeholder='Enter Your Name'
						id='fullname'
						name='fullname'
						className='border rounded py-2 px-3 w-full focus:border-sky-500 focus:border-2 outline-none focus:shadow focus:shadow-sky-400'
					/>
				</div>
				<div className='flex flex-col space-y-2 mb-5'>
					<label htmlFor='email'>Email address</label>
					<input
						type='email'
						placeholder='example@gmail.com'
						id='email'
						name='email'
						className='border rounded py-2 px-3 w-full focus:border-sky-500 focus:border-2 outline-none focus:shadow focus:shadow-sky-400'
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='Password'>Password</label>
					<input
						type='password'
						placeholder='Enter Your Password'
						id='Password'
						name='password'
						className='border rounded py-2 px-3 w-full focus:border-sky-500 focus:border-2 outline-none focus:shadow focus:shadow-sky-400'
					/>
				</div>
				<p className='mt-5 text-sm sm:text-base lg:text-lg font-thin'>
					Already have an account?{' '}
					<Link className='text-sky-500 underline' to={'/login'}>
						Login
					</Link>
				</p>
				<button
					type='submit'
					className='bg-gray-600 rounded py-2 px-4 mt-4 text-white w-full'
					disabled
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;