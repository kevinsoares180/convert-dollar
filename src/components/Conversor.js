import React, {Component} from 'react'
import './Conversor.css'

export default class Conversor extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            moedaA_valor: "",
            moedaB_valor: 0,
            moedaA_ValorAfter: 0,
       
        }
        this.converter = this.converter.bind(this);
    }

    converter()
    {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=f9a6a109a6180a869aa0`; 
        
        fetch(url)
        .then(res => res.json())
        .then((data) => {

                let moedaA_ValorAfter = parseFloat(this.state.moedaA_valor).toFixed(2);
                let cotacao = data[de_para];
                console.log(cotacao);
                let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2);
                this.setState({ moedaA_ValorAfter });
                this.setState({ moedaB_valor });
                console.log( moedaB_valor);
                console.log( this.state);
            })
    }
    render()
    {
        return(

                <div className="conversor">

                    <h2>{this.props.moedaA} PARA {this.props.moedaB}</h2>
                    <input placeholder={ this.props.moedaA} className="input-convert" type="text" onChange={(event) => { this.setState({moedaA_valor:event.target.value})}}></input>
       
                    <input className="button-convert" type="button" value="Converter" onClick={ this.converter}></input>
                    
                    
                    <h3>{this.state.moedaA_ValorAfter > 0 
                    ? 
                    this.state.moedaA_ValorAfter  +  ' ' + this.props.moedaA + ' = ' + this.state.moedaB_valor + ' ' + this.props.moedaB
                    : 
                    '0' + this.props.moedaA + " = " + this.state.moedaB_valor + " " + this.props.moedaB}</h3>
                </div>

        );
    }
}