import React from 'react';

function EmptyState({image,title,subtitle,offset}){
    return (
		<div className="container emptyContainer">
			<div className="text-center">
				<img
					className="emptyState"
					style={{marginTop:`${offset}rem`}}
					src={image}
					alt=""
				/>
				<p className="h3">{title}</p>
				<p className="h4">{subtitle}</p>
			</div>
		</div>
	);
}

export default EmptyState;