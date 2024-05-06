import { useState } from "react"
import styled from "styled-components"

export const Input = ({ type, labelText, name, values, selectedValue }) => {
    const [checkboxCheck, setCheckboxCheck] = useState("false")
    if(type === "text"){
        return(
            <InputText type={type}></InputText>
        )
    } if(type === "number"){
        return(
            <InputNumber type={type}></InputNumber>
        )
    } if(type === "email"){
        return(
            <InputEmail type={type}></InputEmail>
        )
    } if(type === "checkbox"){
        return(
            <LabelCheckbox htmlFor={name} onClick={(e) => {!e.target.children[0].checked ? setCheckboxCheck("true") : setCheckboxCheck("false")}} className={checkboxCheck}> {labelText} 
                <input type={type} id={name} onClick={(e) => e.stopPropagation()}></input> 
            </LabelCheckbox>  
        )
    } if(type === "select"){
        return(
            <Select>
                <select defaultValue={selectedValue}>
                    {Object.keys(values).map((element, i) => 
                        <option value={element} key={i}> {values[element]} </option>
                    )}
                </select>
            </Select>
        )
    } if(type === "tel"){
        return(
            <InputTel>
                <select defaultValue={selectedValue}>
                    {Object.keys(values).map((element, i) => 
                        <option value={element} key={i}> {values[element]} </option>
                    )}
                </select>
                <input type={type}>
                    
                </input>
            </InputTel>
        )
    }
  return (
    <div>Input</div>
  )
}

const InputText = styled.input`
    width: 100%;
    background-color: #f4f4f4;
    font-size: 14px;
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 100px;
    :focus-within{
        border-color: #c4c4c4;
    }
`

const InputNumber = styled(InputText)``

const InputEmail = styled(InputText)``

const LabelCheckbox = styled.label`
    flex-direction: row!important;
    position: relative;
    align-items: center;
    cursor: pointer;
    &:nth-last-of-type(1) {
        margin-bottom: 0!important;
    }
    &.true:after{
        display: block;
    }
    &.false:after{
        display: none;
    }
    input{
        padding: 0;
        height: 0;
        width: 0;
        overflow: hidden;
        margin-bottom: 0;
        visibility: hidden;
        cursor: pointer;
    }
    :after {
        content: '';
        position: absolute;
        display: none;
        top: 2.5px;
        left: 9px;
        width: 6px;
        height: 12px;
        border: solid #8e8e8e;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    :before {
        content:'';
        -webkit-appearance: none;
        background-color: transparent;
        border: 2px solid #8e8e8e;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
        padding: 10px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
        border-radius: 4px;
    }
`

const Select = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #f4f4f4;
    border: 1px solid transparent;
    border-radius: 100px;
    :focus-within{
        border-color: #c4c4c4;
    }
    select{
        font-size: 16px;
        padding: 10px 35px 10px 20px;
        background-color: transparent;
        border-color: transparent;
        appearance: none;
        outline: none;
        position: relative;
        flex: 1;
        cursor: pointer;
        ::-ms-expand {
            display: none;
        }
    }
    :after{
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        right: 23px;
        width: 8px;
        height: 8px;
        border: solid #8e8e8e;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        z-index: 1;
    }
`

const InputTel = styled.div`

`