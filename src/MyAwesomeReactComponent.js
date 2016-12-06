import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
 
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
 
const MyAwesomeReactComponent = () => (
	<RaisedButton label="Default" />
	<div>
		<Card>
			<CardHeader
				title="title"
				subtitle="subtitle"
				avatar="noImage"
			/>
			<CardTitle title="Card title" subtitle="Card subtitle"/>
			<CardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			</CardText>
		</Card>
	</div>
);
 
export default MyAwesomeReactComponent;