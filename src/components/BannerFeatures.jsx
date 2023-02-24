import React, { Component } from "react";
import ButtonShowMore from "./UI/ButtonShowMore";
import servicesImg from '../assets/images/bannerFeatures.png'

export default class BannerFeatures extends Component {
	render() {
		return (
			<div className="w-full h-[23em] flex justify-center items-center bg-[#c9dbf4]">
				<div className="w-full h-20 lg:max-w-6xl flex flex-col justify-center items-center ">
					<img
                        className="w-full lg:max-w-5xl"
						src={servicesImg}
						alt="asd"
					/>

					<ul className="w-full flex justify-between">
						<li className="w-[13rem] flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Tokenización y Trazabilidad. Trazá, gestioná y
								diferenciá de forma simple tus activos
								productivos.
							</p>
                            <ButtonShowMore />
						</li>
						<li className="w-[13rem] flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Verificación Documental. Mejorá la transparencia
								y confianza agregando blockchain a tus
								documentos públicos.
							</p>
                            <ButtonShowMore/>
						</li>
						<li className="w-[13rem] flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Utilizá tu información de trazabilidad como
								Prueba de Existencia (PoE) de los bienes y
								accedé a Seguros y Créditos de forma digital,
								rápida y segura.
							</p>
                            <ButtonShowMore/>
						</li>
						<li className="w-[13rem] flex flex-col justify-center items-center text-center font-semibold text-sm ml-5">
							<p className="h-[8em] mt-5">
								Servicio de verificación de Libre de
								Deforestación de establecimientos productivos.
							</p>
                            <ButtonShowMore/>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
