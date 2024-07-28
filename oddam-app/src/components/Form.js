import React, {Component} from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=> {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if(response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
    render() {
        return(
            <div>
                <form id="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="formSection1">
                        <div className="formName">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input type="text" placeholder="Krzysztof" className="formControl" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="formEmail">
                            <label htmlFor="exampleInputEmail">Wpisz swój email</label>
                            <input type="email" placeholder="abc@xyz.pl" className="formControl" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                    </div>
                    <div className="formSection2">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea className="formControl" rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn2">Wyślij</button>
                </form>
            </div>
        );
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    handleSubmit(event) {
    }
}
export default Form;