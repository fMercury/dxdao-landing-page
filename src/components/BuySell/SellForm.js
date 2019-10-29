import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  height: 200px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 24px;
  color: var(--dark-text-gray);
`

const FormInfoText = styled.div`
  color: var(--light-text-gray);
`

const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: rgba(48, 79, 254, 0.2);
  border: 1px solid rgba(48, 79, 254, 0.2);
  border-radius: 4px;
  height: 34px;
  line-height: 34px;
`

const BuyDXDButton = styled.div`
  background-color: #536DFE;
  border: 1px solid #304FFE;
  border-radius: 4px;
  color: white;
  text-align: center;
  height: 34px;
  line-height: 34px;
  text-transform: uppercase;
`

const SellForm = ({}) => {
  return (
    <FormWrapper>
      <BuyDXDButton>Enable DXD</BuyDXDButton>
    </FormWrapper>
  )
}

export default SellForm
