import React,{Component}  from 'react'
import styled from 'styled-components'

const MyDiv= styled.div`
background-color: ${props=>(props.status ? 'silver': 'black')};
display:flex;
@media (max-width:786px ){
 background-color:yellow;
}
`;

const Button= styled.button`

background-color:purple;
color:white;
border-radius:10px;
border:none;
&:hover{
 background-color:orange;
}
`


class Test extends Component {
constructor(){
 super()
 this.state={
  status:true
 }
}
clickHandler=()=>{
 this.setState({
  status:!this.state.status,
 })
}
 render(){
    return (
      <MyDiv status={this.state.status}>
       <p >hiii pegi pinkey </p>
       <p >hiii pegi pinkey </p>
       <p >hiii pegi pinkey </p>
       <Button onClick={this.clickHandler}> change</Button>
      </MyDiv>
    )
  }
}

export default Test