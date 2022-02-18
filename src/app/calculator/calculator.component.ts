import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  result:string= '';
  longButtons:string[] = ['AC','CE'];
  buttons:string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
  errorMessage:string= '';

  private prevValue:string = ' ';
  private currValue:string = ' ';


  onClickBtn(value:string){
    if(this.result != ''){
      this.prevValue = this.currValue;
      this.currValue = value;
    }

    if (value == 'AC'){
      this.result = '';
      this.errorMessage='';
    }else if(value == 'CE'){
      this.result = this.prevValue != '=' ? this.result.slice(0,-1): this.result;
    }else if (value == '=') {
      const lastvalue = this.result[this.result.length -1];
      if (lastvalue == '+' || lastvalue == '-'
      || lastvalue == '*' || lastvalue == '/' || this.result[0] == '+' ||
      this.result[0] == '*' || this.result[0] =='/'){
        this.errorMessage = 'Please enter a validtate expression';
      }else{
        this.result = this.result == undefined?'': eval(this.result);
        this.errorMessage='';
      }
    }else if (value == '+' || value == '-' || value == '*' || value =='/'){
      if (this.result[this.result.length -1] == '+' || this.result[this.result.length -1]== '-'
      || this.result[this.result.length -1] == '*' || this.result[this.result.length -1] == '/'){
        this.result = this.result.slice(0,-1) + value;
      }else{
        this.result += value
      }
    }
    else{
      this.result += value;
    }
  }



}
