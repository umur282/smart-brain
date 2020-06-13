import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2"
						options={{ max : 55 }}
						style={{ height: 150, width: 180 }} >
				<div className="Tilt-inner pa3"
						 style={{paddingBottom: '0'}}>
					<img src={brain}
							 alt="logo"
							 style={{paddingTop: '5px'}}/>
				</div>
				<a href="https://icons8.com">
					https://icons8.com
				</a>
			</Tilt>
		</div>
	);
}

export default Logo;