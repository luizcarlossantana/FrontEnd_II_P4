import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function mudarMsg(mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicidio"
        } else if (mes === "outubro") {
            return "Concientização sobre o cancer de mama"
        } else {
            return "Prevenção e combate ao câncer depróstata."
        }

    }

    function mudarCor(cor) {
        if (cor === "setembro") {
            return styles.setembroClass
        } else if (cor === "outubro") {
            return styles.outubroClass
        } else {
            return styles.novembroClass
        }

    }

    return (
        <div className={mudarCor(props.mes)}>
            {mudarMsg(props.mes)}
        </div>
    )
}

export default Campanha