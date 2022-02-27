import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            identificationNumber: '',
            firstName_lastName: '',
            monthlyIncome: '',
            phoneNumber: ''

        }
        this.changeidentificationNumberHandler = this.changeidentificationNumberHandler.bind(this);
        this.changefirstName_lastNameHandler = this.changefirstName_lastNameHandler.bind(this);
        this.changemonthlyIncomeHandler = this.changemonthlyIncomeHandler.bind(this);
        this.changephoneNumberHandler = this.changephoneNumberHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    
    saveUser = (e) => {
        e.preventDefault();
        let user = {identificationNumber: this.state.identificationNumber, firstName_lastName: this.state.firstName_lastName, monthlyIncome: this.state.monthlyIncome, phoneNumber: this.state.phoneNumber};
        console.log('user => ' + JSON.stringify(user));

        // step 3
            UserService.createUser(user).then(res =>{
                this.props.history.push('/kredibasvurusu');  
            });
    }
    
    changeidentificationNumberHandler= (event) => {
        this.setState({identificationNumber: event.target.value});
    }

    changefirstName_lastNameHandler= (event) => {
        this.setState({firstName_lastName: event.target.value});
    }

    changemonthlyIncomeHandler= (event) => {
        this.setState({monthlyIncome: event.target.value});
    }

    changephoneNumberHandler= (event) => {
      this.setState({phoneNumber: event.target.value});
  }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Hemen Kredi Alın</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-outline mb-4">
                                            <label> Tc kimlik numaraniz: </label>
                                            <input type="number" placeholder="Lütfen Tcnizi giriniz" name="identificationNumber" className="form-control" 
                                                value={this.state.identificationNumber} onChange={this.changeidentificationNumberHandler}/>
                                        </div>
                                        <div className = "form-outline mb-4">
                                            <label> Adınız Soyadınız: </label>
                                            <input type="text" placeholder="Adınız Soyadınızı giriniz" name="firstName_lastName" className="form-control" 
                                                value={this.state.firstName_lastName} onChange={this.changefirstName_lastNameHandler}/>
                                        </div>
                                        <div className = "form-outline mb-4">
                                            <label> Aylık gelir: </label>
                                            <input type="number" placeholder="Aylık gelirinizi giriniz" name="monthlyIncome" className="form-control" 
                                                value={this.state.monthlyIncome} onChange={this.changemonthlyIncomeHandler}/>
                                        </div>
                                        <div className = "form-outline mb-4">
                                            <label> Telefon Numarası: </label>
                                            <input type="number" placeholder="Telefon Numaranızı girin" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveUser}>Kredi Başvurusu Yap</button>
                                    </form>
                                    
                                    
                                </div>
                                <h6>Kredi başvurusu yaptıktan sonra sms ile bilgilendirileceksiniz</h6>
                            </div>
                        </div>

                   </div>
            </div>

    
        )
    }
}

export default CreateUserComponent