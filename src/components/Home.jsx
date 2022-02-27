import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Bilgilerinizi Girerek Kolaylıkla Kredi Alabilirsiniz</h2>
                <p>Adınızı, soyadınızı, tc kimlik numaranızı ve telefon numaranızı girerek bankamızdan kredi alabilirsiniz. <Link to="/kredibasvurusu">Kredi için tıklayınz</Link></p> 
            </div>
        );
    }
}

export default Home;