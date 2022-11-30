import React from 'react'
import styled from 'styled-components'
import HubspotForm from 'react-hubspot-form'

// SECCIÓN PARA APLICAR A TRABAJO (HUBSPOT FORM)
function Apply() {
    return (
        <ApplyWrapper>
            <ApplyTitle><h1>Apply now your position</h1></ApplyTitle>
            <HubspotForm
                    portalId='20639219'
                    formId='e59bf87e-a11c-43b3-82ae-29c364a1bba7'
                    onSubmit={() => console.log('Submit!')}
                    onReady={(form) => console.log('Form ready!')}
                    loading={<div>Loading...</div>}
                    />
        </ApplyWrapper>
    )
}

export default Apply


// ESTILADO
const ApplyWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ApplyTitle = styled.div`
    margin-bottom: 3%;
`