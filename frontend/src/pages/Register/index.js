import React , {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';

import '../../services/api'
import api from '../../services/api';

export default function Register(){

const [id, setId] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [whatsapp, setWhatsapp] = useState('');
const [city, setCity] = useState('');
const [uf, setUf] = useState('');

const history =useHistory();

function show() {
    document.querySelector('#public').classList.toggle('hide')
};



   async  function handleRegister(e){
        e.preventDefault();

        const data = {
            id,
            name,
            email,
            whatsapp,
            city,
            uf,

        };
try{
    const response =   await api.post('ongs', data);
    alert(`Obrigado por se cadastrar. Seu Id de acesso: ${response.data.id}, não esqueça de anotar!`);
    history.push('/');

}catch (err){

    alert(`Erro no cadastro, tente novamente.`);
}
      
    }
return(

<div className="register-container">
<div className="content">
<section>

<img src={logoImg} alt="Be the Hero"/>

<h1>Cadastro</h1>
<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

<Link className="back-link" to="/">
    <FiArrowLeft size={16} color="#E02041"/>
    não tenho cadastro

</Link>



</section>



   

<form>

<input id="public" placeholder="ID"
value={id}
onChange={ e => setId(e.target.value) }

/>

<input placeholder="Nome da ONG"
value={name}
onChange={ e => setName(e.target.value) }

/>



<input type="email" placeholder="E-mail"
value={email}
onChange={ e => setEmail(e.target.value) }

/>

<input placeholder="whatsapp"
value={whatsapp}
onChange={ e => setWhatsapp(e.target.value) }
/>


<div className="input-group">
<input 
placeholder="Cidade"
value={city}
onChange={ e => setCity(e.target.value) }

/>

<input placeholder="UF" 
style={{width: 80}}
value={uf}
onChange={ e => setUf(e.target.value) }
/>


</div>

<button className="button" type="submit" onClick={handleRegister}>Cadastrar

</button>

</form>

</div>
</div>

); 


}