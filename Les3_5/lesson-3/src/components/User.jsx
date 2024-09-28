import React, { useState } from 'react'

const User = ({ userInfo }) => {
	const [isGetMore, setIsGetMore] = useState(false)
	return (
		<div className=''>
			<p>Name: {userInfo.name}</p>
			<p>Email: {userInfo.email}</p>
			{isGetMore && (
				<>
					<p>Phone: {userInfo.phone}</p>
					<p>
						Address: {userInfo.address.city}, {userInfo.address.street}
					</p>
					<p>Company: {userInfo.company.name}</p>
				</>
			)}
			<button onClick={() => setIsGetMore((prev) => !prev)}>
				{isGetMore ? 'Hide' : 'Get more'}
			</button>
		</div>
	)
}

export default User
