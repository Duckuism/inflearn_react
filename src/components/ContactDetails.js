import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends Component{

	constructor(props){
		super(props);

		this.state = {
			isEdit:false,
			name:'',
			phone:''
		};

		this.handleToggle = this.handleToggle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleToggle(){
		if(!this.state.isEdit){
			this.setState({
				name: this.props.contact.name,
				phone: this.props.contact.phone
			})
		} else{
			this.handleEdit();
		}

		this.setState({ //setState는 비동기. setState가 완료 되기 전에 아래 코드 실행
			isEdit: !this.state.isEdit
		});
		//만약 setState가 된 이후의 값을 보여주게 하려면
		//e.target.value로 해야한다. 혹은 !this.state.isEdit을 그대로 쓰거나.
	}

	handleChange(e){
		let nextState = {};
		nextState[e.target.name] = e.target.value; 
		// nextState라는 빈 객체에 키와 밸류 한 쌍을 추가. 여기서 name은 input의 name
		this.setState(nextState);
	}

	handleEdit(){
		this.props.onEdit(this.state.name, this.state.phone); 
	}

	handleKeyPress(e){
		if(e.charCode===13){
			this.handleToggle();
		}
	}	

	render(){

		const details = (
			<div>
				<p>{this.props.contact.name}</p>
				<p>{this.props.contact.phone}</p>
			</div>
		);

		const edit = (
			<div>
				<p>
				<input 
					type="text"
					name="name"
					placeholder="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				</p>
				<p>
				<input 
					type="text"
					name="phone"
					placeholder="phone"
					value={this.state.phone}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				</p>		
			</div>
		);

		const view = this.state.isEdit ? edit : details;

		const blank = (<div>Not selected</div>);

		return(
			<div>
				<h2>Details</h2>
				{this.props.isSelected ? view : blank}
				<p>
					<button onClick={this.handleToggle}>
						{this.state.isEdit ? 'OK' : 'Edit'}
					</button>
					<button onClick={this.props.onRemove}>Remove</button>	
				</p>
				
			</div>
		)
	}
}

ContactDetails.defaultProps = {
	contact:{
		name: '',
		phone: ''
	},

	onRemove: () => {console.error('onRemove not defined');},
	onEdit: () => {console.error('onEdit not defined');}
};

ContactDetails.propTypes={
	contact: PropTypes.object,
	onRemove: PropTypes.func,
	onEdit: PropTypes.func
}