import React from 'react';
import styled from '@emotion/styled';
import { primerLetraUppercase } from './Helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    const { marca, year, plan } = datos;
    if (marca === '' || year === '' || plan === '') return null;
    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {primerLetraUppercase(marca)}</li>
                <li>Plan: {primerLetraUppercase(plan)}</li>
                <li>Año del auto: {primerLetraUppercase(year)}</li>
            </ul>
        </ContenedorResumen>
    );
};

export default Resumen;
