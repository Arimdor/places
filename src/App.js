import React, {Component} from 'react';
import Title from './components/Title';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<section>
				<div>
					<div>
						<Title title={"Places"} subtitle={"Descubre lugares de manera simple"}/>
						<img src={process.env.PUBLIC_URL + '/img/logo.png'} width='60' height='60' alt=""/>
						<h2>{this.state.numero}</h2>
						<button>Crear cuenta gratuita
						</button>
						<div>
							<ul>
								<li>
									<h3>Calificaciones con emociones</h3>
									<p>Califica tus lugares con experencias, no con números</p>
								</li>
								<li>
									<h3>¿Sin Internet? Sin problemas</h3>
									<p>Places funciona sin internet o con conexiones lentas</p>
								</li>
								<li>
									<h3>Tus lugares favoritos</h3>
									<p>Define tu lista de sitios favoritos</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
