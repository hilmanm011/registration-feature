import React, { Component } from 'react'
import axios from 'axios'

export default class LatihanAxios extends Component {
    
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        axios.get(url)
            .then(users => {
                this.setState({
                users: users.data
            })
        })
    }
    
    render() {
        const { users } = this.state
        return (
            <div>
                {users.length < 1 && <div>Loading...</div>}

                <h3>Form Tambah Data</h3>
                <form>
                    <label>Name: </label>
                    <input type='text' name='text'></input>
                </form>

                
                <h3>Daftar Nama</h3>

                {this.state.users.map((user, index) => {
                    return (
                        <div key ={index}>{ user.name} </div>
                    )
                })}
            </div>
        )
    }
}
