import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // Importe o PropTypes
import { setSelectedPercentage } from '../../../actions/selectedPercentageActions';
import { CBadge } from '@coreui/react';

const BadgeForViabilidadesGerenciais = ({ selectedPercentage, setSelectedPercentage }) => {
  useEffect(() => {
    const totalViabilidadeTecnica = parseFloat(localStorage.getItem('selectedPercentage')) || 0.0;
    setSelectedPercentage(totalViabilidadeTecnica.toFixed(0));
  }, [setSelectedPercentage]);

  return <CBadge color="info"> {selectedPercentage}%</CBadge>;
};

// Defina o tipo esperado da propriedade selectedPercentage usando PropTypes
BadgeForViabilidadesGerenciais.propTypes = {
  selectedPercentage: PropTypes.number.isRequired,
  setSelectedPercentage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedPercentage: state.selectedPercentage,
});

const mapDispatchToProps = {
  setSelectedPercentage,
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgeForViabilidadesGerenciais);
