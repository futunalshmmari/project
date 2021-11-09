import React from "react";


function Shopcart  {
   
        this.state = {
            count: 1,
           
        };
    }
    
    IncrementItem = () => {
        if(this.state.count == 'zero'){
            this.setState({ count: 1 });
        }
        else{
            this.setState({ count: this.state.count + 1 });
        }
        console.log("I am clicked ", this.state.count);


      }
      DecreaseItem = () => {
          if(this.state.count>1){
             this.setState({ count: this.state.count - 1 });
          } 
          else{
            this.setState({ count: "zero"});
          }

      }
      ToggleClick = () => {
        this.setState({ count: this.state.count }
            );
      }
    render() {
        return (
            <div >
                <img width="50" height="50" src={this.props.image} />
               
                <tr>
                <td>{this.props.title }</td> 
                <td><b> {this.props.quantity}</b></td>
                <td>{this.props.button}</td>
                <button onClick={this.IncrementItem}>+</button>
                <td> <span id="span1" style={{ color: "blue", backgroundColor: "lightgray" }}>
          {" "}
          {this.state.count}

        </span>
        
        </td>
                <button onClick={this.DecreaseItem}>-</button>
               
                </tr>
                
                <hr></hr>
            </div>
        );
    }
}
export default Shopcart