import React, {Component, Fragment} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Home from '../containers/Home'


class Login extends Component{

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            password: this.state.password
        })
        })
        .then(res => res.json())
        .then(data => {
        localStorage.token = data.token
        })
    }

    render(){
        return(
            <Fragment>
                <div>
                    <h2>Login</h2>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Name</label>
                    <input onChange={(e) => this.handleChange(e)} name="name" type="text"  />
                    <label>Password</label>
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
                    <Link to="/home">
                        <input type="submit"/>
                    </Link>
                    </form>
                </div>

                {/* <Switch> */}
                    <Route path="/home" exact component={Home}></Route>
                {/* </Switch> */}

            </Fragment>
        )
    }
}

export default Login