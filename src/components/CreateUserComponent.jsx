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

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === 'basvur'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({identificationNumber: user.identificationNumber,
                    firstName_lastName: user.firstName_lastName,
                    monthlyIncome : user.monthlyIncome,
                    phoneNumber : user.phoneNumber
                });
            });
        }        
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {identificationNumber: this.state.identificationNumber, firstName_lastName: this.state.firstName_lastName, monthlyIncome: this.state.monthlyIncome, phoneNumber: this.state.phoneNumber};
        console.log('user => ' + JSON.stringify(user));


        // step 5

            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
                
                
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

    getTitle(){
        
            return <h3 className="text-center">Hemen Bankamızdan Kredi Alın</h3>
        
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Hemen Bankamızdan Kredi Alın</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-outline mb-4">
                                            <label> Tc kimlik numaraniz: </label>
                                            <input placeholder="Lütfen Tcnizi giriniz" name="identificationNumber" className="form-control" 
                                                value={this.state.identificationNumber} onChange={this.changeidentificationNumberHandler}/>
                                        </div>
                                        <div className = "form-outline mb-4">
                                            <label> Adınız Soyadınız: </label>
                                            <input placeholder="Adınız Soyadınızı giriniz" name="firstName_lastName" className="form-control" 
                                                value={this.state.firstName_lastName} onChange={this.changefirstName_lastNameHandler}/>
                                        </div>
                                        <div className = "form-outline mb-4">
                                            <label> Aylık gelir: </label>
                                            <input placeholder="Aylık gelirinizi giriniz" name="monthlyIncome" className="form-control" 
                                                value={this.state.monthlyIncome} onChange={this.changemonthlyIncomeHandler}/>
                                        </div>
                                        <div className = "form-outline mb-4">
                                            <label> Telefon Numarası: </label>
                                            <input placeholder="Telefon Numaranızı girin" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changephoneNumberHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveUser}>Kredi Başvurusu Yap</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>

    
        )
    }
}

export default CreateUserComponent