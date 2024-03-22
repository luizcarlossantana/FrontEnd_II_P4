import React from 'react'

const Aluno = ({ nome, email, curso }) => {

    return (
        <div>
            <p>nome: {nome} </p>
            <p>email: {email}</p>
            <p>curso: {curso}</p>
        </div>
    )
}

export default Aluno